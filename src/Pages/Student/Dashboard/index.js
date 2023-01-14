import { Flex, Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import MyCard from "../../../Components/Dashboard/profile-card.js";
import AlumniCard from "../../../Components/Dashboard/alumni-card.js";
import UpcomingSession from "../../../Components/Dashboard/upcoming-session.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { suggestedAlumni } from "../../../API.js";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const {name, headline, interest} = useSelector((state) => {
        return state.user.userData
    });

    const [alumniData, setAlumniData] = useState([])
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
                        <UpcomingSession />
                    </Flex>
                    <Heading fontSize="1.4em" color="secondary" mb="4vh">
                        Suggested Alumni
                    </Heading>
                    <Flex direction={["row"]} wrap="wrap" shrink={0} gap="2vh" justifyContent={["space-evenly"]}>
                        {alumniData.map((alumni) => {
                            return <AlumniCard key={alumni._id} data={alumni}/>
                        })}
                    </Flex>
                    <Button as={NavLink} to="/student/search" mt="4vh" width="15vh">View More</Button>
                </Box>
            </Box>
        </Flex>
    );
}
