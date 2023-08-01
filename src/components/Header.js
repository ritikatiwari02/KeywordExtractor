

import React from "react";
import logo from "./light-bulb.svg";
import { Img } from "@chakra-ui/react";

const Header =()=>{
    return(
        <div>
            <Img src={logo} alt='logo' width={100} marginBotton='1rem'/>
            <h1 color='white' marginBottom ='1rem'>AI Keyboard Extractor</h1>
            <p fontSize={25} textAllign='center'>
              Paste in your below  amd we'll extract keywords for you
            </p>


        </div>
    )
}
export default Header;
