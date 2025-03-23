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
    for (const route of this.routes) {
      const url = new URL(this.request.url);

      if (url.pathname === route.path) {
        return route.handler(this.request, this.environment, this.context);
      }
    }

    return this.respond({
      error: `route not found`,
    });
  }
}
