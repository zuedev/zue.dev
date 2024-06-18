export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/_worker/"))
      return _workerHandler(url.pathname);

    return env.ASSETS.fetch(request);
  },
};

function _workerHandler(pathname) {
  switch (pathname) {
    case "/_worker/hello":
      return Respond("Hello, world!");
    case "/_worker/goodbye":
      return Respond("Goodbye, world!");
    default:
      return Respond("Not found", { status: 404 });
  }
}

function Respond(response, options = {}) {
  if (typeof response === "string")
    response = JSON.stringify({ message: response });

  return new Response(response, options);
}
