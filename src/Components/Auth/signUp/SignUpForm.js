import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../../firebase-config.js";
import {
    Flex,
    Text,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Input,
    Link,
    RadioGroup,
    Radio,
    Stack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc/index.js";
import axios from "axios";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('profile');
/* Need to Handle and display error messages of firebase and form validations properly
   Store Access token and other details on client side */

function signUpWithGoogle(){
    signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        console.log(credential);
        }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

const createUser = async (values) => {
    console.log(values);
    const { email, password, cpassword, type, name } = values;
    console.log(email, password);
    if(password !== cpassword){
        console.log("Password does not match")
        return
    }
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log("user created")
        console.log(user)
        if(type === "student"){
            const data = await axios.post("http://localhost:4000/student/create",{
                name: name,
                email: email
            },{
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            console.log(data);
        }
        else if(type === "alumni"){
            const data = await axios.post("http://localhost:4000/alumni/create",{
                name: name,
                email: email
            },{
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            console.log(data);
        }
    }
    catch(error) {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("In error")
        console.log(errorCode)
    }
};

export default function SignUpForm() {
    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    return (
        <Box w={["100vw", "100vw", "50vw"]} h="100%" align="center">
            <form onSubmit={handleSubmit(createUser)}>
                <Heading variant="main" color="primary">
                    Create your account
                </Heading>
                <Text>Enter your details to create your account</Text>
                <FormControl pt="5vh" w="80%">
                    <FormLabel>Name</FormLabel>
                    <Input
                        id="name"
                        placeholder="Name"
                        type="text"
                        {...register("name")}
                    />
                    <FormLabel>Email</FormLabel>
                    <Input
                        id="email"
                        placeholder="Email"
                        type="email"
                        {...register("email")}
                    />
                    <Flex
                        justify="space-between"
                        direction={["column", "column", "row"]}
                    >
                        <Box w={["100%", "100%", "47%"]}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                id="pass"
                                placeholder="Password"
                                type="password"
                                {...register("password")}
                            />
                        </Box>
                        <Box w={["100%", "100%", "47%"]}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                id="cpass"
                                placeholder="Confirm password"
                                type="password"
                                {...register("cpassword")}
                            />
                        </Box>
                    </Flex>
                    <Flex mt="2vh" align={"center"}>
                        <FormLabel>Register as</FormLabel>
                        <RadioGroup name="type" {...register("type")}>
                            <Stack direction="row">
                                <Radio colorScheme="orange" value="student">
                                    Student
                                </Radio>
                                <Radio colorScheme="orange" value="alumni">
                                    Alumni
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Flex>
                </FormControl>
                <Button type="submit" variant="auth" isLoading={isSubmitting}>Sign up</Button>
                <Button variant="google" leftIcon={<FcGoogle />} onClick={signUpWithGoogle}>
                    Sign up with google
                </Button>
                <Text fontWeight={600} mt="4vh">
                    Already have account?{" "}
                    <Link href="signin" color="primary">
                        Sign In
                    </Link>
                </Text>
            </form>
        </Box>
    );
}
