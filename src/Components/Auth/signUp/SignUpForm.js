import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase-config.js";
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
    useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { axiosPostRequest } from "../../../apiHelper.js";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../../redux/userSlice.js";

/* Need to Handle and display error messages of firebase and form validations properly
   Store Access token and other details on client side */

async function CreateUser(values, navigate, toast, dispatch) {
    let message = "Something went wrong"
    let status = "error"
    let title = ""
    const { email, password, cpassword, type, name } = values;
    if(password === cpassword){

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            const userID = user.uid;
            const token = userCredential.user.accessToken;
            const body = {
                name: name,
                email: email,
                firebaseID: userID
            }
            await sessionStorage.setItem("accessToken", token);
            const response = await axiosPostRequest(`/${type}/create`, body)
            dispatch(
                USER_LOGIN({
                    userData: response["data"]["data"],
                    firebaseID: userID,
                    token: token,
                })
            );
            message = "SignUp Successfull"
            status = "success"
            navigate(`/${type}/edit-profile`)
        }
        catch(error) {
            status = "error"
            message = "Something went wrong"
            const errCode = error.code
            if(errCode === 'auth/email-already-in-use'){
                title = "Email already registered"
                message = "User already registered please login to continue"
            }
            else if(errCode === "auth/invalid-email"){
                title = "Invalid email"
                message = "Please enter valid email"
            }
            else if(errCode === "auth/weak-password"){
                title = "Weak password"
                message = "Create strong password with atleast 8 characters"
            }
        }
    }
    else{
        message = "password does not match"
        status = "error"
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
            }
        )
    )
};

export default function SignUpForm() {
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    return (
        <Box w={["100vw", "100vw", "50vw"]} h="100%" align="center">
            <form onSubmit={handleSubmit((data) => CreateUser(data, navigate, toast, dispatch))}>
                <Heading variant="main" color="primary">
                    Create your account
                </Heading>
                <Text>Enter your details to create your account</Text>
                <FormControl pt="5vh" w="80%">
                    <FormLabel>Name</FormLabel>
                    <Input
                        id="name"
                        placeholder="Name"
                        type="text" required
                        {...register("name")}
                    />
                    <FormLabel>Email</FormLabel>
                    <Input
                        id="email"
                        placeholder="Email"
                        type="email" required
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
                                type="password" required
                                {...register("password")}
                            />
                        </Box>
                        <Box w={["100%", "100%", "47%"]}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                id="cpass"
                                placeholder="Confirm password"
                                type="password" required
                                {...register("cpassword")}
                            />
                        </Box>
                    </Flex>
                    <Flex mt="2vh" align={"center"}>
                        <FormLabel>Register as</FormLabel>
                        <RadioGroup id="role" defaultValue="student" name="type">
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
                </FormControl>
                <Button type="submit" variant="auth" isLoading={isSubmitting}>Sign up</Button>
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
