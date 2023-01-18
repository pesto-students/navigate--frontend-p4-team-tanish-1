import React from 'react';
import noData from "../Assets/no-data.jpg";
import noSearch from "../Assets/no-alumni.jpg";
import noSuggestion from "../Assets/no-search.png";
import { Image, Flex, Heading } from "@chakra-ui/react";

export function NoUpcoming() {
    return (
    <Flex direction={["column", "row", "row"]} justifyContent="space-around" alignItems={"center"}>
        <Heading variant={"view"}>No Upcoming Session</Heading>
        <Image src={noData} boxSize="15vw"/>
    </Flex>
    )
}

export function NoSuggestedAlumni() {
    return (
        <Flex direction={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Image src={noSuggestion} boxSize={"25vw"}/>
            <Heading color={"secondary"} fontSize={"lg"}>No Suggestions Found</Heading>
        </Flex>
    )
}

export function NoSearchResult() {
    return (
        <Flex direction={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Image src={noSearch} />
            <Heading color={"secondary"} fontSize={"lg"}>No Records</Heading>
        </Flex>
    )
}

export function NoSessionToday() {
    return (
        <Flex pb={"5vh"} direction={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Image src={noSearch} height={"30vh"}/>
            <Heading color={"secondary"} fontSize={"lg"}>No Sessions Scheduled For Today</Heading>
        </Flex>
    )
}