export default () => {
  const yearsAsEngineer = new Date().getFullYear() - 2012;

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
        <section className="border-4 border-white">
          <h2 className="text-6xl font-bold bg-white text-black p-2">
            Who am I? ✨
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
                  className="underline decoration-wavy text-yellow-300"
                  href="https://zue.dev/resume"
                  target="_blank"
                >
                  resume
                </a>
                . In short:
              </p>
              <ul className="pl-4 list-disc list-inside">
                <li>
                  Software engineer (full-stack) for more than {yearsAsEngineer}{" "}
                  years;
                </li>
                <li>Trusted with leadership for 9 of those years;</li>
                <li>
                  Director of a{" "}
                  <a
                    className="underline decoration-wavy text-cyan-300"
                    href="https://unnamed.group"
                    target="_blank"
                  >
                    non-profit
                  </a>{" "}
                  since 2016;
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
                    className="underline decoration-wavy text-green-400"
                    href="https://zuedev.gumroad.com"
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
                  className="underline decoration-wavy text-purple-400"
                  href="https://zue.dev/steam"
                  target="_blank"
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
        <section className="p-4 space-y-4 border-4 bg-white text-black border-white">
          <h2 className="text-6xl font-bold">What am I up to? 💼</h2>

          <div className="text-justify space-y-4">
            <p>
              I'm always working on something... There's not enough time in the
              day to do everything I want to do! Here's a few things I'm
              currently working on:
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              {[
                {
                  title: "For Money 💵",
                  description: (
                    <>
                      Money makes the world go round, unfortunately... That's
                      why I founded and run both{" "}
                      <a
                        className="underline decoration-wavy text-yellow-300"
                        href="https://t1.zue.dev"
                        target="_blank"
                      >
                        Termina One
                      </a>{" "}
                      and{" "}
                      <a
                        className="underline decoration-wavy text-green-400"
                        href="https://96.zue.dev"
                        target="_blank"
                      >
                        Area96 Digital
                      </a>{" "}
                      to help build capital for my other projects.
                    </>
                  ),
                },
                {
                  title: "For Fun 🎉",
                  description: (
                    <>
                      What don't I do? I have a backlog of games to play, music
                      to make, and projects to work on. Right now, I'm trying to
                      get back into making mods for{" "}
                      <a
                        className="underline decoration-wavy text-red-500"
                        href="https://minecraft.net"
                        target="_blank"
                      >
                        Minecraft
                      </a>
                      .
                    </>
                  ),
                },
                {
                  title: "For Charity ❤️",
                  description: (
                    <>
                      I'm currently working on directing a non-profit project
                      called{" "}
                      <a
                        className="underline decoration-wavy text-pink-400"
                        href="https://unnamed.group"
                        target="_blank"
                      >
                        Unnamed Group
                      </a>{" "}
                      to help support people online who are looking for a safe
                      space to play games and socialise.
                    </>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="p-4 space-y-2 bg-black text-white">
                  <h3 className="text-4xl font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
