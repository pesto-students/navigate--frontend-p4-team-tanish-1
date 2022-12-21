import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase-config.js";
import {
    Text,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Input,
    Link,
    FormErrorMessage
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc/index.js";

const auth = getAuth(app);

const loginUser = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user Signed in");

            // USE TOKEN RETURNED

            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("In error");
            console.log(errorCode);
        });
};

export default function SignInForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <Box w={["100vw", "100vw", "50vw"]} h="100%" align="center">
            <form onSubmit={handleSubmit(loginUser)}>
                <Heading variant="main" color="primary">
                    Welcome Back
                </Heading>
                <Text>Enter your details to login to your account</Text>
                <FormControl pt="5vh" w="80%" isInvalid={errors.name}>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        id="email"
                        placeholder="email"
                        type="email"
                        {...register("email")}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input
                        id="password"
                        placeholder="password"
                        type="password"
                        {...register("password")}
                    />
                    <Text
                        color="secondary"
                        fontWeight={600}
                        fontSize="md"
                        align="right"
                    >
                        <Link>Forgot Password?</Link>
                    </Text>
                </FormControl>
                <Button type="submit" variant="auth" isLoading={isSubmitting}>
                    Log in
                </Button>
                <Button variant="google" leftIcon={<FcGoogle />}>
                    Sign in with google
                </Button>
            </form>
            <Text fontWeight={600} mt="4vh">
                Don't have account?{" "}
                <Link href="signup" color="primary">
                    Sign Up
                </Link>
            </Text>
        </Box>
    );
}
