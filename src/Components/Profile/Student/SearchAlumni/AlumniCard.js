import React from "react";
import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function AlumniCard() {
    return <Heading>AlumniCard
        <NavLink to="/alumni/123">Alumni John Miller</NavLink>
    </Heading>;
}

export default AlumniCard;
