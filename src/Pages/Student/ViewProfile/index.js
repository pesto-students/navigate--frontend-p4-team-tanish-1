import Navbar from "../../../Components/student_sidebar/Navbar.js"
import Sidebar from "../../../Components/student_sidebar/sidebar.js"
import ViewDetail from "../../../Components/Profile/Student/ViewProfile/viewDetails.js"
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'
import Hero from "../../../Components/Profile/hero.js"
import { NavLink } from "react-router-dom";

export default function ViewProfile(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <Button as={NavLink} to="/edit-profile" float="right" variant="edit"><Icon as={EditIcon} variant="profile"/>Edit</Button>
                <ViewDetail />
            </Box>
        </Flex>
    )
}