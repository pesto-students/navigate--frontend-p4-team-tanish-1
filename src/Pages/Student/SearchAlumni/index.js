import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/Student/student_sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/student_sidebar/sidebar.js";
import AlumniCard from "../../../Components/Student/SearchAlumni/AlumniCard.js";

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