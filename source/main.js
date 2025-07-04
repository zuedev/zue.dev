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

          const channelWhitelist = ["@vtsweets"];

          if (!channelWhitelist.includes(channel))
            return new Response(
              JSON.stringify({
                error: `channel not allowed`,
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
              latestVideoId,
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
          const { searchParams } = new URL(request.url);
          const url = searchParams.get("url");
          const type = searchParams.get("type") || "webp";
          const fullPage = searchParams.get("fullPage") !== null;
          const width = parseInt(searchParams.get("width"), 10) || 1920;
          const height = parseInt(searchParams.get("height"), 10) || 1080;
          const delay = parseInt(searchParams.get("delay"), 10) || 0;

          if (!url)
            return router.respond({
              error: "URL parameter is required",
            });

          if (!/^https?:\/\//.test(url))
            return router.respond({
              error: "Invalid URL format",
            });

          const browser = await puppeteer.launch(environment.MYBROWSER);
          const page = await browser.newPage();
          await page.setViewport({ width, height });
          await page.goto(url, {
            waitUntil: "networkidle2",
          });
          if (delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
          const screenshot = await page.screenshot({
            type,
            fullPage,
          });
          await browser.close();

          return new Response(screenshot, {
            headers: {
              "content-type": `image/${type}`,
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
