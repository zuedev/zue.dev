const links = [
  {
    href: "https://about.zue.dev",
    text: "About Me",
  },
  {
    href: "https://t1.zue.dev",
    text: "T1: Zero-Markup Development & Hosting",
  },
  {
    href: "https://96.zue.dev",
    text: "96: Transparent Talent Management",
  },
];

export default () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-black text-white font-mono text-lg">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <p>
          I'm working on updating this website to be a hub for my projects and
          services.
        </p>
        <p>In the meantime, here's some links:</p>
        <ul className="list-disc pl-5">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-cyan-500 hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
