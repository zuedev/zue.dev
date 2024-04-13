import "./page.css";

const resumeData = {
  name: "Alex Pooley",
  bio: ["Cloud Specialist.", "Gaming Enthusiast.", "Open Source Fanatic."],
  about:
    "I have helped deliver world-class technical projects to millions of users over a decade of experience in the technology industry. I thrive in challenging and high-speed environments and am always committed to providing quality work. My background in engineering highly scalable and redundant systems powers my ability to lead efficient cross-domain development teams, even remotely.",
  title: "Technical Lead",
  avatar: "https://avatars.githubusercontent.com/u/24614929",
  status: "Looking for a new challenge.",
  location: "Harwich, United Kingdom",
  email: "zuedev@gmail.com",
  phone: "+44 7 943 941 456",
  website: "https://zue.dev",
  socials: [
    {
      href: "https://github.com/zuedev",
      icon: "https://cdn.simpleicons.org/github",
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
  ],
  work: [
    {
      position: "Director of Engineering",
      company: "Unnamed Group",
      url: "https://unnamed.group",
      brief: "Non-Profit Community Builders",
      start: new Date("2022-12-01"),
      end: null,
      type: "Full-Time",
      location: "Remote",
      skills: [
        "Node.js",
        "React",
        "Docker",
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Cloudflare",
        "Vercel",
      ],
      achievements: [
        "Built a community of over 1000 members.",
        "Launched a successful Discord server.",
        "Raised over $1000 for charity.",
        "Monetized the community through Patreon.",
      ],
      expound: `I'm responsible for the technical direction of the community, including the website, Discord server, and other community platforms. I also manage a team of developers, designers, and moderators.`,
    },
    {
      position: "Director of Engineering",
      company: "Unnamed Group",
      url: "https://unnamed.group",
      brief: "Non-Profit Community Builders",
      start: new Date("2022-12-01"),
      end: null,
      type: "Full-Time",
      location: "Remote",
      skills: [
        "Node.js",
        "React",
        "Docker",
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Cloudflare",
        "Vercel",
      ],
      achievements: [
        "Built a community of over 1000 members.",
        "Launched a successful Discord server.",
        "Raised over $1000 for charity.",
        "Monetized the community through Patreon.",
      ],
      expound: `I'm responsible for the technical direction of the community, including the website, Discord server, and other community platforms. I also manage a team of developers, designers, and moderators.`,
    },
    {
      position: "Director of Engineering",
      company: "Unnamed Group",
      url: "https://unnamed.group",
      brief: "Non-Profit Community Builders",
      start: new Date("2022-12-01"),
      end: null,
      type: "Full-Time",
      location: "Remote",
      skills: [
        "Node.js",
        "React",
        "Docker",
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Cloudflare",
        "Vercel",
      ],
      achievements: [
        "Built a community of over 1000 members.",
        "Launched a successful Discord server.",
        "Raised over $1000 for charity.",
        "Monetized the community through Patreon.",
      ],
      expound: `I'm responsible for the technical direction of the community, including the website, Discord server, and other community platforms. I also manage a team of developers, designers, and moderators.`,
    },
  ],
};

export default function Resume() {
  return (
    <main className="bg-white min-h-screen p-4 space-y-4">
      <div className="raveBackground p-4 text-center text-2xl font-bold">
        ⚠️{" "}
        <span className="raveBackgroundText">
          This resume is currently a work in progress!
        </span>{" "}
        ⚠️
      </div>
      <header className="flex flex-row">
        <div className="flex flex-row space-x-4 h-24 align-middle flex-grow">
          <img src={resumeData.avatar} alt={resumeData.name} />
          <div className="flex flex-col place-content-evenly">
            {resumeData.bio.map((line, index) => (
              <span key={index} className="text-xl font-bold text-gray-500">
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col place-content-evenly text-gray-500 text-right">
          <span>
            📍{" "}
            <a
              href={
                "https://www.google.co.uk/maps/place/" + resumeData.location
              }
              className="text-blue-500 underline decoration-dotted"
              target="_blank"
            >
              {resumeData.location}
            </a>
          </span>
          <span>
            📧{" "}
            <a
              href={"mailto:" + resumeData.email}
              className="text-blue-500 underline decoration-dotted"
              target="_blank"
            >
              {resumeData.email}
            </a>
          </span>
          <span>
            📱{" "}
            <a
              href={"tel:" + resumeData.phone.replaceAll(" ", "")}
              className="text-blue-500 underline decoration-dotted"
              target="_blank"
            >
              {resumeData.phone}
            </a>
          </span>
          <span>
            🌎{" "}
            <a
              href={resumeData.website}
              className="text-blue-500 underline decoration-dotted"
              target="_blank"
            >
              {resumeData.website}
            </a>
          </span>
        </div>
      </header>
      <section className="space-y-4">
        <div className="flex flex-row text-4xl font-black">
          <h1 className="bg-zd-purple text-white p-2">
            <span className="panText">{resumeData.name}</span>
          </h1>
          <h2 className="bg-black text-white p-2">{resumeData.title}</h2>
        </div>
        <div>
          <ul className="flex flex-row h-full items-center">
            {resumeData.socials.map((social) => (
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
      </section>
      <hr />
      <section className="space-y-4">
        <h3 className="text-4xl font-bold">About</h3>
        <p className="text-lg text-justify">{resumeData.about}</p>
      </section>
      <hr />
      <section className="space-y-4">
        <h3 className="text-4xl font-bold">Career</h3>
        <ul>
          {resumeData.work.map((job) => (
            <li
              key={job.company}
              className="space-y-4 border-black border-l-4 px-4 py-4 odd:bg-gray-100"
            >
              <div className="flex flex-row space-x-4 place-content-between">
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold">{job.position}</h4>
                  <a
                    href={job.url}
                    className="text-lg font-bold text-gray-500 underline"
                  >
                    {job.company}
                  </a>
                  <p className="text-lg text-gray-500">{job.brief}</p>
                </div>
                <div className="flex flex-col text-right">
                  <span>
                    {job.start.toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                    })}
                    {" - "}
                    {job.end
                      ? job.end.toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "long",
                        })
                      : "Present"}
                  </span>
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>
              </div>

              <div>
                <span className="text-xl font-bold">Achievements</span>
                <ul className="ml-8 list-disc">
                  {job.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <p className="text-justify">{job.expound}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
