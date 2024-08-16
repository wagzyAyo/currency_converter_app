import React from "react";
import Bp from "../bp";

const Privacy = () => {
    const image_url = "https://currency-converter-rgw7.onrender.com/static/images/unsplash_ah-HeguOe9k.png"
    return(
        <Bp ImageSource={{uri: image_url}} 
        text={"This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information."}
        />
    )
}


export default Privacy