import {
    Flex,
    Box,
    Button,
    Text,
    Card,
    CardBody,
    Heading,
} from "@chakra-ui/react";
import PricingAvailability from "../../Alumni/ViewProfile/pricingAvailability.js";
import { NavLink } from "react-router-dom";

export default function ViewDetailForm() {
    return (
        <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Headline</Heading>
                <Card
                    w={["90%", "90%", "75%"]}
                    mb="1vw"
                    bg="white"
                    borderRadius="0.3em"
                >
                    <CardBody>
                        <Text>Helping students achieve their goals</Text>
                    </CardBody>
                </Card>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Bio</Heading>
                <Card
                    w={["90%", "90%", "75%"]}
                    mb="1vw"
                    bg="white"
                    borderRadius="0.3em"
                >
                    <CardBody>
                        <Text>
                            I'm passionate about building a product that has a
                            great impact on society. I am very bullish about new
                            Tech disrupting the old and traditional industries
                            and I enjoy being a part of it. Pesto is on a
                            mission to turn global software engineering wages
                            into a meritocracy, regardless of where someone is
                            born.
                        </Text>
                    </CardBody>
                </Card>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Work Experience</Heading>
                <Card
                    w={["90%", "90%", "75%"]}
                    mb="1vw"
                    bg="white"
                    borderRadius="0.3em"
                >
                    <CardBody>
                        <Text>
                            Organization - Oracle, India, Role - Senior Software
                            Engineer, Oracle is a leading software global
                            provider of software development with over 1000
                            client across the globe.
                        </Text>
                    </CardBody>
                </Card>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Education</Heading>
                <Card
                    w={["90%", "90%", "75%"]}
                    mb="1vw"
                    bg="white"
                    borderRadius="0.3em"
                >
                    <CardBody>
                        <Text>
                            Institution - IIT Madras , Program - B.Tech Computer
                            Science and Engineering
                        </Text>
                    </CardBody>
                </Card>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Area of Interests</Heading>
                <Flex w={["90%", "90%", "75%"]} direction={["column", "column", "row"]}>
                    <Card mb="1vw" mr="1.5vw" bg="white" borderRadius="0.3em">
                        <CardBody>
                            <Text>Frontend Development</Text>
                        </CardBody>
                    </Card>
                    <Card mb="1vw" mr="1.5vw" bg="white" borderRadius="0.3em">
                        <CardBody>
                            <Text>Computer Programming</Text>
                        </CardBody>
                    </Card>
                    <Card mb="1vw" mr="1.5vw" bg="white" borderRadius="0.3em">
                        <CardBody>
                            <Text>Cyber Security</Text>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
            <PricingAvailability />
            <Button as={NavLink} to="/booking" mt="2vh" fontWeight="normal">Book Session</Button>
        </Box>
    );
}
