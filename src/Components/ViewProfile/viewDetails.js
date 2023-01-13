import {
    Flex,
    Text,
    Card,
    CardBody,
    Heading,
} from "@chakra-ui/react";

function CardView({children}){
    return (
        <Card
            w={["90%", "90%", "75%"]}
            mb="1vw"
            bg="white"
            borderRadius="0.3em">
            <CardBody>
                <Text>{children}</Text>
            </CardBody>
        </Card>
    )
}

export default function ViewDetailForm({data}) {
    return (
        <>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Headline</Heading>
                <CardView>{data.headline}</CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Bio</Heading>
                <CardView>{data.bio}</CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Work Experience</Heading>
                <CardView><b>Organization -</b> {data.organization} <br />
                          <b>Role -</b> {data.role}</CardView>
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <Heading variant="view">Education</Heading>
                <CardView>
                    <b>Institution -</b> {data.institution}<br/> 
                    <b>Program -</b> {data.course}
                </CardView>
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
                            <Text>{data.interest[0]}</Text>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
        </>
    );
}
