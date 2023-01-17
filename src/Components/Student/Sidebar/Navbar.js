import {
    Box,
    Image,
    Flex,
    MenuList,
    Menu,
    MenuItem,
    MenuButton,
    HStack,
    IconButton,
    // useDisclosure
} from "@chakra-ui/react";
import logoSQ from "../../../Assets/logos/logo-SQ.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box w="100%" h="8vh" color="primary" bg="dark">
            <Flex align="center" h="100%" gap="4px" mx="6px" justify="space-between">
                <Image h={["5vh", "6vh", "7vh"]} display={["flex", "flex", "none"]} src={logoSQ}></Image>
                <Menu>
                    <MenuButton
                        ml="auto"
                        as={IconButton}
                        bg="dark"
                        rightIcon={
                            <HStack align="center">
                                <Image
                                    borderRadius="full"
                                    boxSize="6vh"
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />
                                <ChevronDownIcon />
                            </HStack>
                        }
                    ></MenuButton>
                    <MenuList bg="white">
                        <MenuItem as={Link} to="/signout">Sign out</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
}
