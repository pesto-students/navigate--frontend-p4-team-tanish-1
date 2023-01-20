import { Flex, Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import MyCard from "../../../Components/Dashboard/profile-card.js";
import AlumniCard from "../../../Components/Dashboard/alumni-card.js";
import UpcomingSession from "../../../Components/Dashboard/upcoming-session.js";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { suggestedAlumni } from "../../../API.js";
import { useEffect, useState } from "react";
import { axiosPostRequest } from "../../../apiHelper.js";
import { NoSuggestedAlumni } from "../../../Components/NoData.js";

export function ListAlumni({alumniData}){
    return (
        alumniData.map((alumni) => {
            return <AlumniCard key={alumni._id} data={alumni}/>
        })
    )
}

export default function Dashboard() {
    const navigate = useNavigate()
    const {name, headline, interest, _id} = useSelector((state) => {
        return state.user.userData
    });

    const [upcomingData, setUpcomingData] = useState();
    const [alumniData, setAlumniData] = useState([])
    console.log(alumniData);
    useEffect(() => {
        const fetchData = async () => {
            const body = {
                studentID: _id
            }
            try{
                const response = await axiosPostRequest('/booking/upcoming/student', body);
                setUpcomingData(response['data']['data']);
            }
            catch(exception){
                navigate('/error')
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function suggestedAlumniList(){
            const response = await suggestedAlumni(interest[0])
            console.log(response);
            setAlumniData(response['data'])
        } suggestedAlumniList();
    }, [interest])
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar />
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Box m="2vw" align="center">
                    <Flex direction="row" justify="space-between" mb="7vh">
                        <MyCard name={name} headline={headline}/>
                        <UpcomingSession data={upcomingData}/>
                    </Flex>
                    <Heading fontSize="1.4em" color="secondary" mb="4vh">
                        Suggested Alumni
                    </Heading>
                    {alumniData.length !== 0 ? 
                        <Flex direction={["row"]} wrap="wrap" shrink={0} gap="2vh" justifyContent={["space-evenly"]}>
                            <ListAlumni alumniData={alumniData} />
                        </Flex> : <NoSuggestedAlumni />}
                    {alumniData.length !== 0 ? <Button as={NavLink} to="/student/search" mt="4vh" width="15vh">View More</Button> : <></>}
                </Box>
            </Box>
        </Flex>
    );
}
