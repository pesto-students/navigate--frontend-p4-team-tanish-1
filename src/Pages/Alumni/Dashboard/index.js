import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/student_sidebar/Navbar.js";
import Sidebar from "../../../Components/student_sidebar/sidebar.js";
import AlumniMyCard from "../../../Components/Profile/Alumni/Dashboard/test.js";

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