import { SignIn } from "@clerk/nextjs";

import "./page.css";

export default function Page() {
  return <SignIn path="/secure/sign-in" />;
}
