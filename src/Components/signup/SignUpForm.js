import { Flex, Text, Box, Heading, FormControl, FormLabel, Button, Input, Link, RadioGroup, Radio, Stack } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc/index.js";

export default function SignUpForm(){
    return(
        <Box w={["100vw", "100vw", "50vw"]} h="100%" align="center">
            <Heading variant="main" color="primary">Create your account</Heading>
            <Text>Enter your details to create your account</Text>
            <FormControl pt="5vh" w="80%">
                <FormLabel mt='1vh'>Name</FormLabel>
                <Input placeholder="Enter your name" type='text' />
                <FormLabel mt='1vh'>Email</FormLabel>
                <Input placeholder="Enter your email" type='email' />
                <Flex justify="space-between" direction={["column", "column", "row"]}>
                    <Box w={["100%","100%","47%"]}>
                        <FormLabel mt='1vh'>Password</FormLabel>
                        <Input placeholder="Enter your password" type='password' />
                    </Box>
                    <Box w={["100%","100%","47%"]}>
                        <FormLabel mt='1vh'>Confirm Password</FormLabel>
                        <Input placeholder="Confirm your password" type='password' />
                    </Box>
                </Flex>
                <Flex mt="2vh">
                    <FormLabel>Register as</FormLabel>
                    <RadioGroup>
                        <Stack direction='row'>
                            <Radio colorScheme="orange" value='student'>Student</Radio>
                            <Radio colorScheme="orange" value='alumni'>Alumni</Radio>
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Button variant="auth">Sign Up</Button>
                <Button variant="google" leftIcon={<FcGoogle />}>Sign up with google</Button>
                <Text fontWeight={600} mt="4vh">Already have account? <Link color="primary">Sign In</Link></Text>
            </FormControl>
        </Box>
    )
}