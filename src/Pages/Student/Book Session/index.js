import { Flex, Box } from "@chakra-ui/layout";
import Navbar from "../../../Components/student_sidebar/Navbar.js";
import Sidebar from "../../../Components/student_sidebar/sidebar.js";
import BookSession from "../../../Components/Student/Book Session/booking.js"
import Hero from "../../../Components/Profile/hero.js";

export default function Booking(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <BookSession />
            </Box>
        </Flex>
    )
}