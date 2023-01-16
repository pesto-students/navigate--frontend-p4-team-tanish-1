import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Alumni/Sidebar/sidebar.js";
import MyCard from "../../../Components/Dashboard/profile-card.js";
import UpcomingSession from "../../../Components/Dashboard/upcoming-session.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PreviousSession from "../../../Components/alumniTable/previousSession.js";
import Session from "../../../Components/alumniTable/recentSession.js";
import { axiosGetRequest } from "../../../apiHelper.js";

export default function Dashboard(){
    const [upcomingData, setUpcomingData] = useState({});
    const {name, headline} = useSelector((state) => {
        return state.user.userData
    });
    useEffect(() => {
        const fetchData = async () => {
            const response = axiosGetRequest('/student/get');
            setUpcomingData(response['data']);
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
                        {/*<UpcomingSession data={upcomingData} />*/}
                    </Flex>
                    <Session />
                    <PreviousSession/>
                </Box>
            </Box>
        </Flex>
    )
}