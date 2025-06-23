import puppeteer from "@cloudflare/puppeteer";

/*
  Router class to handle routing of requests based on the request path.

  @param {Request} request - the incoming request object
  @param {Environment} environment - the environment object
  @param {Context} context - the context object

  @returns {Response} a new Response object
*/
class Router {
  constructor(request, environment, context) {
    this.request = request;
    this.environment = environment;
    this.context = context;
    this.routes = new Map(); // Use Map for faster lookups
    this.parameters = {}; // Store extracted route parameters
  }

  /*
    Add a new route to the router.

    @param {string} path - the path to match
    @param {function} handler - the handler function to call if the path matches

    @returns {Router} the router object
  */
  add(path, handler) {
    if (typeof path !== "string") {
      throw new TypeError("Path must be a string");
    }
    if (typeof handler !== "function") {
      throw new TypeError("Handler must be a function");
    }

    const normalizedPath = path.replace(/\/+$/, ""); // Normalize path
    const pathRegex = new RegExp(
      "^" +
        normalizedPath
          .replace(/:[^/]+/g, "([^/]+)") // Convert :param to regex group
          .replace(/\//g, "\\/") +
        "$"
    );
    this.routes.set(pathRegex, { handler, originalPath: normalizedPath });
    return this;
  }

  /*
    Helper function to respond with a JSON object.

    @param {object} body - the JSON object to respond with
    
    @returns {Response} a new Response object
  */
  respond(body, status = 200) {
    return new Response(JSON.stringify(body), {
      status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  /*
    Route the request to the appropriate handler based on the request path.

    @returns {Response} a new Response object
  */
  route() {
    try {
      const url = new URL(this.request.url);
      const normalizedPath = url.pathname.replace(/\/+$/, ""); // Remove trailing slashes

      for (const [pathRegex, { handler, originalPath }] of this.routes) {
        const match = normalizedPath.match(pathRegex);
        if (match) {
          // Extract parameters
          const paramNames = [...originalPath.matchAll(/:([^/]+)/g)].map(
            (m) => m[1]
          );
          this.parameters = paramNames.reduce((params, name, index) => {
            params[name] = match[index + 1];
            return params;
          }, {});

          return handler(this.request, this.environment, this.context);
        }
      }

      // Return 404 if route not found
      return this.respond(
        {
          error: `Route not found: ${normalizedPath}`,
        },
        404
      );
    } catch (error) {
      // Handle unexpected errors
      return this.respond(
        {
          error: `Internal Server Error: ${error.message}`,
        },
        500
      );
    }
  }
}

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
        return router.respond({
          error: `channel not provided`,
        });

      const whitelist = [
        "zuedev",
        ...["vtsweets", "bunnibana", "yayjaybae", "justawoney", "tygiwygi"],
      ];

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

    router.add("/browser-rendering/screenshot", async (request) => {
      const { searchParams } = new URL(request.url);
      const url = searchParams.get("url");
      const type = searchParams.get("type") || "webp";
      const fullPage = searchParams.get("fullPage") !== null;
      const width = parseInt(searchParams.get("width"), 10) || 1920;
      const height = parseInt(searchParams.get("height"), 10) || 1080;

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
      await page.goto(url);
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
    });

    return router.route();
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
