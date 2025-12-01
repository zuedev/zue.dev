import "./globals.css";
import { Space_Mono } from "next/font/google";

const mainFont = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://96.zue.dev"),
  title: "96: Where creatives thrive.",
  description:
    "Experience a fresh, open-source revolution in digital empowerment. We fuse influencer marketing with post-modern innovation into a full-service online talent management platform—designed so you can shine while we handle every digital detail.",
  icons: {
    icon: "/96_logo.png",
  },
};

export default ({ children }) => {
  return (
    <html
      lang="en"
      className={`${mainFont.className} bg-linear-to-br from-green-500 to-emerald-500 text-black min-h-screen`}
    >
      <body>{children}</body>
    </html>
  );
};
