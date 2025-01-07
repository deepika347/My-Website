import React from "react";
import Common from "./Common";
import homeimg from "../images/lol.jfif"
const Home = () => {
    return(
        <>
       <Common 
       name='Grow your business with' 
       imgsrc = {homeimg}
       visit='/service' 
       btname="get started"/>
        </>
    );
}
export default Home;