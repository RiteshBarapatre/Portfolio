import React from "react";
import Common from "./Common";
import about_img from "./about.png"

const About = ()=>{
    return(
        <>
            <Common head="This is About Page" title="Contact Now" web={about_img} link="/contact"/>
        </>
    )
}

export default About