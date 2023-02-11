import {
  Box,
  Heading,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import {NoSessionToday} from "../NoData.js"
import { TableRecord } from "./recentSession";

function PastSession({ data }) {
  return (
      <Box backgroundColor="white" mb={"7vh"}>
          <Flex p="2vh" justify="space-between" mb="1vh">
              <Heading variant={"table-header"} color="primary">
                Previous Sessions
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

export default PastSession;
