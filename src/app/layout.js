import "./globals.css";

import Script from "next/script";

export const metadata = {
  title: "zuedev's space",
  description: "Hello, World! I'm zuedev.",
  icons: {
    icon: "https://about.zue.dev/avatar.png",
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
    <html lang="en">
      <body>{children}</body>
      <Script src="/tabAnimation.js" />
    </html>
  );
};
