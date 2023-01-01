import Navbar from "../../../Components/student_sidebar/Navbar.js"
import Sidebar from "../../../Components/student_sidebar/sidebar.js"
import ViewDetail from "../../../Components/Profile/Student/ViewProfile/viewDetails.js"
import Hero from "../../../Components/Profile/hero.js"
import PricingAvailability from "../../../Components/Profile/Alumni/ViewProfile/pricingAvailability.js"
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
                <Button as={NavLink} to="/edit-profile" float="right" variant="edit"><Icon as={EditIcon} variant="profile"/>Edit</Button>
                <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
                    <ViewDetail />
                    <PricingAvailability />
                </Box>
            </Box>
        </Flex>
    )
}