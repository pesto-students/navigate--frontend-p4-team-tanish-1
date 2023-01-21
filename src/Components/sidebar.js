import { Box, Image, Link, Flex, Icon } from "@chakra-ui/react";
import logo from "../Assets/logos/logo.png";
import { NavLink } from "react-router-dom";

const NavItem = ({icon, children, to}) => {
    return (
        <Link
            as = {NavLink}
            to = {to}
            textAlign="left"
            py ="0.75em"
            display={"flex"}
            align="center"
            _activeLink = {{
                borderLeft: "0.4em solid #F98E54",
                color: "primary",
                backgroundColor: "active-background",
            }}
            _hover = {{ textDecoration: "none" }}>
            <Icon as = {icon} mx = "2" fontSize = "xl" _groupHover = {{ color: "white" }}/>
            {children}
        </Link>    
    )
}

export default function Sidebar(data) {
    return (
        <>
            <Flex
                w="20%"
                direction="column"
                justify="flex-start"
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
                    {
                        data.map((nav) => {
                            return (
                                <NavItem key={nav['key']} icon={nav["icon"]} to={nav["to"]}>{nav["name"]}</NavItem>
                            )
                        })
                    }
                </Box>
            </Flex>
        </>
    );
}
