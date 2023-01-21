import Navbar from "../../../Components/Student/Sidebar/Navbar.js"
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js"
import ViewAlumniDetail from "../../../Components/ViewProfile/viewDetails.js"
import AlumniPricingAvailability from "../../../Components/ViewProfile/pricingAvailability.js";
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import Hero from "../../../Components/hero.js"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlumni } from "../../../API.js";

export default function ViewAlumniProfile(){
    const params = useParams();
    const alumniID = params['id']
    const [alumniData, setAlumniData] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await getAlumni(alumniID);
            setAlumniData(response['data'])
        } 
        fetchData();
    }, [])
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero fullName={alumniData.name} photo={alumniData.image}/>
                <Button onClick={() => navigate(-1)} float="left" variant="edit"><Icon as={ArrowBackIcon} variant="profile"/>Back</Button>
                <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}> 
                    <ViewAlumniDetail data={alumniData} />
                    <AlumniPricingAvailability data={alumniData} />
                    <Button as={NavLink} to={`/student/booking/${alumniData._id}`} mt="2vh" fontWeight="normal">Book Session</Button>
                </Box>
            </Box>
        </Flex>
    )
}