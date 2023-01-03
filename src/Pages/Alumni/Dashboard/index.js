import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/Student/student_sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/student_sidebar/sidebar.js";
import AlumniMyCard from "../../../Components/Alumni/Dashboard/test.js";

export default function Dashboard(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <AlumniMyCard />
            </Box>
        </Flex>
    )
}