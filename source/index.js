import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";

import service_status from "./library/service_status";

const app = new Hono();

// enable cors for all routes
app.use(cors());

// pretty print json responses
app.use(prettyJSON());

// add a request id to all requests
app.use(requestId());

// return a simple hello world message
app.get("/", (context) => {
  return context.json({
    message: "Hello, World! :3",
  });
});

// return status of api itself
app.get("/status", (context) => {
  return context.json({
    status: "ok",
  });
});

// return status of a given service
app.get("/status/:service", (context) => {
  const { service } = context.req.param();

  if (!service_status(service))
    return context.json({ error: "unknown service" }, 400);

  return context.json({
    status: "ok",
  });
});

export default app;
