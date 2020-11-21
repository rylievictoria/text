import React from "react";
import DashboardSection from "./../components/DashboardSection";
import { useRouter } from "./../util/router.js";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  const router = useRouter();

  return (
    <DashboardSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      section={router.query.section}
      key={router.query.section}
    />
  );
}

export default requireAuth(DashboardPage);
