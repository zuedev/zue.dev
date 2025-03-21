import talent96 from "./data/talent96.js";

export default {
  async fetch(request, environment, context) {
    const url = new URL(request.url);

    switch (url.pathname) {
      // return a simple hello world message
      case "/":
        return Respond({
          message: "Hello, World! :3",
        });

      // return status of a given service
      case "/status":
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
          return Respond({
            status: "ok",
          });

        return Respond({
          error: `service not found`,
        });

      // check if twitch user is streaming from a whitelist
      case "/96/twitch/streaming":
        const channel = url.searchParams.get("channel");

        if (!channel)
          return Respond({
            error: `channel not provided`,
          });

        const whitelist = ["zuedev", ...talent96];

        if (!whitelist.includes(channel))
          return Respond({
            error: `channel not whitelisted`,
          });

        const channelLive = await isTwitchChannelLive(channel);

        if (channelLive)
          return Respond({
            status: "live",
          });

        return Respond({
          status: "offline",
        });

      // default case
      default:
        return Respond({
          error: "not found",
        });
    }
  },
};

function Respond(body) {
  return new Response(JSON.stringify(body), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

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
