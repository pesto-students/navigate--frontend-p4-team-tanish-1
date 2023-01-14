import Navbar from "../../../Components/Student/Sidebar/Navbar.js"
import Sidebar from "../../../Components/Alumni/Sidebar/sidebar.js"
import ViewDetail from "../../../Components/ViewProfile/viewDetails.js"
import Hero from "../../../Components/hero.js"
import { NavLink } from "react-router-dom";
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAlumniData } from "../../../redux/userSlice.js";
import AlumniPricingAvailability from "../../../Components/ViewProfile/pricingAvailability.js";

export default function AlumniViewProfile(){
    const userData = useSelector((state) => {
        return state.user.userData
    });
    const {_id, name} = userData
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAlumniData(_id));
    }, [_id])
    
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero fullName={name} />
                <Button as={NavLink} to="/alumni/edit-profile" float="right" variant="edit"><Icon as={EditIcon} variant="profile"/>Edit</Button>
                    <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
                        <ViewDetail data={userData}/>                    
                        <AlumniPricingAvailability data={userData} />
                    </Box>
            </Box>
        </Flex>
    )
}