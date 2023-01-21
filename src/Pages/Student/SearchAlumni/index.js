import { Flex, Box, Input, Button, Menu, MenuButton, MenuList, MenuItem, Switch, HStack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import AlumniCard from "../../../Components/Dashboard/alumni-card.js";
import { listAlumni } from "../../../API.js";
import { useEffect, useState } from "react";
import { NoSearchResult } from "../../../Components/NoData.js";
import { ListAlumni } from "../Dashboard/index.js";

export default function SearchAlumni(){
    const [alumniData, setAlumniData] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        console.log(query);
        async function fetchAlumniList(){
            const response = await listAlumni(query)
            console.log(response);
            setAlumniData(response['data'])
        } fetchAlumniList();
    }, [query])
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Box m="2vw">
                <Flex mb={"7vh"} direction={"row"} justifyContent="space-evenly">
                    <Input
                        w={["90%", "90%", "75%"]}
                        placeholder={"Search Alumni"}
                        type={"text"}
                        variant="form"
                        onChange={e => setQuery(e.target.value)}
                    />
                    <Menu>
                    {({ isOpen }) => (
                        <div>
                        <MenuButton isActive={isOpen} as={Button} variant={"filter"} rightIcon={<ChevronDownIcon />}>
                        Filter
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Unpaid only<Switch ml={"1vw"} colorScheme={"orange"}/></MenuItem>
                            <MenuItem>
                                <CheckboxGroup name={"Interests"}>
                                    <Flex direction={"column"}>
                                        <Checkbox>Game developer</Checkbox>
                                        <Checkbox>Artificial Intelligence</Checkbox>
                                    </Flex>
                                </CheckboxGroup>
                            </MenuItem>
                        </MenuList>
                        </div>
                    )}
                    </Menu>
                </Flex>
                {alumniData.length !== 0 ?
                    <Flex direction={["row"]} wrap="wrap" shrink={0} gap="2vh" justifyContent={["space-evenly"]}>
                            <ListAlumni alumniData={alumniData} />
                   </Flex> : <NoSearchResult />}
                </Box>
            </Box>
        </Flex>
    )
}