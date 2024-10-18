"use client";

export default () => {
  return (
    <>
      <div className="p-4 text-2xl space-y-4">
        <section className="text-6xl font-bold">
          <h1>What can I teach you?</h1>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            // {
            //   title: "Basics of X language",
            //   description:
            //     "From JavaScript to Python, I can help you get started with the basics of a language.",
            //   classes: "bg-gradient-to-r from-cyan-500 to-blue-500",
            //   bgImage: "https://placehold.co/500/lime/white",
            //   url: "/mentoring/basics",
            // },
            // {
            //   title: "Basics of X language",
            //   description:
            //     "From JavaScript to Python, I can help you get started with the basics of a language.",
            //   classes: "bg-gradient-to-br from-blue-500 to-cyan-500",
            //   url: "/mentoring/basics",
            // },
            {
              title: "Mastering Cloudflare's Free Plan",
              description:
                "Learn how to use Cloudflare's free plan to its full potential.",
              classes: "bg-gradient-to-br from-blue-500 to-cyan-500 text-black",
              bgImage:
                "https://public-files.gumroad.com/k6xjy7a7hjsv19gsmhuj8r7c10md",
              url: "https://gumroad.zue.dev/l/mastering-cloudflare?layout=profile",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.url}
              className={`p-4 space-y-4 bg-cover bg-center flex flex-col justify-center items-centertransition-transform transform hover:scale-105 ${item.classes}`}
              style={{
                backgroundImage: item.bgImage ? `url(${item.bgImage})` : "",
              }}
            >
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
