import { Box, Flex, Input, Image, Heading } from "@chakra-ui/react";
import heroBg from "../../../Assets/hero-bg-crop.jpg";
import profile from "../../../Assets/profile.jpg";
import InputForm from "./inputDetails.js";

export default function Hero(){
    return(
        <Box h="24vh" bg={`url(${heroBg})`} backgroundPosition="center" backgroundSize={'100%'}>
            <Flex align="center" direction="column">
                <Image
                    mt="12vh"
                    borderRadius="full"
                    boxSize="20vh"
                    src={profile}
                    objectFit="cover"
                    alt="your profile photo"
                />
                <Heading variant="profile-name">Gretchen Curtis</Heading>
            </Flex>
        </Box>
    )
}