export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) return apiHandler(url.pathname);

    return env.ASSETS.fetch(request);
  },
};

function apiHandler(pathname) {
  switch (pathname) {
    case "/api/hello":
      return Respond("Hello, world!");
    case "/api/goodbye":
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
