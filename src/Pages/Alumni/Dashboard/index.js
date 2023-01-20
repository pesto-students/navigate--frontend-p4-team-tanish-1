import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Alumni/Sidebar/sidebar.js";
import MyCard from "../../../Components/Dashboard/profile-card.js";
import UpcomingSession from "../../../Components/Dashboard/upcoming-session.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PreviousSession from "../../../Components/alumniTable/previousSession.js";
import Session from "../../../Components/alumniTable/recentSession.js";
import { axiosPostRequest } from "../../../apiHelper.js";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const navigate = useNavigate()
    const {name, headline, interest, _id} = useSelector((state) => {
        return state.user.userData
    });
    const [upcomingData, setUpcomingData] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            const body = {
                alumniID: _id
            }
            try{
                const response = await axiosPostRequest('/booking/upcoming/alumni', body);
                setUpcomingData(response['data']['data']);
                console.log(response);
            }
            catch(exception){
                navigate('/signout')
            }
        }
        fetchData();
    }, [])

    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Box m="2vw" align="center">
                    <Flex direction="row" justify="space-between" mb="7vh">
                        <MyCard name={name} headline={headline} />
                        <UpcomingSession data={upcomingData} />
                    </Flex>
                    <Session />
                    <PreviousSession/>
                </Box>
            </Box>
        </Flex>
    )
}