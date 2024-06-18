export default {
  async fetch(request, environment, context) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/_worker/")) {
      switch (pathname) {
        case "/_worker/hello":
          return Respond("Hello, world!");
        case "/_worker/goodbye":
          return Respond("Goodbye, world!");
        case "/_worker/guestbook/get":
          const getGuestbook = await environment.KV.get("guestbook");
          return Respond(getGuestbook);
        case "/_worker/guestbook/add":
          const { name, message } = await request.json();

          const guestbook = await environment.KV.get("guestbook");

          if (guestbook) {
            guestbook.push({ name, message });
          } else {
            guestbook = [{ name, message }];
          }

          await environment.KV.put("guestbook", guestbook);

          return Respond(guestbook);
        default:
          return Respond("Not found", { status: 404 });
      }
    }

    return environment.ASSETS.fetch(request);
  },
};

function Respond(response, options = {}) {
  if (typeof response === "string")
    response = JSON.stringify({ message: response });

  return new Response(response, options);
}
