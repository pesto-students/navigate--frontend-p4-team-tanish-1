import {
    Flex,
    Box,
    Button,
    Text,
    Card,
    CardBody,
    Heading,
} from "@chakra-ui/react";

function CardView({ children }) {
    return (
        <Card
            w={["90%", "90%", "75%"]}
            mb="1vw"
            bg="white"
            borderRadius="0.3em"
        >
            <CardBody>
                <Text>{children}</Text>
            </CardBody>
        </Card>
    );
}

export default function AlumniViewDetailForm() {
    return (
        <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Headline</Heading>
                <CardView>Helping students achieve their goals</CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Bio</Heading>
                <CardView>
                    I'm passionate about building a product that has a great
                    impact on society. I am very bullish about new Tech
                    disrupting the old and traditional industries and I enjoy
                    being a part of it. Pesto is on a mission to turn global
                    software engineering wages into a meritocracy, regardless of
                    where someone is born.
                </CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Work Experience</Heading>
                <CardView>
                    Organization - Oracle, India, Role - Senior Software
                    Engineer, Oracle is a leading software global provider of
                    software development with over 1000 client across the globe.
                </CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Education</Heading>
                <CardView>
                    Institution - IIT Madras , Program - B.Tech Computer Science
                    and Engineering
                </CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Area of Interests</Heading>
                <Flex
                    w={["90%", "90%", "75%"]}
                    direction={["column", "column", "row"]}
                >
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
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Availability</Heading>
                <Card
                    w={["90%", "90%", "75%"]}
                    mb="1vw"
                    bg="white"
                    borderRadius="0.3em"
                >
                    <CardBody>
                        <Text>
                            Monday to Friday - 8:00 PM to 10:00 PM , Saturday,
                            Sunday - 11:00 AM to 04:00 PM
                        </Text>
                    </CardBody>
                </Card>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Pricing</Heading>
                <Card
                    w={["90%", "90%", "75%"]}
                    mb="1vw"
                    bg="white"
                    borderRadius="0.3em"
                >
                    <CardBody>
                        <Text>150 Rs per hour</Text>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    );
}
