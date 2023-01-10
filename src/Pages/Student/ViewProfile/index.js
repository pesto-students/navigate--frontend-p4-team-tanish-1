import Navbar from "../../../Components/Student/Sidebar/Navbar.js"
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js"
import ViewDetail from "../../../Components/ViewProfile/viewDetails.js"
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'
import Hero from "../../../Components/hero.js"
import { NavLink } from "react-router-dom";
import { axiosGetRequest } from "../../../apiHelper.js";
import { useSelector } from "react-redux";
import { getStudent } from "../../../API.js";
import { useState } from "react";

export default function ViewProfile(){
    let userData = {}
    const {userID, access} = useSelector((state) => state.user) 
    getStudent(userID, access).then((response) => {
        userData = response["data"]
    })
    
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <Button as={NavLink} to="/student/edit-profile" float="right" variant="edit"><Icon as={EditIcon} variant="profile"/>Edit</Button>
                <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
                    <ViewDetail data={userData} />
                </Box>
            </Box>
        </Flex>
    )
}