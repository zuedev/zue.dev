const links = [
  { href: "/", text: "Home" },
  // {
  // href: "https://thoughts.zue.dev",
  // text: "Thoughts",
  // classes: "opacity-25 cursor-not-allowed",
  // title: "Coming soon...",
  // },
  { href: "/resume", text: "Resume" },
];

const socials = [
  {
    href: "https://github.com/zuedev",
    icon: "https://cdn.simpleicons.org/github/fff",
    title: "GitHub",
  },
  {
    href: "https://gitlab.com/zuedev",
    icon: "https://cdn.simpleicons.org/gitlab",
    title: "GitLab",
  },
  {
    href: "https://discord.gg/UvgJgkREQa",
    icon: "https://cdn.simpleicons.org/discord",
    title: "Discord",
  },
  {
    href: "https://gumroad.zue.dev",
    icon: "https://cdn.simpleicons.org/gumroad",
    title: "Gumroad",
  },
  {
    href: "https://linkedin.com/in/zuedev",
    icon: "https://cdn.simpleicons.org/linkedin",
    title: "LinkedIn",
  },
];

export default function Navigation() {
  return (
    <nav className="flex flex-row h-16 text-white space-x-4">
      <img src="./avatar.png" className="object-contain" />

      <div className="grow">
        <ul className="flex flex-row h-full items-center space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={link.classes} title={link.title}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex flex-row h-full items-center">
          {socials.map((social) => (
            <li key={social.href} className="px-2">
              <a href={social.href}>
                <img
                  src={`${social.icon}`}
                  className="h-8"
                  title={social.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
