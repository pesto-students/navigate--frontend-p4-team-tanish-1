import {
    Flex,
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Icon,
} from "@chakra-ui/react";
import React from "react";
import cardArticle from "../../Assets/profile.jpg";
import { Button } from "@chakra-ui/button";
import { FaVideo } from "react-icons/fa/index.js";

function upcomingSession() {
    return (
        <Card
            bg="white"
            width={["90%", "90%", "90%", "70%"]}
            borderRadius="0.5em"
        >
            <CardBody>
                <Flex direction={["column", "row", "row"]}>
                    <Flex direction="column" align="flex-start" mx="0.5em">
                        <Stack
                            mt="2"
                            spacing="4"
                            textAlign="left"
                            fontSize="1.1em"
                        >
                            <Text
                                fontSize="1.3em"
                                fontWeight="500"
                                color="primary"
                            >
                                Upcoming Session
                            </Text>
                            <Text
                                fontSize="1.1em"
                                fontWeight="500"
                                color="secondary"
                            >
                                Join upcoming session with John Doe
                            </Text>
                            <Text fontSize="0.9em" mb="2em">
                                Agenda - I am a student in sophomore year in the
                                field of Computer Science and Engineering. I am
                                willing to learn more about how Software
                                Engineering really works at enterprise level.
                            </Text>
                        </Stack>
                        <Button
                            color="secondary"
                            bg="none"
                            border="1px solid #093d65"
                            w="12em"
                            mt="1.5em"
                            mb="1em"
                        >
                            <Icon as={FaVideo} mr="0.7em"></Icon>Join Meeting
                        </Button>
                    </Flex>
                    <Image
                        src={cardArticle}
                        my="auto"
                        mx="0.5em"
                        boxSize={["", "25vw", "20vh"]}
                        display={["none", "flex", "flex"]}
                        alt=""
                        borderRadius="0.7em 0.7em 0em 0em"
                    />
                </Flex>
            </CardBody>
        </Card>
    );
}

export default upcomingSession;
