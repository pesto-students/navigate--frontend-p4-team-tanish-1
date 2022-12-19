import SignUpForm from "./SignUpForm.js";
import Navbar from "../Navbar.js";
import {Box, Flex, Image} from "@chakra-ui/react";
import signupImg from "../../Assets/signup-bg.jpg"

export default function SignUpPage(){
    return (
        <Box h="100%">
            <Navbar />
            <Flex h="100%">
                <SignUpForm />
                <Box w="50vw" bg="dark">
                    <Image src={signupImg} objectFit='cover'/>
                </Box>
            </Flex>
        </Box>
    )
}

