import React from "react";
import Bp from "../bp";
import aboutImage from '../../../assets/unsplash_TamMbr4okv4.png'

const About = () => {
    const text ="We believe that financial transactions should be as borderless as the modern world we live in. Whether you're a frequent traveler"
    return(
        <Bp ImageSource={aboutImage} text={text}/>
    )
}

export default About