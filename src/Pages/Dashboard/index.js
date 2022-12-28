import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../Components/student_sidebar/Navbar.js";
import Sidebar from "../../Components/student_sidebar/sidebar.js";
import MyCard from "../../Components/Profile/Student/Dashboard/profile-card.js";

export default function Dashboard(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <MyCard />
            </Box>
        </Flex>
    )
}