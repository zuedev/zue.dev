import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function SecureLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>{children}</SignedIn>
      </body>
    </html>
  );
}
