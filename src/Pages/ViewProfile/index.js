// import {Flex, Box} from "@chakra-ui/react"
import Navbar from "../../Components/student_sidebar/Navbar.js"
import Sidebar from "../../Components/student_sidebar/sidebar.js"
// import Hero from "../edit-profile/hero.js"
import ViewDetail from "../../Components/Profile/Student/ViewProfile/viewDetails.js"
import { Box, Flex, Image, Heading, Icon, Button } from "@chakra-ui/react";
import heroBg from "../../Assets/hero-bg-crop.jpg";
import profile from "../../Assets/profile.jpg";
import { EditIcon } from '@chakra-ui/icons'

function Hero(){
    return(
        <Box h="24vh" bg={`url(${heroBg})`} backgroundPosition="center" backgroundSize={'100%'} mb="5">
            <Flex align="center" direction="column">
                <Image
                    mt="12vh"
                    borderRadius="full"
                    boxSize="20vh"
                    src={profile}
                    objectFit="cover"
                    alt="your profile photo"
                />
                <Heading variant="profile-name" mt="1.5vh">Gretchen Curtis</Heading>
                <Flex align="center" justify="flex-end" direction={["column", "column", "row"]} w={['95%', '95%', '95%']}>
                <Button variant="edit" mt="0"><Icon as={EditIcon} variant="profile" mt="0" />Edit profile</Button>
                </Flex>
            </Flex>
        </Box>
    )
}
export default function ViewProfile(){
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                <ViewDetail />
            </Box>
        </Flex>
    )
}