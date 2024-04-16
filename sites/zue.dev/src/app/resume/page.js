import { Inter } from "next/font/google";

import "./page.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// https://shields.io/badges/static-badge
const skillsBadges = {
  nodejs: {
    badgeContent: "Node.js",
    style: "flat-square",
    logo: "nodedotjs",
    logoColor: "white",
    color: "026e00",
    link: "https://nodejs.org",
  },
  react: {
    badgeContent: "React",
    style: "flat-square",
    logo: "react",
    logoColor: "white",
    color: "61dafb",
    link: "https://reactjs.org",
  },
  docker: {
    badgeContent: "Docker",
    style: "flat-square",
    logo: "docker",
    logoColor: "white",
    color: "2496ed",
    link: "https://docker.com",
  },
  nextjs: {
    badgeContent: "Next.js",
    style: "flat-square",
    logo: "nextdotjs",
    logoColor: "white",
    color: "000000",
    link: "https://nextjs.org",
  },
  tailwindcss: {
    badgeContent: "Tailwind CSS",
    style: "flat-square",
    logo: "tailwindcss",
    logoColor: "white",
    color: "38b2ac",
    link: "https://tailwindcss.com",
  },
  mongodb: {
    badgeContent: "MongoDB",
    style: "flat-square",
    logo: "mongodb",
    logoColor: "white",
    color: "47a248",
    link: "https://mongodb.com",
  },
  cloudflare: {
    badgeContent: "Cloudflare",
    style: "flat-square",
    logo: "cloudflare",
    logoColor: "white",
    color: "f38020",
    link: "https://cloudflare.com",
  },
  vercel: {
    badgeContent: "Vercel",
    style: "flat-square",
    logo: "vercel",
    logoColor: "white",
    color: "000000",
    link: "https://vercel.com",
  },
  unity: {
    badgeContent: "Unity",
    style: "flat-square",
    logo: "unity",
    logoColor: "white",
    color: "000000",
    link: "https://unity.com",
  },
  csharp: {
    badgeContent: "C#",
    style: "flat-square",
    logo: "csharp",
    logoColor: "white",
    color: "239120",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  golang: {
    badgeContent: "Go",
    style: "flat-square",
    logo: "go",
    logoColor: "white",
    color: "00add8",
    link: "https://golang.org",
  },
  aws: {
    badgeContent: "AWS",
    style: "flat-square",
    logo: "amazonaws",
    logoColor: "white",
    color: "232f3e",
    link: "https://aws.amazon.com",
  },
  dynamodb: {
    badgeContent: "DynamoDB",
    style: "flat-square",
    logo: "amazonaws",
    logoColor: "white",
    color: "4053d6",
    link: "https://aws.amazon.com/dynamodb",
  },
  php: {
    badgeContent: "PHP",
    style: "flat-square",
    logo: "php",
    logoColor: "white",
    color: "777bb4",
    link: "https://php.net",
  },
  symfony: {
    badgeContent: "Symfony",
    style: "flat-square",
    logo: "symfony",
    logoColor: "white",
    color: "000000",
    link: "https://symfony.com",
  },
  mysql: {
    badgeContent: "MySQL",
    style: "flat-square",
    logo: "mysql",
    logoColor: "white",
    color: "4479a1",
    link: "https://mysql.com",
  },
  gcp: {
    badgeContent: "GCP",
    style: "flat-square",
    logo: "googlecloud",
    logoColor: "white",
    color: "4285f4",
    link: "https://cloud.google.com",
  },
  kubernetes: {
    badgeContent: "Kubernetes",
    style: "flat-square",
    logo: "kubernetes",
    logoColor: "white",
    color: "326ce5",
    link: "https://kubernetes.io",
  },
  wordpress: {
    badgeContent: "WordPress",
    style: "flat-square",
    logo: "wordpress",
    logoColor: "white",
    color: "21759b",
    link: "https://wordpress.org",
  },
  apache: {
    badgeContent: "Apache",
    style: "flat-square",
    logo: "apache",
    logoColor: "white",
    color: "d22128",
    link: "https://httpd.apache.org",
  },
  nginx: {
    badgeContent: "NGINX",
    style: "flat-square",
    logo: "nginx",
    logoColor: "white",
    color: "269539",
    link: "https://nginx.com",
  },
  digitalocean: {
    badgeContent: "DigitalOcean",
    style: "flat-square",
    logo: "digitalocean",
    logoColor: "white",
    color: "0080ff",
    link: "https://digitalocean.com",
  },
  html: {
    badgeContent: "HTML5",
    style: "flat-square",
    logo: "html5",
    logoColor: "white",
    color: "e34f26",
    link: "https://html.spec.whatwg.org",
  },
  css: {
    badgeContent: "CSS3",
    style: "flat-square",
    logo: "css3",
    logoColor: "white",
    color: "1572b6",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  javascript: {
    badgeContent: "JavaScript",
    style: "flat-square",
    logo: "javascript",
    logoColor: "white",
    color: "f7df1e",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  linux: {
    badgeContent: "Linux",
    style: "flat-square",
    logo: "linux",
    logoColor: "white",
    color: "fcc624",
    link: "https://kernel.org",
  },
};

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
  career: [
    {
      position: "Director of Engineering",
      company: "Unnamed Group",
      url: "https://unnamed.group",
      brief: "Non-Profit Community Builders",
      start: new Date("2022-12-01"),
      end: null,
      type: "Full-Time",
      location: "Harwich, United Kingdom",
      skills: [
        skillsBadges.nodejs,
        skillsBadges.react,
        skillsBadges.docker,
        skillsBadges.nextjs,
        skillsBadges.tailwindcss,
        skillsBadges.mongodb,
        // skillsBadges.cloudflare,
        // skillsBadges.vercel,
      ],
      expound: `I'm responsible for the technical direction of the community, including the website, Discord server, and other community platforms. I also manage a team of developers, designers, and moderators.`,
      achievements: [
        "Built a community of over 1000 members.",
        "Launched a successful Discord server.",
        "Raised over $1000 for charity.",
        "Monetized the community through Patreon.",
      ],
    },
    {
      position: "Solutions Architect",
      company: "November Games",
      url: "https://novembergames.com",
      brief: "Game Studio (MMO + SDKs)",
      start: new Date("2022-02-01"),
      end: new Date("2022-12-01"),
      type: "Contract",
      location: "New Zealand (Remote)",
      skills: [
        skillsBadges.nodejs,
        skillsBadges.unity,
        skillsBadges.csharp,
        skillsBadges.golang,
        skillsBadges.aws,
        skillsBadges.dynamodb,
      ],
      expound: `I was responsible for designing and implementing the backend architecture for a new MMO game. I also developed SDKs for Unity and Unreal Engine to allow other developers to integrate with our platform.`,
      achievements: [
        "Designed and deployed a globally-distributed game server and API.",
        "Implemented a ticket-based party system with sub-second matchmaking.",
        "Acted as domain expert during meetings with AWS, Twitch, and NVIDIA.",
        "Enabled the delivery of a complex project with a tight deadline.",
      ],
    },
    {
      position: "Technical Lead",
      company: "CORE Data Systems",
      url: "https://www.coredatasystems.co.uk",
      brief: "Educational Games Platform",
      start: new Date("2018-03-01"),
      end: new Date("2022-02-01"),
      type: "Full-Time",
      location: "Colchester, United Kingdom",
      skills: [
        skillsBadges.php,
        skillsBadges.symfony,
        skillsBadges.nodejs,
        skillsBadges.react,
        skillsBadges.mysql,
        skillsBadges.gcp,
        skillsBadges.kubernetes,
      ],
      expound: `I was responsible for the technical direction of the company, including the development of the "CoreSciences" platform. I managed a team of developers, designers, and QA testers.`,
      achievements: [
        "Built a platform with over 100,000 users.",
        "Launched a successful educational games platform.",
        "Monetized the platform through subscriptions.",
        "Managed a team of 10+ developers.",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Aspen Woolf",
      url: "https://aspenwoolf.co.uk",
      brief: "Real Estate Investment Firm",
      start: new Date("2017-04-01"),
      end: new Date("2018-03-01"),
      type: "Freelance",
      location: "Manchester, United Kingdom",
      skills: [
        skillsBadges.php,
        skillsBadges.wordpress,
        skillsBadges.apache,
        skillsBadges.nginx,
        skillsBadges.mysql,
        skillsBadges.digitalocean,
      ],
      expound: `Working through a white-label agency called BayCat, I was responsible for developing and maintaining the company's high-traffic WordPress website. I also developed custom plugins and themes.`,
      achievements: [
        "Developed and maintained a custom WordPress theme.",
        "Implemented a custom property search engine.",
        "Optimized the website for SEO and performance.",
        "Managed a team of 2 developers and 1 designer.",
      ],
    },
    {
      position: "Backend Engineer",
      company: "World Registration Systems",
      url: "https://find-and-update.company-information.service.gov.uk/company/06370780",
      brief: "Event Registration Platform",
      start: new Date("2016-11-01"),
      end: new Date("2017-04-01"),
      type: "Full-Time",
      location: "London, United Kingdom",
      skills: [
        skillsBadges.html,
        skillsBadges.css,
        skillsBadges.javascript,
        skillsBadges.php,
        skillsBadges.apache,
        skillsBadges.linux,
      ],
      expound: `I was responsible for developing and maintaining the company's event registration platform. I also developed custom APIs and integrations with third-party services such as WorldPay.`,
      achievements: [
        "Developed a custom event registration platform.",
        "Integrated with WorldPay for payments.",
        "Optimized the platform for SEO and performance.",
        "Managed a team of 2 developers.",
      ],
    },
  ],
  projects: [
    {
      name: "World Anvil",
      brief: "Worldbuilding Platform",
      url: "https://worldanvil.com",
      start: new Date("2017-12-01"),
      end: new Date("2023-02-01"),
      type: "Professional",
      description:
        "World Anvil is a worldbuilding platform that enables writers, gamers, and creators to build and share their fictional worlds.",
      contribution:
        "I was responsible for the high-availability and scalability of the platform, including the development of DevOps pipelines and monitoring systems alongside general networking and security.",
    },
  ],
};

export default function Resume() {
  return (
    <main
      className={`bg-white min-h-screen p-4 space-y-4 ${inter.className} max-w-screen-sm print:max-w-full mx-auto`}
    >
      <div className="raveBackground p-4 text-center text-2xl font-bold print:hidden">
        ⚠️
        <span className="raveBackgroundText px-2">
          This resume is currently a work in progress!
        </span>
        ⚠️
      </div>
      <header className="flex flex-row h-24">
        <div className="flex flex-row space-x-4 align-middle flex-grow">
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
          <h1 className="bg-zd-purple text-white px-2 py-1">
            <span className="panText">{resumeData.name}</span>
          </h1>
          <h2 className="bg-black text-white px-2 py-1">{resumeData.title}</h2>
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
      <section className="space-y-4">
        <h3 className="text-4xl font-bold">About</h3>
        <p className="text-lg text-justify">{resumeData.about}</p>
      </section>
      <section className="space-y-4">
        <h3 className="text-4xl font-bold">Career</h3>
        <ul>
          {resumeData.career.map((job) => (
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
                <p className="flex flex-row space-x-2">
                  {job.skills.map((skill) => (
                    <a key={skill.badgeContent} href={skill.link}>
                      <img
                        src={`https://img.shields.io/badge/${encodeURIComponent(
                          skill.badgeContent
                        )}-${skill.color}?style=${skill.style}&logo=${
                          skill.logo
                        }&logoColor=${skill.logoColor}`}
                        alt={skill.badgeContent}
                      />
                    </a>
                  ))}
                </p>
              </div>

              <p className="text-justify">{job.expound}</p>

              <div>
                <span className="text-xl font-bold">Achievements</span>
                <ul className="ml-8 list-disc">
                  {job.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-4">
        <h3 className="text-4xl font-bold">Projects</h3>
        <ul>
          {resumeData.projects.map((project) => (
            <li
              key={project.name}
              className="space-y-4 border-black border-l-4 px-4 py-4 odd:bg-gray-100"
            >
              <div className="flex flex-row space-x-4 place-content-between">
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold">
                    <a
                      href={project.url}
                      className="text-lg font-bold underline"
                    >
                      {project.name}
                    </a>
                  </h4>
                  <p className="text-lg text-gray-500">{project.brief}</p>
                </div>
                <div className="flex flex-col text-right">
                  <span>
                    {project.start.toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                    })}
                    {" - "}
                    {project.end.toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                  <span>{project.type}</span>
                </div>
              </div>

              <p className="text-justify">{project.description}</p>

              <p className="text-justify">{project.contribution}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
