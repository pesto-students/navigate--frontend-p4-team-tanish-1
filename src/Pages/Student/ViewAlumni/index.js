import Navbar from "../../../Components/student_sidebar/Navbar.js"
import Sidebar from "../../../Components/student_sidebar/sidebar.js"
import ViewAlumniDetail from "../../../Components/Profile/Student/ViewAlumni/ViewAlumniDetails.js"
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import Hero from "../../../Components/Profile/hero.js"
import { NavLink } from "react-router-dom";

export default function ViewAlumniProfile(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <Button as={NavLink} to="/search" float="left" variant="edit"><Icon as={ArrowBackIcon} variant="profile"/>Back</Button>
                <ViewAlumniDetail />
            </Box>
        </Flex>
    )
}