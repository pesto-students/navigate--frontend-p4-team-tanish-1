import React from 'react'
import errorImg from "../../Assets/404.png"
import { Box, Button, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <Box align={"center"}>
        <Image src={errorImg}/>
        <Heading>Page Not Found</Heading>
        <Button as={Link} to={"/signout"} mt="5vh">Back to Home</Button>
    </Box>
  )
}

export default Error404