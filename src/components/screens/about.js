import React from "react";
import Bp from "../bp";

const About = () => {
    const text ="We believe that financial transactions should be as borderless as the modern world we live in. Whether you're a frequent traveler"
    const image_url = "https://currency-converter-rgw7.onrender.com/static/images/unsplash_TamMbr4okv4.png"
    return(
        <Bp ImageSource={{uri: image_url}} text={text}/>
    )
}

export default About