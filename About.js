import React from "react";
import Common from "./Common";
import aboutimg from "../images/pol.jfif";

const About = () => {
    return(
        <>
       <Common 
       name='Welcom to About page'
       imgsrc={aboutimg} 
       visit='/contact'
       btname="Contact Now"/>
        </>
    )
}
export default About;