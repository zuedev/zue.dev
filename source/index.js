import Router from "./library/router.js";

import talent96 from "./data/talent96.js";

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
    const router = new Router(request, environment, context);

    router.add("/", () => {
      return router.respond({
        message: "Hello, World! :3",
      });
    });

    router.add("/status", (request) => {
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
        return router.respond({
          status: "ok",
        });

      return router.respond({
        error: `service not found`,
      });
    });

    router.add("/96/twitch/streaming", async (request) => {
      const url = new URL(request.url);
      const channel = url.searchParams.get("channel");

      if (!channel)
        return router.respond({
          error: `channel not provided`,
        });

      const whitelist = ["zuedev", ...talent96];

      if (!whitelist.includes(channel))
        return router.respond({
          error: `channel not whitelisted`,
        });

      const channelLive = await isTwitchChannelLive(channel);

      if (channelLive)
        return router.respond({
          status: "live",
        });

      return router.respond({
        status: "offline",
      });
    });

    return router.route();
  },
};

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
