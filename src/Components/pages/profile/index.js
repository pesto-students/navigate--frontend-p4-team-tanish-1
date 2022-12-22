import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../Navbar.js";
import Sidebar from "../sidebar.js";
import Hero from "./hero.js";
import InputForm from "./inputDetails.js";

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