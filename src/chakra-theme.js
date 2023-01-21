import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
        primary: "#F98E54",
        secondary: "#093D65",
        dark: "#161616",
        "primary-hover": "#F5742E",
        "dark-hover": "#565656",
        "txt-primary": "#FFFFFF",
        "btn-grey": "#EEEEEE",
        "btn-grey-hover": "#CCCCCC",
        "active-background": "#262626",
        "default-bg": "#ECF4F4",
    },
    fonts: {
        Heading: `'Nunito'`,
    },
    components: {
        Button: {
            variants: {
                main: {
                    bg: "primary",
                    color: "txt-primary",
                    _hover: {
                        bg: "primary-hover",
                    },
                },
                auth: {
                    bg: "dark",
                    color: "primary",
                    w: "80%",
                    mt: "2vh",
                    fontSize: "1.12em",
                    _hover: {
                        bg: "dark-hover",
                    },
                },
                google: {
                    w: "80%",
                    mt: "2vh",
                    fontSize: "1.12em",
                    _hover: {
                        bg: "btn-grey",
                    },
                    bg: "white",
                    color: "dark",
                    boxShadow: "md",
                },
                edit: {
                    bg: "none",
                    color: "secondary",
                    pl: "0",
                    mt: "1vw",
                    mr: "2em",
                    fontSize: ["0.75em", "0.8em", "0.9em"],
                    _hover: {
                        bg: "dark",
                        color: "txt-primary"
                    }
                },
                filter: {
                    bg: "dark",
                    color: "primary"
                },
                dashboard: {
                    bg: "none",
                    color: "secondary",
                    _hover: {
                        color: "white",
                        bg: "dark",
                    }
                }
            },
            defaultProps: {
                variant: "main",
            },
        },
        Heading: {
            variants: {
                main: {
                    mt: "5vh",
                    mb: "1vh",
                },
                "profile-name": {
                    fontSize: "l",
                    my: "2vh",
                    color: "primary",
                },
                view: {
                    color: "secondary",
                    my: "2vh",
                    fontSize: "18px",
                    fontWeight: "500"
                },
                schedule: {
                    fontSize: "18px",
                    fontWeight: "500"
                },
                "table-header": {
                    fontSize: ["sm","md","lg"],
                    fontWeight: 600
                }
            },
        },
        Icon: {
            variants: {
                profile:{
                    color:"primary",
                    mr:"0.5vw",
                    ml:"0.5vw",
                    fontSize:"1.2em"
                },
                schedule: {
                    fontSize: "1.2em",
                }
            }
        },
        ListItem: {
            variants: {
                sidebar: {
                    w: "100%",
                    color: "#FFFFFF",
                },
            },
        },
        Input: {
            variants: {
                form: {
                    bg: "white",
                },
            },
        },
        FormLabel: {
            variants: {
                spaced: {
                    mt: "1vh",
                },
                profile: {
                    my: "2vh",
                    fontSize: "16px",
                },
            },
            defaultProps: {
                variant: "spaced",
            },
        },
        Text: {
            variants: {
                tableHeaders: {
                    color: "secondary",
                    fontWeight:600
                }
            }
        }
    },
});

export default theme;