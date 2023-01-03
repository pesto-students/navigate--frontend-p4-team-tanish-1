import {
    Flex,
    Box,
    Button,
    Text,
    Card,
    CardBody,
    Heading,
} from "@chakra-ui/react";
import PricingAvailability from "../../Alumni/ViewProfile/pricingAvailability.js";
import ViewDetail from "../ViewProfile/viewDetails.js"
import { NavLink } from "react-router-dom";

export default function ViewDetailForm() {
    return (
        <Box mt="12vh" p="2vw" w="100%" fontSize={["14px", "14px", "16px"]}>
            <ViewDetail />
            <PricingAvailability />
            <Button as={NavLink} to="/booking" mt="2vh" fontWeight="normal">Book Session</Button>
        </Box>
    );
}
