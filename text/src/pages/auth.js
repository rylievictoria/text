import React from "react";
import AuthSection from "./../components/AuthSection";
import { useRouter } from "./../util/router.js";

function AuthPage(props) {
  const router = useRouter();

  return (
    <AuthSection
      color="white"
      size="large"
      backgroundImage=""
      backgroundImageOpacity={1}
      type={router.query.type}
      providers={["google", "facebook"]}
      afterAuthPath={router.query.next || "/dashboard/:section"}
    />
  );
}

export default AuthPage;
