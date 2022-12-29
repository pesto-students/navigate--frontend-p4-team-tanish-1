import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/student_sidebar/Navbar.js";
import Sidebar from "../../../Components/student_sidebar/sidebar.js";
import Hero from "../../../Components/Profile/hero.js";
import InputForm from "../../../Components/Profile/Student/EditProfile/inputDetails.js";

// <Flex direction="column">
//     <Hero/>
// </Flex>
export default function Profile(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <InputForm />
            </Box>
        </Flex>
    )
}