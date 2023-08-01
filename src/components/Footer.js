import React from "react";
import {Box,Image,Text,Flex} from '@chakra-ui/react';
import logo from "./openai.png";



const Footer=()=>{
    return(
        <div>
            <Box marginTop={50}>
                <Flex justifyContent ='center' alignItems='center'></Flex>
                <Image src ={logo} marginRight={1}/>
                <Text>
                    Powered by OpenAI
                </Text>

            </Box>


        </div>
    )
}
export default Footer;