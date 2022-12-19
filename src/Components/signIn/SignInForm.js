import { Text, Box, Heading, FormControl, FormLabel, Button, Input, Link } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc/index.js";

export default function SignInForm(){
    return(
        <Box w={["100vw", "100vw", "50vw"]} h="100%" align="center">
            <Heading variant="main" color="primary">Welcome Back</Heading>
            <Text>Enter your details to login to your account</Text>
            <FormControl pt="5vh" w="80%">
                <FormLabel>Email address</FormLabel>
                <Input placeholder="Enter your email" type='email' />
                <FormLabel>Password</FormLabel>
                <Input placeholder="Enter your password" type='password' />
                <Text color="secondary" fontWeight={600} fontSize="md" align="right">
                    <Link>Forgot Password?</Link>
                </Text>
                <Button variant="auth">Log in</Button>
                <Button variant="google" leftIcon={<FcGoogle />}>Sign in with google</Button>
                <Text fontWeight={600} mt="4vh">Don't have account? <Link color="primary">Sign Up</Link></Text>
            </FormControl>
        </Box>
    )
}