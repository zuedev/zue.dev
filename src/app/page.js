import Navigation from "@/components/Navigation";

import "./page.css";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="flex flex-col space-y-8 p-8 text-xl">
        <div className="p-4 bg-gradient-to-r from-yellow-500 to-pink-500 space-y-4 text-justify text-black">
          <h3 className="text-4xl font-bold">Formally...</h3>
          <p>
            I'm a software engineer and entrepreneur from the UK who thrives on
            building things that help and entertain people.
          </p>
          <p>
            If you want to learn more about me, check out my resume. In short:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Software engineer (full-stack) for more than 11 years;</li>
            <li>Trusted with leadership for 8 of those years;</li>
            <li>Given directorship of a non-profit since 2023;</li>
            <li>
              Programming language polyglot (JavaScript, Python, C#, PHP, Go,
              Rust, Lua, Ruby, C++);
            </li>
            <li>
              Running Linux (Arch) and Windows on a daily basis, wished I used
              macOS more often;
            </li>
            <li>
              Been living in the Unreal Engine for ~4 years, and I'm still
              learning more about it;
            </li>
          </ul>
          <p>Want to learn more? Send me a message!</p>
        </div>

        <div className="p-4 bg-gradient-to-r from-cyan-500 to-green-500 space-y-4 text-justify text-black">
          <h3 className="text-4xl font-bold">Informally...</h3>
          <p>
            In my spare time, I'm an avid gamer and a hobbyist musician. On the
            weekends I can usually be found DM'ing both Dungeons & Dragons and
            Cyberpunk RED with my friends.
          </p>
        </div>

        <div className="p-4 bg-black space-y-4 text-justify text-white">
          <h3 className="text-4xl font-bold">Contact Information</h3>

          <p>For personal enquiries, please write to me at:</p>
          <code className="text-green-400 font-bold">
            {" "}
            zuedev [at] gmail.com{" "}
          </code>

          <p>And for job offers and other business enquiries:</p>
          <code className="text-green-400 font-bold"> work [at] zue.dev </code>
        </div>
      </main>
    </>
  );
}
