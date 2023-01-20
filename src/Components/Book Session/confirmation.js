import {
    Flex,
    Box,
    Text,
    Button,
    Icon,
    Heading,
    Stack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FcClock, FcGlobe, FcCalendar } from "react-icons/fc/index.js";
import { Link, useLocation } from "react-router-dom";

export default function ScheduleCall() {
    const {state} = useLocation()
    const displayDate = new Date(state.data.date);
    const month = displayDate.toLocaleDateString('default', { month: 'long' });
    const year = displayDate.getFullYear();
    const date = displayDate.getDate();
    const day = displayDate.toLocaleDateString('default', {weekday: 'long'});

    return (
        <Flex h="100vh" direction={["column", "column", "row"]}>
            <Flex
                rowGap="2vh"
                alignContent={"center"}
                bg="dark"
                color="white"
                p="4vh"
                direction="column"
            >
                <Heading variant="schedule">
                    {state.data.topic}
                </Heading>
                <Flex align="center" columnGap={"2vw"}>
                    <Icon as={FcClock} variant="schedule"></Icon>
                    <Text>60 minutes</Text>
                </Flex>
                <Flex align="center" columnGap={"2vw"}>
                    <Icon as={FcCalendar} variant="schedule"></Icon>
                    <Stack direction={"column"} spacing={["0.8", "0.8", "1.5"]}>
                        <Text>{`${day}, ${month}, ${date} ${year}`}</Text>
                        <Text>{state.data.from}</Text>
                    </Stack>
                </Flex>
                <Flex align="center" columnGap={"2vw"}>
                    <Icon as={FcGlobe} variant="schedule"></Icon>
                    <Text>India / IST</Text>
                </Flex>
            </Flex>
            <Box bg="white" m="auto">
                <Flex direction="column" px="2vw" textAlign="center">
                    <CheckCircleIcon
                        color="green"
                        fontSize="7vh"
                        width="auto"
                    />
                    <Heading variant="view">
                        You have scheduled A Session
                    </Heading>
                </Flex>
                <Flex justify="center">
                    <Button
                        as={Link}
                        to="/student/dashboard"
                        px="2em"
                        mt="1.2vh"
                    >
                        Close
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
}
