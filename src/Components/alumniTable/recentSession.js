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
import userPhoto from "../../Assets/user-placeholder.png"
import {NoSessionToday} from "../NoData.js"

export function ProfileName({name, image}){
    return (
        <Flex align="center" justifyContent={"space-evenly"} gap="1vw">
            <Image
                src={image !== null ? image : userPhoto}
                width="2em"
                borderRadius={"full"}
            />
            <Text>{name}</Text>
        </Flex>
    )
}

export function TableRecord({data}){
    console.log(data);
    return (
        <Tr>
            <Td>
                <ProfileName name={data.student.name} image={data.student.image}/>
            </Td>
            <Td textAlign={"center"}>{data.student.interest}</Td>
            <Td textAlign={"center"} color="primary">{data.amount} Rs</Td>
            <Td textAlign={"center"}>{data.from}</Td>
        </Tr>
    )
}

function Session({ data }) {
    console.log("--->", data.length);
    return (
        <Box backgroundColor="white" mb={"7vh"}>
            <Flex p="2vh" justify="space-between" mb="1vh">
                <Heading variant={"table-header"} color="primary">
                    Session Scheduled Today
                </Heading>
            </Flex>
            {data.length !== 0 ? <TableContainer alignContent={"center"}>
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
                        {
                            data.map((session) => {
                                return (
                                    <TableRecord data={session}/>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer> : <NoSessionToday />}
        </Box>
    );
}

export default Session;
