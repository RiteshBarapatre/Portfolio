import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import main from "./main_img.png";

const Home = () => {
  return (
    <>
      <Common head="Welcome to My Site" title="Get Started" web={main} link="/services"/>
    </>
  );
};

export default Home;
