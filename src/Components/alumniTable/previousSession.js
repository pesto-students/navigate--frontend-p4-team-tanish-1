import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Button, Box, Text, Flex, Image, Icon} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import tom from '../../Assets/profile.jpg';
import allison from '../../Assets/profile.jpg';
import ruben from '../../Assets/profile.jpg';
import { FaSortAmountUp, FaFilter } from "react-icons/fa/index.js";

function previousSession() {
    return (
        <Card backgroundColor="white">
  <CardHeader>
    <Flex justify="space-between">
    <Heading size='lg' color="primary">Previous Sessions</Heading>
    <Flex w="10vw" justify="space-around">
      <Button bg="none" mr="1vw">
        <Flex align="center">
          <Icon as={FaSortAmountUp} color="primary" mr="0.5vw" />
          <Text color="secondary" fontWeight="500">Sort</Text>
        </Flex>
      </Button>
      <Button bg="none">
      <Flex align="center">
        <Icon as={FaFilter} color="primary" mr="0.5vw" />
        <Text color="secondary" fontWeight="500">Filter</Text>
      </Flex>
      </Button>
    </Flex>

    </Flex>
  </CardHeader>
  <CardBody fontWeight="medium">
    <Stack divider={<StackDivider />} spacing='4'>
      <Flex justify="space-around" my="1vh">
        <Text w="20vw" color="secondary" fontWeight="500">Student Name</Text>
        <Text w="20vw" color="secondary" fontWeight="500">Interests</Text>
        <Text w="20vw" color="secondary" fontWeight="500">Earnings</Text>
        <Text w="20vw" color="secondary" fontWeight="500">Date & Time</Text>
      </Flex>
      <Flex justify="space-around" align="center">
        <Flex w="20vw" align="center" justify="flex-start" px="3vw">
          <Image src={tom} width="3vw" mr="0.7vw" />
          <Text>Tom Cruise</Text>
        </Flex>
        <Text w="20vw">Software & Technology</Text>
        <Text w="20vw" color="primary">300 Rs</Text>
        <Flex w="20vw" justify="center">
          <Text mr="1vw">May 26, 2019</Text>
          <Text color="primary">6:30 PM</Text>
        </Flex>
      </Flex>
      <Flex justify="space-around" align="center">
        <Flex w="20vw" align="center" justify="flex-start" px="3vw">
          <Image src={allison} width="3vw" mr="0.7vw" />
          <Text>Allison Calzoni</Text>
        </Flex>
        <Text w="20vw">Software & Technology</Text>
        <Text w="20vw" color="primary">450 Rs</Text>
        <Flex w="20vw" justify="center">
          <Text mr="1vw">May 26, 2019</Text>
          <Text color="primary">6:30 PM</Text>
        </Flex>
      </Flex>
      <Flex justify="space-around" align="center">
        <Flex w="20vw" align="center" justify="flex-start" px="3vw">
          <Image src={ruben} width="3vw" mr="0.7vw" />
          <Text>Ruben Schleifer</Text>
        </Flex>
        <Text w="20vw">Entrepreneurship</Text>
        <Text w="20vw" color="primary">200 Rs</Text>
        <Flex w="20vw" justify="center">
          <Text mr="1vw">May 26, 2019</Text>
          <Text color="primary">6:30 PM</Text>
        </Flex>
      </Flex>
      <Button w="20vw" mx="auto" bg="none" color="primary"><ChevronDownIcon fontSize="1.5em" mx="0.2em" />View More</Button>
    </Stack>
  </CardBody>
</Card>
    );
} 

export default previousSession;