import { currentUser } from "@clerk/nextjs/server";

export default async function SecureHome() {
  const user = await currentUser();

  if (!user)
    return (
      <>
        <p>Not signed in. Redirecting...</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = '/secure/sign-in';`,
          }}
        />
      </>
    );

  console.log(user);

  return (
    <>
      Hello,{" "}
      <b>
        {user?.firstName || user?.emailAddresses[0]?.emailAddress || "UNKNOWN"}
      </b>
      ! :3
    </>
  );
}
