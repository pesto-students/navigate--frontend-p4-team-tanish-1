import {
    Box,
    ListItem,
    List,
    Link,
    Flex,
    Image,
    Button,
    useDisclosure,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerOverlay,
    Show,
    useColorMode
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import logoSQ from "../Assets/logos/logo-SQ.png";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box>
            <Show breakpoint="(min-width: 576px)"><DesktopNavbar /></Show>
            <Show breakpoint="(max-width: 575px)"><MobileNavbar /></Show>
            {/*<Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark': 'Light'}</Button>*/}
        </Box>
    );
}

function DesktopNavbar() {
    return (
        <Box bg="dark" color="txt-primary" w="100%" px="2vw" py="1vh">
            <Flex justify="space-between" align="center">
                <Image src={logoSQ}></Image>
                <List>
                    <Flex w={["46vw", "42vw", "30vw"]} justify="space-evenly">
                        <ListItem>
                            <Link>Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link>How it Works</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Contact</Link>
                        </ListItem>
                    </Flex>
                </List>
                <Link as="Button" href="/signin">Get Started</Link>
            </Flex>
        </Box>
    );
}

function MobileNavbar() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Box bg="dark" color="txt-primary" w="100%" px="1vw" py="0.5vh">
            <Flex justify="space-between" align="center">
                <Image h={["7vh", "8vh", "9vh"]} src={logoSQ}></Image>
                <HamburgerIcon w="10" onClick={onOpen} />
            </Flex>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="dark" color="txt-primary">
                    <Flex
                        justify="space-between"
                        color="primary"
                        align="center"
                        borderBottomWidth="1px"
                    >
                        <DrawerHeader>Navigate</DrawerHeader>
                        <CloseIcon onClick={onClose} w="10" />
                    </Flex>
                    <DrawerBody>
                        <p>
                            <Link>Home</Link>
                        </p>
                        <p>
                            <Link>How it Works</Link>
                        </p>
                        <p>
                            <Link>Contact</Link>
                        </p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
