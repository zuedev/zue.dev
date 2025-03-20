export default {
  async fetch(request, environment, context) {
    const url = new URL(request.url);

    switch (url.pathname) {
      // return a simple hello world message
      case "/":
        return Response.json({
          message: "Hello, World! :3",
        });

      // return status of a given service
      case "/status":
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
          return Response.json({
            status: "ok",
          });

        return Response.json({
          error: `service not found`,
        });

      // default case
      default:
        return Response.json({
          error: "not found",
        });
    }
  },
};
