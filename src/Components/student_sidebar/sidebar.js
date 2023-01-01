import { Box, Image, List, Link, Flex, Icon } from "@chakra-ui/react";
import logo from "../../Assets/logos/logo.png";
import { FiHome, FiSearch, FiSettings } from "react-icons/fi/index.js";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, children, isActive }) => {
    return (
        <Link style={{ textDecoration: "none" }}>
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

export default function Sidebar() {
    return (
        <>
            <Flex
                w="20%"
                direction="column"
                justify="flex-start"
                py="0"
                my="0"
                cursor="pointer"
                fontSize={["l"]}
                color="white">
                <Box
                    align="flex-start"
                    h="100%"
                    w="100%"
                    bg="dark"
                    display={["none", "none", "flex"]}
                    flexDirection="column">
                    <Image w="50%" py="6vh" mx="auto" src={logo} />
                    <Link
                        textAlign="left"
                        as={NavLink}
                        py="0.75em"
                        to="/student/dashboard"
                        _activeLink={{
                            borderLeft: "0.4em solid orange",
                            color: "white",
                            backgroundColor: "active-background",
                        }}
                        _hover={{ textDecoration: "none" }}>
                        <Icon
                            as={FiHome}
                            mx="2"
                            fontSize="xl"
                            _groupHover={{ color: "white" }}/>
                        Dashboard
                    </Link>
                    <Link
                        textAlign="left"
                        as={NavLink}
                        pl="1em"
                        py="0.75em"
                        to="/search"
                        _activeLink={{
                            pl: "-1em",
                            borderLeft: "0.5em solid",
                            borderColor: "primary",
                            color: "primary",
                            backgroundColor: "active-background",
                        }}
                        _hover={{ textDecoration: "none" }}
                    >
                        <Icon
                            as={FiSearch}
                            mx="2"
                            fontSize="xl"
                            _groupHover={{ color: "white" }}
                        />
                        Search
                    </Link>
                    <Link                
                        textAlign="left"
                        as={NavLink}
                        pl="0.5em"
                        py="0.75em"
                        to="/student/profile"
                        _activeLink={{
                            borderLeft: "0.5em solid orange",
                            backgroundColor: "active-background",
                        }}
                        _hover={{ textDecoration: "none" }}
                    >
                        <Icon
                            as={FiSettings}
                            mx="2"
                            fontSize="xl"
                            _groupHover={{ color: "white" }}
                        />
                        Profile
                    </Link>
                </Box>
            </Flex>
        </>
    );
}
