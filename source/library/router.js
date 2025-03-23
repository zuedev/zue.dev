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
    this.routes = [];
  }

  /*
    Add a new route to the router.

    @param {string} path - the path to match
    @param {function} handler - the handler function to call if the path matches

    @returns {Router} the router object
  */
  add(path, handler) {
    return this.routes.push({
      path,
      handler,
    });
  }

  /*
    Helper function to respond with a JSON object

    @param {object} body - the JSON object to respond with
    
    @returns {Response} a new Response object
  */
  respond(body) {
    return new Response(JSON.stringify(body), {
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

      // Use a Map for faster lookups
      const route = this.routes.find((r) => r.path === normalizedPath);

      if (route) {
        return route.handler(this.request, this.environment, this.context);
      }

      // Return 404 if route not found
      return this.respond({
        error: `Route not found: ${normalizedPath}`,
        status: 404,
      });
    } catch (error) {
      // Handle unexpected errors
      return this.respond({
        error: `Internal Server Error: ${error.message}`,
        status: 500,
      });
    }
  }
}
