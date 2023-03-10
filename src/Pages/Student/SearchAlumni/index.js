import { Flex, Box, Input, useToast, Button, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import { listAlumni } from "../../../API.js";
import { useEffect, useState } from "react";
import { NoSearchResult } from "../../../Components/NoData.js";
import { ListAlumni } from "../Dashboard/index.js";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce"
import { suggestedAlumni } from "../../../API.js";
import { interests } from "../../../CONSTANTS.js";

export default function SearchAlumni(){
    const navigate = useNavigate();
    const toast = useToast();
    const [alumniData, setAlumniData] = useState([])
    const [query, setQuery] = useState("")

    const fetchByInterest = async (interest) => {
        console.log(interest);
        const response = await suggestedAlumni(interest)
        setAlumniData(response['data'])
    }
    useEffect(() => {
        async function fetchAlumniList(){
            const response = await listAlumni(query);
            if(response === 401){
                navigate('/signout')
                return toast({
                    title : "Session Timeout",
                    description: "Session expired please login again",
                    variant: "top-accent",
                    status: "info",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            }
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
                        onChange={debounce((e => setQuery(e.target.value)), 500)}
                    />
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Filter
                        </MenuButton>
                        <MenuList>
                            {
                                interests.map((i) => <MenuItem value={i} onClick={(e) => fetchByInterest(e.target.value)}>{i}</MenuItem>)
                            }
                        </MenuList>
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