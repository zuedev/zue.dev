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
              title: "Web Basics",
              description:
                "Learn HTML, CSS & JavaScript to Create Stunning Websites!",
              classes: "bg-gradient-to-br from-blue-500 to-cyan-500 text-black",
              bgImage:
                "https://public-files.gumroad.com/xocc3smd5lmeq7ahiz1o8pggx9z4",
              url: "https://zuedev.gumroad.com/l/web-basics?layout=profile",
            },
            {
              title: "Python Fundamentals",
              description:
                "Master the Basics of Python & Kickstart Your Coding Journey!",
              classes: "bg-gradient-to-br from-blue-500 to-cyan-500 text-black",
              bgImage:
                "https://public-files.gumroad.com/jjfjnqk9jqfdqidfmzyfqnaht1d2",
              url: "https://zuedev.gumroad.com/l/python-fundamentals?layout=profile",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.url}
              className={`p-4 space-y-4 bg-cover bg-center flex flex-col justify-center items-centertransition-transform transform hover:scale-105 ${item.classes}`}
              style={{
                backgroundImage: item.bgImage ? `url(${item.bgImage})` : "",
              }}
              target="_blank"
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
