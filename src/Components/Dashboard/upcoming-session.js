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

function upcomingSession({data}) {
    console.log(data);
    console.log("hello ------");
    return (
        <Card
            bg="white"
            width={["100%", "100%", "100%", "70%"]}
            borderRadius="0.5em"
        >
            <CardBody>
                <Flex direction={["column", "row", "row"]} justifyContent="space-between">
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
                                Join upcoming session
                            </Text>
                            <Text fontSize="0.9em" mb="2em">
                                Agenda - {data.agenda}
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
