import {extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors:{
        primary: "#F98E54",
        secondary: "#093D65",
        dark: "#161616",
        "primary-hover": "#F5742E",
        "dark-hover": "#565656",
        "txt-primary": "#FFFFFF",
        "btn-grey": "#EEEEEE",
        "btn-grey-hover": "#CCCCCC",
        "active-background": "#262626"
    },
    fonts: {
        Heading: `'Nunito'`
    },
    components: {
        Button: {
            variants: {
                'main': {
                    bg: "primary",
                    color: "txt-primary",
                    _hover: {
                        bg: "primary-hover"
                    }
                },
                'auth': {
                    bg: "dark",
                    color: "primary",
                    w:"80%",
                    mt: "2vh",
                    fontSize: "1.12em",
                    _hover: {
                        bg: "dark-hover"
                    }
                },
                'google': {
                    w:"80%",
                    mt: "2vh",
                    fontSize: "1.12em",
                    _hover: {
                        "bg": "btn-grey"
                    },
                    bg: "white",
                    color: "dark",
                    boxShadow: 'md',
                }
            },
            defaultProps: {
                variant: 'main'
            }
        },
        Heading: {
            variants: {
                'main': {
                    mt: "5vh",
                    mb: "1vh"
                }
            }
        },
        ListItem: {
            variants:{
                'sidebar': {
                    w: "100%",
                    color: "#FFFFFF"
                }
            }
        }
    }
})

export default theme;