import Link from "next/link";
import { metadata } from "./layout";
import FadeIn from "@/components/animations/FadeIn";
import talent from "@/data/talent";

export default () => {
  return (
    <>
      <div className="flex flex-col justify-center max-w-2xl mx-auto p-8 space-y-4 min-h-screen">
        <FadeIn props={{ delay: 0.25 }}>
          <h1 className="text-4xl font-bold">{metadata.title}</h1>
        </FadeIn>

        <FadeIn props={{ delay: 0.5 }}>
          <p className="text-lg">{metadata.description}</p>
        </FadeIn>

        <FadeIn props={{ delay: 0.75 }}>
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-row gap-4">
              {[
                {
                  href: "https://x.com/area96digital",
                  icon: "https://cdn.simpleicons.org/x/black",
                  title: "X/Twitter",
                },
                {
                  href: "https://bsky.app/profile/96.zue.dev",
                  icon: "https://cdn.simpleicons.org/bluesky/black",
                  title: "Bluesky",
                },
              ].map((social) => (
                <Link
                  href={social.href}
                  key={social.title}
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src={social.icon}
                    className="h-[2rem] w-[2rem] object-contain"
                    alt={social.title}
                    title={social.title}
                  />
                </Link>
              ))}
            </div>

            <span className="text-xs opacity-50 text-right p-1">
              "96" is made with ❤️ by{" "}
              <a href="https://zue.dev" target="_blank">
                zue.dev
              </a>
            </span>
          </div>
        </FadeIn>
      </div>
    </>
  );
};
