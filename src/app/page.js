"use client";

export default () => {
  return (
    <>
      <div className="space-y-8 p-4 text-2xl">
        <section className="text-8xl font-bold">
          <h1>
            Hello, World!
            <br />
            I'm <pan>zuedev</pan>.
          </h1>
        </section>
        <section className="border-l-4 border-black dark:border-white">
          <h2 className="text-6xl font-bold bg-black text-white dark:bg-white dark:text-black p-2">
            Who am I?
          </h2>

          <div className="space-y-4 p-4 text-justify">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">Formally...</h3>
              <p>
                I'm a software engineer and entrepreneur from the UK who thrives
                on building things that help and entertain people.
              </p>
              <p>
                If you want to learn more about me, check out my{" "}
                <a
                  className="underline decoration-wavy text-orange-500 dark:text-yellow-300"
                  href="/resume"
                >
                  resume
                </a>
                . In short:
              </p>
              <ul className="pl-4 list-disc list-inside">
                <li>Software engineer (full-stack) for more than 12 years;</li>
                <li>Trusted with leadership for 9 of those years;</li>
                <li>
                  Given directorship of a{" "}
                  <a
                    className="underline decoration-wavy text-blue-500 dark:text-cyan-300"
                    href="https://unnamed.group"
                  >
                    non-profit
                  </a>{" "}
                  since 2023;
                </li>
                <li>
                  Programming polyglot (JavaScript, Python, C#, and more);
                </li>
                <li>
                  Running Linux (Arch), Windows, and macOS on a daily basis;
                </li>
                <li>Been living in the Unreal Engine for ~4 years;</li>
                <li>
                  Started{" "}
                  <a
                    className="underline decoration-wavy text-green-700 dark:text-green-400"
                    href="/mentoring"
                  >
                    mentoring
                  </a>{" "}
                  the next generation of developers in 2021;
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-bold">Informally...</h3>
              <p>
                I'm an{" "}
                <a
                  className="underline decoration-wavy text-purple-700 dark:text-purple-400"
                  href="/steam"
                >
                  avid gamer
                </a>{" "}
                and a hobbyist musician in my spare time. On the weekends I can
                usually be found DM'ing games such as Dungeons & Dragons and
                Cyberpunk RED with my friends. I'm nearly always listening to
                music and programming something, probably working on my latest
                game or open-source project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
