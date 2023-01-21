import SignUpForm from "../../../Components/Auth/signUp/SignUpForm.js";
import Navbar from "../../../Components/Navbar.js";
import {Box, Flex, Image} from "@chakra-ui/react";
import signupImg from "../../../Assets/signup-bg.jpg"

export default function SignUpPage(){
    return (
        <Box h="100vh" overflow={"hidden"}>
            <Navbar />
            <Flex h="100%">
                <SignUpForm />
                <Box w="50vw" display={["none", "none", "flex"]}>
                    <Image src={signupImg} objectFit='cover'/>
                </Box>
            </Flex>
        </Box>
    )
}

