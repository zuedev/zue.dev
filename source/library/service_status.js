export default (service) => {
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

  if (acceptedServices.includes(service)) return true;

  return false;
};
