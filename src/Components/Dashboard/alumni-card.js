import {
    Flex,
    Text,
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Icon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import first from "../../Assets/profile.jpg";
import { Link } from "react-router-dom";

function alumniCard({data}) {
    const link = `/alumni/${data._id}`
    return (
        <Card bg="white" as={Link} to={link} width={["40vh", "45vh"]} borderRadius="0.7em">
            <Image
                src={first}
                alt="Alumni photo"
                borderRadius="0.7em 0.7em 0em 0em"
            />
            <CardBody>
                <Flex direction="column" align="center">
                    <Stack mt="2" textAlign="left" fontSize="1.1em" mx="0.5em">
                        <Text
                            fontSize="0.9em"
                            fontWeight="500"
                            color="secondary"
                        >
                            {data.interest[0]}
                        </Text>
                        <Text fontWeight="500" fontSize="1.5em">
                            {data.name}
                        </Text>
                        <Text fontSize="0.9em">
                            {data.bio}
                        </Text>
                    </Stack>
                </Flex>
            </CardBody>
            <CardFooter>
                <Flex
                    direction="row"
                    justify="space-between"
                    fontSize="0.9em"
                    mx="0.8em"
                    color="grey"
                    borderTop="1px solid grey"
                    pt="3"
                    w="20em"
                >
                    <Text>Fees - 100 Rs / hour</Text>
                    <Flex align="center">
                        <Icon
                            color="primary"
                            as={StarIcon}
                            mr="0.3em"
                            fontSize="1.2em"
                        ></Icon>
                        <Text>4.8</Text>
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    );
}

export default alumniCard;
