import React from "react";
import NavbarComponent from "../layouts/Navbar";
import ProjectsComponent from "./Projects";
import ResourceComponent from "./Resouce";

export default function MainDashboardComponent(){

      return <React.Fragment>
            <NavbarComponent/>
            <ProjectsComponent/>
            <ResourceComponent/>
      </React.Fragment>
}