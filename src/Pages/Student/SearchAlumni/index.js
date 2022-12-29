import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/student_sidebar/Navbar.js";
import Sidebar from "../../../Components/student_sidebar/sidebar.js";
import AlumniCard from "../../../Components/Profile/Student/SearchAlumni/AlumniCard.js";

export default function SearchAlumni(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <AlumniCard />
            </Box>
        </Flex>
    )
}