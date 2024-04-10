export default function Home() {
  return (
    <main className="flex flex-col space-y-8 p-8 text-xl">
      <div className="p-4 bg-gradient-to-r from-yellow-500 to-pink-500 space-y-4 text-justify text-black">
        <h3 className="text-4xl font-bold">Formally...</h3>
        <p>
          I'm a software engineer and entrepreneur from the UK who thrives on
          building things that help and entertain people.
        </p>
        <p>
          If you want to learn more about me, check out my portfolio. In short:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>A full-stack developer for more than 4 years;</li>
          <li>A lead developer for another 6 years;</li>
          <li>An engineering head presently, since 2019.</li>
        </ul>
        <p>
          I have my own for-profit business called Termina One, as well as a
          non-profit called Unnamed Group.
        </p>
      </div>

      <div className="p-4 bg-gradient-to-r from-cyan-500 to-green-500 space-y-4 text-justify text-black">
        <h3 className="text-4xl font-bold">Informally...</h3>
        <p>
          In my spare time, I'm an avid gamer and a hobbyist game developer. I
          always have music playing in the background, and I'm a big fan of both
          Dungeons & Dragons and Cyberpunk RED.
        </p>
        <p>
          You can most likely find me on Discord or Steam, so feel free to add
          me and say hi!
        </p>
      </div>

      <div className="p-4 bg-black space-y-4 text-justify">
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
  );
}
