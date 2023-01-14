import { useForm } from "react-hook-form";
import { Flex, Box, useToast, FormControl, Button, Icon } from "@chakra-ui/react";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Alumni/Sidebar/sidebar.js";
import Hero from "../../../Components/hero.js";
import InputForm from "../../../Components/EditProfile/inputDetails.js";
import { useNavigate, NavLink } from "react-router-dom";
import { FaSave, FaTimesCircle } from "react-icons/fa/index.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAlumniData } from "../../../redux/userSlice.js";
import { axiosPostRequest } from "../../../apiHelper.js";
import UPDATE_USER_PROFILE from "../../../redux/userSlice.js";
import AlumniPricingEdit from "../../../Components/EditProfile/pricingAvailability.js";

async function updateAlumni(values, userID, helpers) {
    const {navigate, toast, dispatch} = helpers;
    const availabilityMap = {
        weekdaysFrom:values.weekdaysFrom,
        weekdaysTo:values.weekdaysTo,
        weekendFrom:values.weekendFrom,
        weekendTo:values.weekendTo
    }
    const body = Object.assign(availabilityMap,values)
    console.log(body);
    // values["availability"] = availabilityMap
    const response = await axiosPostRequest(`/alumni/update/${userID}`, body);
    navigate("/alumni/dashboard");
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

export default function AlumniEditProfile(){
    const userData = useSelector((state) => state.user.userData)
    const {_id, name} = userData
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAlumniData(_id));
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
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero fullName={name}/>
                <Box pt="16vh" mb="5em">
                    <form
                        onSubmit={handleSubmit((values) =>
                            updateAlumni(values, _id, {navigate, toast, dispatch})
                        )}
                    >
                        <FormControl p="2vw" w="100%">
                            <InputForm data={userData} register={register} />
                            <AlumniPricingEdit data={userData} register={register} />
                        </FormControl>
                        <Button ml={"2vw"} variant="edit" type="submit" isLoading={isSubmitting}><Icon as={FaSave} variant="profile" />
                            Save
                        </Button>
                        <Button variant="edit" as={NavLink} to="/student/dashboard"><Icon as={FaTimesCircle} variant="profile" />
                            Cancel
                        </Button>
                </form>
            </Box>
            </Box>
        </Flex>
    )
}