import Navbar from "../../../Components/Student/Sidebar/Navbar.js"
import Sidebar from "../../../Components/Alumni/Sidebar/sidebar.js"
import ViewDetail from "../../../Components/ViewProfile/viewDetails.js"
import Hero from "../../../Components/hero.js"
import { NavLink } from "react-router-dom";
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function AlumniViewProfile(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <Button as={NavLink} to="/alumni/edit-profile" float="right" variant="edit"><Icon as={EditIcon} variant="profile"/>Edit</Button>
                    <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
                        <ViewDetail />
                    </Box>
            </Box>
        </Flex>
    )
}