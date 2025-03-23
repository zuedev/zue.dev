/*
  Router class to handle routing of requests based on the request path.

  @param {Request} request - the incoming request object
  @param {Environment} environment - the environment object
  @param {Context} context - the context object

  @returns {Response} a new Response object
*/
export default class Router {
  constructor(request, environment, context) {
    this.request = request;
    this.environment = environment;
    this.context = context;
    this.routes = new Map(); // Use Map for faster lookups
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
    this.routes.set(normalizedPath, handler);
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

      const handler = this.routes.get(normalizedPath);

      if (handler) {
        return handler(this.request, this.environment, this.context);
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
