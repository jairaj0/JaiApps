import React from "react";
import web from "../src/images/img1.svg";
import Common from "./Common";

const About = () =>{
    return(
        <>
        <Common  name='Here You Know About' imgsrc={web} visit='/contact' btname='Contact Now' />
        </>
    );
};

export default About;

