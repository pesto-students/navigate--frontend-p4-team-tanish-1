import {
    Flex,
    Text,
    Card,
    CardBody,
    Heading,
} from "@chakra-ui/react";

export default function AlumniPricingAvailability({data}) {
    console.log(data);
    return (
        <>
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
                            Weekdays -{" "}
                            {!data.availability.weekdaysFrom
                                ? "--"
                                : data.availability.weekdaysFrom}{" "}
                            to{" "}
                            {!data.availability.weekdaysTo
                                ? "--"
                                : data.availability.weekdaysTo}
                            <br />
                            Weekends -{" "}
                            {!data.availability.weekendFrom
                                ? "--"
                                : data.availability.weekendFrom}{" "}
                            to{" "}
                            {!data.availability.weekendTo
                                ? "--"
                                : data.availability.weekendTo}
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
                        <Text>{data.pricing} Rs per hour</Text>
                    </CardBody>
                </Card>
            </Flex>
        </>
    );
}
