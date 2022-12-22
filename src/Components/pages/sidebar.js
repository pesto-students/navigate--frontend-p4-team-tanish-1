import { useDisclosure, Box, Image, List, Link, Flex, Icon, Drawer, DrawerContent } from "@chakra-ui/react";
import logo from "../../Assets/logos/logo.png";
import { FiHome, FiMenu, FiSearch, FiSettings } from "react-icons/fi/index.js";
import Navbar from "./Navbar.js";

const NavItem = ({ icon, children, isActive }) => {
    return (
        <Link href={children} style={{ textDecoration: "none" }}>
            <Flex
                align="center"
                py="3"
                my="2"
                cursor="pointer"
                fontSize={["l"]}
                color={isActive ? "primary" : "white"}
                _hover={
                    isActive
                        ? {}
                        : {
                              bg: "active-background",
                              color: "white",
                          }
                }
                backgroundColor={isActive ? "active-background" : "dark"}
                borderLeftWidth={isActive ? "6px" : "0vw"}
                borderColor={isActive ? "primary" : "dark"}
            >
                <Icon
                    mx="4"
                    fontSize="xl"
                    _groupHover={{ color: "white" }}
                    as={icon}
                />
                {children}
            </Flex>
        </Link>
    );
};

export default function Sidebar(props) {
    const { isActive } = props;
    return (
        <Flex w="20%" direction="row">
            <Box
                h="100%"
                w="100%"
                bg="dark"
                display={["none", "none", "flex"]}
                flexDirection="column"
            >
                <Box align="center">
                    <Image w="50%" py="6vh" src={logo} />
                </Box>
                <List>
                    <NavItem icon={FiHome}>Home</NavItem>
                    <NavItem icon={FiSearch}>Search</NavItem>
                    <NavItem icon={FiSettings} isActive>
                        Settings
                    </NavItem>
                </List>
            </Box>
        </Flex>
    );
}