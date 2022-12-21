import { Box, Image, List, Link, Flex, Icon } from "@chakra-ui/react";
import logo from "../../Assets/logos/logo.png"
import {
    FiHome,
    FiSearch,
    FiSettings,
} from 'react-icons/fi/index.js';
import Navbar from "./Navbar.js";


const NavItem = ({ icon, children, isActive }) => {
    console.log(isActive)
    return (
      <Link href={children} style={{ textDecoration: 'none' }}>
        <Flex align="center" py="3" my="2" cursor="pointer" fontSize={["l"]} 
        color={isActive ? "primary" : "white"}
        _hover={isActive ? {} : {
            bg: 'active-background',
            color: 'white',
        }}
        backgroundColor={isActive ? "active-background" : "dark"}
        borderLeftWidth={isActive ? "6px" : "0vw"}
        borderColor={isActive ? "primary": "dark"}>
        <Icon mx="4" fontSize="2xl" _groupHover={{ color: 'white' }} as={icon}/>
        {children}
        </Flex>
      </Link>
    );
};

export default function Sidebar(props){
    const {isActive} = props
    return(
        <Flex>
            <Box h="100vh" w="20vw" bg="dark" display={["none", "none", "flex"]} flexDirection="column">
                <Box align="center">
                    <Image w="60%" py="6vh" src={logo}/>
                </Box>
                <List>
                    <NavItem icon={FiHome}>Home</NavItem>
                    <NavItem icon={FiSearch}>Search</NavItem>
                    <NavItem icon={FiSettings} isActive>Settings</NavItem>
                </List>
            </Box>
            <Navbar />
        </Flex>
    )
}