import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../../firebase-config.js";
import {
    Text,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Input,
    Link,
    Flex, Radio, RadioGroup, Stack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { axiosPostRequest } from "../../../apiHelper.js";
import { USER_LOGIN, DUMMY_CREDENTIAL } from "../../../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

async function loginUser (values, navigate, toast, dispatch) {
    const { email, password, type } = values;
    let title, message, status;
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        const userID = user.uid;
        const token = userCredential.user.accessToken;
        await sessionStorage.setItem("accessToken", token);
        const response = await axiosPostRequest(`/${type}/find/`, {});
        dispatch(
            USER_LOGIN({
                userData: response["data"]["data"],
                firebaseID: userID,
                token: token,
            })
        );
        status = "success";
        message = "Login successful";
        navigate(`/${type}/dashboard`)
    }
    catch (error) {
        const errorCode = error.code;
        status = "error"
        title = "Authentication Failed"
        message = "Something went wrong"
        if(error.status === 404){
            title = "No user found"
            message = "Try to signup or choose correct role"
        }
        else if(errorCode === "auth/wrong-password"){
            message = "Incorrect password"
        }
        else if(errorCode === "auth/user-not-found"){
            title = "User does not exist"
            message = "Create your account to continue"
        }
        else if(errorCode === "ERR_BAD_REQUEST"){
            title = "Unauthorized access"
            message = "Try to login again"
        }
    }
    return (
        toast({
            title : title,
            description: message,
            variant: "top-accent",
            status: status,
            duration: 5000,
            position: "top",
            isClosable: true,
        })
    )
};

async function ResetPassword(email, toast){
    let status, message, title;
    if(email === undefined){
        status = "error"
        message = "Enter email address"
        status = "warning"
    }
    else{
        try{
            await sendPasswordResetEmail(auth, email)
            title = "Reset password email sent"
            status = "success"
            message = "Check your mail to find instructions to reset password"
        }
        catch(error){
            if(error.code === "auth/invalid-email"){
                status = "error"
                message = "Please enter valid email"
                title = "Invalid Email"
            }
            else{
                status = "error"
                message = "Please try again"
                title = "Something went wrong"
            }
        }
    }
    return (
        toast({
            title : title,
            description: message,
            variant: "top-accent",
            status: status,
            duration: 5000,
            position: "top",
            isClosable: true,
        })
    )
}

export default function SignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email, setEmail] = useState();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const closeModal = () => {
        onClose();
        ResetPassword(email, toast);
    }

    return (
        <Box w={["100vw", "100vw", "50vw"]} h="100%" align="center">
            <form onSubmit={handleSubmit((data) => loginUser(data, navigate, toast, dispatch))} method="POST">
                <Heading variant="main" color="primary">
                    Welcome Back
                </Heading>
                <Text>Enter your details to login to your account</Text>
                <FormControl pt="5vh" w="80%" isInvalid={errors.name}>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        id="email"
                        defaultValue={"pestostudent@gmail.com"}
                        placeholder="Email"
                        type="email" required
                        {...register("email")}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input
                        id="password"
                        defaultValue={"12341234"}
                        placeholder="password"
                        type="password" required
                        {...register("password")}
                    />
                    <Flex mt="2vh" align={"center"}>
                        <FormLabel>Login as</FormLabel>
                        <RadioGroup id="role" defaultValue={"student"} name="type">
                            <Stack direction="row">
                                <Radio colorScheme="orange" value="student" {...register("type")}>
                                    Student
                                </Radio>
                                <Radio colorScheme="orange" value="alumni" {...register("type")}>
                                    Alumni
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Flex>
                    <Text
                        color="secondary"
                        fontWeight={600}
                        fontSize="md"
                        align="right"
                    >
                        <Link onClick={onOpen}>Forgot Password?</Link>
                    </Text>
                </FormControl>
                <Button type="submit" variant="auth" isLoading={isSubmitting}>
                    Log in
                </Button>
            </form>
            <Text fontWeight={600} mt="4vh">
                Don't have account?{" "}
                <Link href="/signup" color="primary">
                    Sign Up
                </Link>
            </Text>
            
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Reset Password</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Enter your email
                    <Input placeholder="Email" type="email" required onChange={e => setEmail(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" onClick={closeModal}>
                        Reset Password
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </Box>
    );
}
