export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      const apiPath = url.pathname.split("/").filter(Boolean);

      if (!apiPath[1]) apiPath[1] = "index";

      switch (apiPath[1]) {
        case "index":
          return new Response(JSON.stringify({ message: "Hello, World! :3" }), {
            headers: { "Content-Type": "application/json" },
          });
        default:
          return new Response(JSON.stringify({ message: "Not Found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
      }
    }

    return env.ASSETS.fetch(request);
  },
};