import { useForm } from "react-hook-form";
import { Flex, Box, useToast, FormControl, Button, Icon } from "@chakra-ui/react";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Alumni/Sidebar/sidebar.js";
import Hero from "../../../Components/hero.js";
import InputForm from "../../../Components/EditProfile/inputDetails.js";
import { useNavigate, NavLink } from "react-router-dom";
import { FaSave, FaTimesCircle } from "react-icons/fa/index.js";

async function updateAlumni(){
    return
}

export default function AlumniEditProfile(){
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
                <Hero />
                <Box pt="16vh">
                    <form
                        onSubmit={handleSubmit((values) =>
                            updateAlumni(values, navigate, toast)
                        )}
                    >
                        <FormControl p="2vw" w="100%" mb="5em">
                            <InputForm register={register} />
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
    )
}