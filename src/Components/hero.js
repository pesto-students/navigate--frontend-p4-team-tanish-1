import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import heroBg from "../Assets/hero-bg-crop.jpg";
import profile from "../Assets/user-placeholder.png";

export default function Hero({fullName, photo}){
    return(
        <Box h="24vh" bg={`url(${heroBg})`} backgroundPosition="center" backgroundSize={'100%'}>
            <Flex align="center" direction="column">
                <Image
                    mt="12vh"
                    borderRadius="full"
                    boxSize="20vh"
                    src={photo !== null ? photo : profile}
                    objectFit="cover"
                    alt="your profile photo"
                />
                <Heading variant="profile-name">{fullName}</Heading>
            </Flex>
        </Box>
    )
}