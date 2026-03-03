const configuration = {
  redirects: [
    // socials
    { from: "/github", to: "https://github.com/zuedev" },
    { from: "/gitlab", to: "https://gitlab.com/zuedev" },
    { from: "/discord", to: "https://discord.gg/N34EeYtFCs" },
    { from: "/gumroad", to: "https://zuedev.gumroad.com/" },
    { from: "/linkedin", to: "https://linkedin.com/in/zuedev" },
    { from: "/steam", to: "https://steamcommunity.com/id/zuedev" },

    // bank direct pay
    { from: "/monzo", to: "https://monzo.me/alexanderpooley5" },

    // aws
    { from: "/aws", to: "https://zuedev.awsapps.com/start" },

    // stripe links
    { from: "/stripe", to: "/stripe/billing" },
    {
      from: "/stripe/billing",
      to: "https://billing.stripe.com/p/login/6oE8Ag4EK2N82OI000",
    },
    {
      from: "/donate",
      to: "/stripe/donate",
    },
    {
      from: "/stripe/donate",
      to: "https://donate.stripe.com/8x2aEW6esd4lfAc75g97G05",
    },
    {
      from: "/pay",
      to: "/stripe/pay",
    },
    {
      from: "/stripe/pay",
      to: "https://buy.stripe.com/5kQ00i1Yc9S99bOahs97G06",
    },
    {
      from: "/stripe/book",
      to: "https://book.stripe.com/cNi14mfP21lD1Jm61c97G07",
    },

    // cv/resume links
    {
      from: "/cv",
      to: "https://drive.google.com/file/d/1S49c4nQEpY5IeQNkTcLlnabz664RlnAj/view?usp=sharing",
    },
    {
      from: "/cv.pdf",
      to: "https://drive.google.com/file/d/1S49c4nQEpY5IeQNkTcLlnabz664RlnAj/view?usp=sharing",
    },
    {
      from: "/resume.pdf",
      to: "https://drive.google.com/file/d/1S49c4nQEpY5IeQNkTcLlnabz664RlnAj/view?usp=sharing",
    },
    {
      from: "/resume",
      to: "https://drive.google.com/file/d/1S49c4nQEpY5IeQNkTcLlnabz664RlnAj/view?usp=sharing",
    },

    // terms
    { from: "/tos", to: "/terms-of-service/" },
    { from: "/terms", to: "/terms-of-service/" },

    // privacy
    { from: "/pp", to: "/privacy-policy/" },
    { from: "/privacy", to: "/privacy-policy/" },

    // help
    { from: "/support", to: "/help/" },
    { from: "/help", to: "/help/" },

    // cal
    { from: "/cal", to: "https://cal.com/zuedev" },
  ],
};

export default {
  /*
    Fetch event handler, this function will be called whenever a request is made to the worker.
    The function will parse the request and return a response based on the request path.

    @param {Request} request - the incoming request object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {Response} a new Response object
  */
  async fetch(request, environment, context) {
    const { pathname } = new URL(request.url);

    if (configuration.redirects) {
      for (const redirect of configuration.redirects) {
        if (pathname === redirect.from || pathname === redirect.from + "/") {
          return Response.redirect(redirect.to, 301);
        }
      }
    }

    if (pathname.startsWith("/api")) {
      return new Response("Hello from the API!", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    return environment.ASSETS.fetch(request);
  },

  /*
    Email event handler, this function will be called whenever an email is sent to the worker.
    The function will parse the email message and forward it to a specified email address.

    @param {Message} message - the incoming email message object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {void}
  */
  async email(message, environment, context) {
    message.forward("alex@zue.dev");
  },

  /*
    Scheduled event handler, this function will be called whenever a scheduled event is triggered.
    The function will perform a task and return a response based on the task outcome.

    @param {Event} event - the incoming event object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {void}
  */
  async scheduled(event, environment, context) {
    console.log("Scheduled event triggered!");
  },
};
