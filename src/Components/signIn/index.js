import SignInForm from "./SignInForm.js";
import Navbar from "../Navbar.js";
import {Box, Flex, Image} from "@chakra-ui/react";
import signinImg from "../../Assets/signin-bg.jpg"

export default function SignInPage(){
    return (
        <Box h="100%">
            <Navbar />
            <Flex h="100%">
                <SignInForm />
                <Box w="50vw" display={["none", "none", "flex"]}>
                    <Image src={signinImg} objectFit='cover'/>
                </Box>
            </Flex>
        </Box>
    )
}

