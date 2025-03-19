import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// unlock cors for all routes
app.use("*", cors());

// return a simple message
app.get("/", (c) => {
  return c.json({
    message: "Hello, World! :3",
  });
});

// return own status of the server
app.get("/status", (c) => {
  return c.json({
    status: "ok",
  });
});

// return status of a given service
app.get("/status/:service", (c) => {
  const { service } = c.req.param();

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

  if (!acceptedServices.includes(service)) {
    return c.json(
      {
        error: "unknown service",
      },
      400
    );
  }

  return c.json({
    status: "ok",
  });
});

export default app;
