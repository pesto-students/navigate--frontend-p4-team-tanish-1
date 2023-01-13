import { Flex, Text, Card, CardBody, Image, Stack } from "@chakra-ui/react";
import React from "react";
import cover from "../../Assets/profile.jpg";

function MyCard() {
    return (
        <Card
            bg="white"
            width="25%"
            borderRadius="0.5em"
            display={["none", "none", "none", "flex"]}
        >
            <CardBody>
                <Flex direction="column" align="center">
                    <Image
                        src={cover}
                        alt="Your profile photo"
                        borderRadius="full"
                        h="20vh"
                    />
                    <Stack
                        mt="6"
                        mb="2"
                        spacing="3"
                        textAlign="center"
                        fontSize="1em"
                        mx="1.3em"
                    >
                        <Text color="secondary" fontWeight="600">
                            Student
                        </Text>
                        <Text color="primary" fontWeight="600">
                            Gretchen Curtis
                        </Text>
                        <Text color="grey">
                            Passionate about Software and Tech
                        </Text>
                    </Stack>
                </Flex>
            </CardBody>
        </Card>
    );
}

export default MyCard;