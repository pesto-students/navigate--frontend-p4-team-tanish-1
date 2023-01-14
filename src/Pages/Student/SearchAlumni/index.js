import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import AlumniCard from "../../../Components/Dashboard/alumni-card.js";
import { listAlumni } from "../../../API.js";
import { useEffect, useState } from "react";

export default function SearchAlumni(){
    const [alumniData, setAlumniData] = useState([])
    useEffect(() => {
        async function fetchAlumniList(){
            const response = await listAlumni()
            console.log(response);
            setAlumniData(response['data'])
        } fetchAlumniList();
    }, [])
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                {alumniData.map((alumni) => {
                    return <AlumniCard key={alumni._id} data={alumni}/>
                })}
            </Box>
        </Flex>
    )
}