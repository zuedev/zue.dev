import Navigation from "@/components/Navigation";

import "./global.css";

export const metadata = {
  title: "zue.dev",
  description: "Putting open-source to work! 🚀",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
