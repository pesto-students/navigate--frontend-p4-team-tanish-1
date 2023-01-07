import Navbar from "../../../Components/Student/Sidebar/Navbar.js"
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js"
import ViewAlumniDetail from "../../../Components/ViewProfile/viewDetails.js"
import AlumniPricingAvailability from "../../../Components/ViewProfile/pricingAvailability.js";
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import Hero from "../../../Components/hero.js"
import { NavLink } from "react-router-dom";

export default function ViewAlumniProfile(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <Button as={NavLink} to="/student/search" float="left" variant="edit"><Icon as={ArrowBackIcon} variant="profile"/>Back</Button>
                <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>    
                    <ViewAlumniDetail />
                    <AlumniPricingAvailability />            
                    <Button as={NavLink} to="/student/booking" mt="2vh" fontWeight="normal">Book Session</Button>
                </Box>
            </Box>
        </Flex>
    )
}