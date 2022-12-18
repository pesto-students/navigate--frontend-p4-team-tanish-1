import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    colors:{
        primary: "#F98E54",
        secondary: "#093D65",
        dark: "#161616",
        "txt-primary": "#FFFFFF"
    },
    fonts: {
        Heading: `'Nunito'`
    },
    components: {
        Button: {
            variants: {
                'main': {
                    bg: "primary",
                    color: "txt-primary"
                }
            }
        },
        Heading: {

        }
    }
})

export default theme;