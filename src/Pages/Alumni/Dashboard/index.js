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
import { useToast } from "@chakra-ui/react";

export default function Dashboard(){
    const navigate = useNavigate();
    const toast = useToast();
    const {name, headline, image, _id} = useSelector((state) => {
        return state.user.userData
    });
    const [upcomingData, setUpcomingData] = useState();
    const [todaySession, setTodaySession] = useState([]);
    const [pastSession, setPastSession] = useState([]);

    const [asc, setAsc] = useState(false)
    let sortRecord = () => {
        pastSession.sort((a, b) => asc ? (a.at - b.at) : (b.at - a.at));
        setPastSession(pastSession)
        console.log(pastSession)
        setAsc(!asc)
    }

    useEffect(() => {
        const fetchData = async () => {
            const body = {
                alumniID: _id
            }
            try{
                const response = await axiosPostRequest('/booking/upcoming/alumni', body);
                setUpcomingData(response['data']['data']);
                const today = await axiosPostRequest('/alumni/today/', body);
                setTodaySession(today['data']['data']);
                const past = await axiosPostRequest('/alumni/past', {userName: name, alumniID: _id});
                setPastSession(past['data']['data'])
            }
            catch(exception){
                if(exception.status === 401){
                    navigate('/signout')
                    return toast({
                        title : "Session Timeout",
                        description: "Session expired please login again",
                        variant: "top-accent",
                        status: "info",
                        duration: 5000,
                        position: "top",
                        isClosable: true,
                    })
                }
                else{
                    navigate('/error')
                    return toast({
                        title : "Server Error",
                        description: "Oops! Something went wrong",
                        variant: "top-accent",
                        status: "error",
                        duration: 5000,
                        position: "top",
                        isClosable: true,
                    })
                }
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
                        <MyCard name={name} headline={headline} image={image}/>
                        <UpcomingSession data={upcomingData} />
                    </Flex>
                    <Session data={todaySession} />
                    <PreviousSession data={pastSession} sortFunc={sortRecord}/>
                </Box>
            </Box>
        </Flex>
    )
}