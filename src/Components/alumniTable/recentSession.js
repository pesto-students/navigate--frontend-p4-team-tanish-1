import {
    Box,
    Heading,
    Text,
    Flex,
    Image,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import ashlynn from "../../Assets/profile.jpg";

function ProfileName(){
    return (
        <Flex align="center" justifyContent={"space-evenly"} gap="1vw">
            <Image
                src={ashlynn}
                width="2em"
                borderRadius={"full"}
            />
            <Text>Ashlynn Kenter</Text>
        </Flex>
    )
}

function TableRecord(){
    return (
        <Tr>
            <Td>
                <ProfileName />
            </Td>
            <Td textAlign={"center"}>Software & Technology</Td>
            <Td textAlign={"center"} color="primary">400 Rs</Td>
            <Td textAlign={"center"}>6:30 PM</Td>
        </Tr>
    )
}

function Session() {
    return (
        <Box backgroundColor="white" mb={"7vh"}>
            <Flex p="2vh" justify="space-between" mb="1vh">
                <Heading variant={"table-header"} color="primary">
                    Session Scheduled Today
                </Heading>
            </Flex>
            <TableContainer alignContent={"center"}>
                <Table>
                    <Thead>
                        <Tr color={"primary"}>
                            <Th textAlign={"center"}><Text variant={"tableHeaders"}>Studnet Name</Text></Th>
                            <Th textAlign={"center"}><Text variant={"tableHeaders"}>Interests</Text></Th>
                            <Th textAlign={"center"}><Text variant={"tableHeaders"}>Earnings</Text></Th>
                            <Th textAlign={"center"}><Text variant={"tableHeaders"}>Time</Text></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <TableRecord />
                        <TableRecord />
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Session;
