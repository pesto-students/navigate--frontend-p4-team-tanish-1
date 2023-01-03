import { Flex, Box, Text, Button, Icon, Heading, HStack, Stack } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FcClock, FcGlobe, FcCalendar } from "react-icons/fc/index.js";
import { NavLink } from "react-router-dom";

export default function ScheduleCall() {
    return (
        <Flex h="100vh" direction={["column", "column", "row"]}>
            <Flex rowGap="2vh" alignContent={"center"} bg='dark' color="white" p="4vh" direction="column">
                <Heading variant="schedule">Career as a Frontend Developer</Heading>
                <Flex align="center" columnGap={"2vw"}>
                    <Icon as={FcClock} variant="schedule"></Icon>
                    <Text>30 minutes</Text>
                </Flex>
                <Flex align="center" columnGap={"2vw"}>
                    <Icon as={FcCalendar} variant="schedule"></Icon>
                    <Stack direction={"column"} spacing={["0.8","0.8","1.5"]}>
                        <Text>8:00 PM - 8:30 PM</Text>
                        <Text>Friday, December 09, 2022</Text>
                    </Stack>
                </Flex>
                <Flex align="center" columnGap={"2vw"}>
                    <Icon as={FcGlobe} variant="schedule"></Icon>
                    <Text>India / IST</Text>
                </Flex>
            </Flex>
            <Box bg='white' m="auto">
                <Flex direction="column" px="2vw" textAlign="center">
                    <CheckCircleIcon color="green" fontSize="7vh" width="auto" />
                    <Heading variant="view">You have scheduled a call with Wilson</Heading>
                    <Heading variant="view">A confirmation mail has been sent to you on john@gmail.com</Heading>
                </Flex>
                <Flex justify="center">
                    <Button as={NavLink} to="/student/dashboard" px="2em" mt="1.2vh">Close</Button>
                </Flex>
            </Box>
        </Flex>
    )
}