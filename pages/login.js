import React from "react";
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/router";

const loginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <button onClick={() => signIn("github")}>Sign In with github</button>
    </div>
  );
};

export default loginPage;
