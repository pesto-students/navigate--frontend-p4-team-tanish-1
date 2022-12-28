import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase-config.js";
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
import logoSQ from "../../Assets/logos/logo-SQ.png";
import { ChevronDownIcon } from "@chakra-ui/icons";

function userSignOut() {
    const auth = getAuth(app);
    signOut(auth)
        .then(() => {
            console.log("Logout successful");
        })
        .catch((error) => {
            console.log(error);
        });
}
// <IconButton
//     display={{ base: 'flex', md: 'none' }}
//     onClick={onOpen}
//     variant="outline"
//     aria-label="open menu"
//     icon={<FiMenu />}
// />
export default function Navbar() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
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
                        <MenuItem onClick={userSignOut}>Sign out</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
}
