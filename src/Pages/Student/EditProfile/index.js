import {
    Flex,
    Box,
    useToast,
    FormControl,
    Button,
    Icon,
} from "@chakra-ui/react";
import { FaSave, FaTimesCircle } from "react-icons/fa/index.js";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import Hero from "../../../Components/hero.js";
import InputForm from "../../../Components/EditProfile/inputDetails.js";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosPostRequest } from "../../../apiHelper.js";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import UPDATE_USER_PROFILE from "../../../redux/userSlice.js";
import { fetchUserData } from "../../../redux/userSlice.js";

async function updateStudent(values, userID, helpers) {
    const {navigate, toast, dispatch} = helpers;
    const response = await axiosPostRequest(`/student/update/${userID}`, values);
    navigate("/student/dashboard");
    dispatch(UPDATE_USER_PROFILE({
        userData: values
    }))
    return toast({
        title: "Your profile updated successfully",
        status: "success",
        variant: "top-accent",
        duration: 5000,
        isClosable: true,
    });
}

export default function Profile() {
    const userData = useSelector((state) => state.user.userData)
    const {_id, name} = userData
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData(_id));
    }, [_id])
    
    const navigate = useNavigate();
    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar />
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero fullName={name}/>
                <Box pt="16vh">
                    <form
                        onSubmit={handleSubmit((values) =>
                            updateStudent(values, _id, {navigate, toast, dispatch})
                        )}
                    >
                        <FormControl p="2vw" w="100%" mb="5em">
                            <InputForm data={userData} register={register} />
                            <Button
                                variant="edit"
                                type="submit"
                                isLoading={isSubmitting}
                            >
                                <Icon as={FaSave} variant="profile" />
                                Save
                            </Button>
                            <Button variant="edit" as={NavLink} to="/student/dashboard">
                                <Icon as={FaTimesCircle} variant="profile" />
                                Cancel
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}
