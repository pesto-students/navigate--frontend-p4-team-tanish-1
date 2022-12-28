import { Box, Image, List, Link, Flex, Icon, } from "@chakra-ui/react";
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

const SideNavItem = ({to, icon, title, as, _activeLink}) => {
    return(
        <NavLink to={to}><NavItem icon={icon}>{title}</NavItem></NavLink>
    )
}

export default function Sidebar() {
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
                    <NavLink to="/student/dashboard" _activeLink={{fontWeight: "700"}}><NavItem icon={FiHome}>Dashboard</NavItem></NavLink>
                    <NavLink to="/search" _activeLink={{fontWeight: "700"}}><NavItem icon={FiSearch}>Search</NavItem></NavLink>
                    <NavLink to="/profile" _activeLink={{fontWeight: "700"}}><NavItem icon={FiSettings}>Profile</NavItem></NavLink>
                </List>
            </Box>
        </Flex>
    );
}