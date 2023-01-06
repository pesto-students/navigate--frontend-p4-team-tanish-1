import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import Hero from "../../../Components/hero.js";
import InputForm from "../../../Components/Student/EditProfile/inputDetails.js";

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