import Navbar from "../../../Components/Student/Sidebar/Navbar.js"
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js"
import ViewDetail from "../../../Components/ViewProfile/viewDetails.js"
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'
import Hero from "../../../Components/hero.js"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { fetchUserData } from "../../../redux/userSlice.js";

export default function ViewProfile(){
    const userData = useSelector((state) => {
        return state.user.userData
    });
    const {_id, name} = userData
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData(_id));
    }, [_id])
    
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero fullName={userData.name}/>
                <Button as={NavLink} to="/student/edit-profile" float="right" variant="edit"><Icon as={EditIcon} variant="profile"/>Edit</Button>
                <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
                    <ViewDetail data={userData} />
                </Box>
            </Box>
        </Flex>
    )
}