import { Flex, Text, Card, CardBody, Image, Stack } from "@chakra-ui/react";
import React from "react";
import userPhoto from "../../Assets/user-placeholder.png";

function MyCard({name, headline, image}) {
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
                        src={image !== null ? image : userPhoto }
                        alt="Your profile photo"
                        borderRadius="full"
                        boxSize={"20vh"}
                        objectFit={"cover"}
                    />
                    <Stack
                        mt="6"
                        mb="2"
                        spacing="3"
                        textAlign="center"
                        fontSize="1em"
                        mx="1.3em"
                    >
                        <Text color="primary" fontWeight="600">
                            {name}
                        </Text>
                        <Text color="secondary">
                            {headline}
                        </Text>
                    </Stack>
                </Flex>
            </CardBody>
        </Card>
    );
}

export default MyCard;
