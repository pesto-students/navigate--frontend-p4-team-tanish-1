import React from 'react'
import errorImg from "../../Assets/500.png"
import { Box, Button, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Error500() {
  return (
    <Box align={"center"}>
        <Image src={errorImg}/>
        <Heading>Something went wrong</Heading>
        <Button as={Link} to={"/signout"} mt="5vh">Back to Home</Button>
    </Box>
  )
}

export default Error500