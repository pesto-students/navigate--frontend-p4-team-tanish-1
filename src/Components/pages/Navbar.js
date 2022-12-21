import { getAuth, signOut } from "firebase/auth";
import app from '../../firebase-config.js'
import { Button, Box, Image, Flex, MenuList, Menu, MenuItem, MenuButton, HStack, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function userSignOut(){
    const auth = getAuth(app);
    signOut(auth).then(() => {
        console.log("Logout successful");
    }).catch((error) => {
        console.log(error);
    });
}
export default function Navbar(){
    return(
        <Box w="100%" h="8vh" color="primary" bg="dark">
        <Flex align="center" h="100%" gap="4px" mr="6px">
            <Menu>
                <MenuButton ml="auto" as={Button} bg="dark" rightIcon={<HStack align="center"><Image borderRadius='full' boxSize='6vh' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/><ChevronDownIcon /></HStack>}></MenuButton>
                <MenuList bg='white'>
                    <MenuItem onClick={userSignOut}>Sign out</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
        </Box>
    )   
}