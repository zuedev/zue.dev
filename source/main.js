import puppeteer from "@cloudflare/puppeteer";

export default {
  /*
    Fetch event handler, this function will be called whenever a request is made to the worker.
    The function will parse the request and return a response based on the request path.

    @param {Request} request - the incoming request object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {Response} a new Response object
  */
  async fetch(request, environment, context) {
    const { pathname } = new URL(request.url);

    switch (pathname) {
      case "/":
        return (() => {
          return new Response(
            JSON.stringify({
              message: "Hello, World! :3",
            }),
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            }
          );
        })();
      case "/status":
        return (() => {
          const url = new URL(request.url);
          const service = url.searchParams.get("service");

          const acceptedServices = [
            "dns",
            "load-balancer",
            "cdn",
            "functions",
            "mysql-cluster",
            "mongodb-cluster",
            "redis-cluster",
            "elasticsearch-cluster",
            "git-connector",
            "job-runners",
            "container-registry",
            "kubernetes-cluster",
            "bare-metal-servers",
            "game-server-api",
            "anti-ddos-protection",
            "anti-cheat-api",
          ];

          if (acceptedServices.includes(service))
            return new Response(
              JSON.stringify({
                status: "ok",
                service,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          return new Response(
            JSON.stringify({
              error: `service not found`,
            }),
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            }
          );
        })();
      case "/96/twitch/streaming":
        return (async () => {
          /*
            Checks if a twitch channel is live by fetching the "live" preview image of the channel,
            if the image is fetched successfully, then the channel is live, otherwise it's offline.

            @param {string} channel - the twitch channel name
            @returns {boolean} true if the channel is live, false otherwise
          */
          async function isTwitchChannelLive(channel) {
            // construct preview image url with channel name
            const livePreviewUrl = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-320x180.jpg`;

            // fetch the preview image, don't follow redirects
            const response = await fetch(livePreviewUrl, {
              redirect: "manual",
            });

            // check if the image was fetched successfully
            return response.ok;
          }

          const url = new URL(request.url);
          const channel = url.searchParams.get("channel");

          if (!channel)
            return new Response(
              JSON.stringify({
                error: `channel not provided`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          const whitelist = [
            "zuedev",
            ...["vtsweets", "bunnibana", "yayjaybae", "justawoney", "tygiwygi"],
          ];

          if (!whitelist.includes(channel))
            return new Response(
              JSON.stringify({
                error: `channel not whitelisted`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          const channelLive = await isTwitchChannelLive(channel);

          if (channelLive)
            return new Response(
              JSON.stringify({
                status: "live",
                channel,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          return new Response(
            JSON.stringify({
              status: "offline",
            }),
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            }
          );
        })();
      case "/browser-rendering/screenshot":
        return (async () => {
          /*
            Checks if a twitch channel is live by fetching the "live" preview image of the channel,
            if the image is fetched successfully, then the channel is live, otherwise it's offline.

            @param {string} channel - the twitch channel name
            @returns {boolean} true if the channel is live, false otherwise
          */
          async function isTwitchChannelLive(channel) {
            // construct preview image url with channel name
            const livePreviewUrl = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-320x180.jpg`;

            // fetch the preview image, don't follow redirects
            const response = await fetch(livePreviewUrl, {
              redirect: "manual",
            });

            // check if the image was fetched successfully
            return response.ok;
          }

          const url = new URL(request.url);
          const channel = url.searchParams.get("channel");

          if (!channel)
            return new Response(
              JSON.stringify({
                error: `channel not provided`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          const whitelist = [
            "zuedev",
            ...["vtsweets", "bunnibana", "yayjaybae", "justawoney", "tygiwygi"],
          ];

          if (!whitelist.includes(channel))
            return new Response(
              JSON.stringify({
                error: `channel not whitelisted`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          const channelLive = await isTwitchChannelLive(channel);

          if (channelLive)
            return new Response(
              JSON.stringify({
                status: "live",
                channel,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          return new Response(
            JSON.stringify({
              status: "offline",
            }),
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            }
          );
        })();
      case "/ai/image":
        return (async () => {
          const url = new URL(request.url);
          const prompt = url.searchParams.get("prompt");

          if (!prompt)
            return new Response(
              JSON.stringify({
                error: `prompt not provided`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          if (prompt.length > 2048)
            return new Response(
              JSON.stringify({
                error: `prompt too long, max 2048 characters`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          if (prompt.length < 5)
            return new Response(
              JSON.stringify({
                error: `prompt too short, min 5 characters`,
              }),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );

          const response = await environment.AI.run(
            "@cf/black-forest-labs/flux-1-schnell",
            {
              prompt,
            }
          );

          const binaryString = atob(response.image);

          const img = Uint8Array.from(binaryString, (m) => m.codePointAt(0));

          return new Response(img, {
            headers: {
              "Content-Type": "image/webp",
            },
          });
        })();
      default:
        return new Response(
          JSON.stringify({
            error: `path not found`,
          }),
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
    }
  },

  /*
    Email event handler, this function will be called whenever an email is sent to the worker.
    The function will parse the email message and forward it to a specified email address.

    @param {Message} message - the incoming email message object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {void}
  */
  async email(message, environment, context) {
    message.forward("alex@zue.dev");
  },

  /*
    Scheduled event handler, this function will be called whenever a scheduled event is triggered.
    The function will perform a task and return a response based on the task outcome.

    @param {Event} event - the incoming event object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {void}
  */
  async scheduled(event, environment, context) {
    console.log("Scheduled event triggered!");
  },
};
