import React from "react";
import Nav from "../components/Nav";
import "animate.css";
import ModuleAsssessmentResult from "../components/dashboard_modules/ModuleAsssessmentResult";
import ModuleCVE from "../components/dashboard_modules/ModuleCVE";
import ModuleLearn from "../components/dashboard_modules/ModuleLearn";
import ModuleMyTeam from "../components/dashboard_modules/ModuleMyTeam";

function Dashboard(props) {
  return (
    <div className=" bg-base-100  flex flex-col">
      <Nav isLoggedIn={true} className="top-0" />
      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <ModuleAsssessmentResult />
        <ModuleLearn />
        <ModuleCVE />
        <ModuleMyTeam />
      </div>
    </div>
  );
}

export default Dashboard;
