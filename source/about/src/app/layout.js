// get those fonts!
import "@fontsource/monaspace-neon";
import "@fontsource/monaspace-krypton";
import "@fontsource/monaspace-radon";
import "@fontsource/monaspace-argon";
import "@fontsource/monaspace-xenon";

// always import global styles last
import "./globals.css";

import Script from "next/script";

export const metadata = {
  title: "zuedev's space",
  description: "Hello, World! I'm zuedev.",
  icons: {
    icon: "/avatar.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default ({ children }) => {
  return (
    <html lang="en" className="bg-black text-white">
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
        <Script src="/tabAnimation.js" />
      </body>
    </html>
  );
};
