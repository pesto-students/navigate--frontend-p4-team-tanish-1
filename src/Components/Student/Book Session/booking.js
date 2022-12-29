import { useForm } from "react-hook-form";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Text
} from "@chakra-ui/react";

async function bookSession(values) {
    console.log(values);
    await setTimeout(()=> {
        console.log(3000)
    }, 3000)
}

export default function Booking() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    
    return (
        <Box pt="16vh">
            <form onSubmit={handleSubmit(bookSession)}>
                <FormControl p="2vw" w="100%" mb="5em">
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Topic of Discussion</FormLabel>
                        <Input
                            id="topic"
                            w={['90%','90%','75%']}
                            placeholder="Topic"
                            type="text"
                            variant='form'
                            {...register("headline")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Agenda</FormLabel>
                        <Textarea
                            id="agenda"
                            w={['90%','90%','75%']}
                            placeholder="What's on your mind?"
                            type="text"
                            mb = "2vh"
                            variant='form'
                            {...register("bio")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Availability</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-between" align="center" direction={["column", "column", "row"]}>
                                <Box w={["100%","100%","75%"]}>
                                <Flex justify="flex-start" align="center" direction={["column", "column", "row"]}>
                                <Input
                                    id="availabilityDate"
                                    w={['45%','45%','25%']}
                                    type="date" textAlign="center"
                                    variant='form' mr="2vw"
                                    {...register("weekdaysFrom")}
                                /><Text fontWeight="500">From</Text>
                                <Input
                                    id="availabilityFrom"
                                    w={['45%','45%','25%']}
                                    type="time" textAlign="center"
                                    variant='form' ml="1vw" mr="2vw"
                                    {...register("weekdaysFrom")}
                                /><Text fontWeight="500">To</Text>
                                <Input
                                    id="availabilityTo"
                                    w={['45%','45%','25%']}
                                    type="time" textAlign="center"
                                    variant='form' ml="1vw"
                                    {...register("weekdaysTo")}
                                /> 
                                </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex align="center" justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Amount to Pay</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                        <Flex justify="flex-start" align="center">
                        <Input
                            id="headline"
                            w={['75%','75%','10%']}
                            placeholder="100"
                            type="number" textAlign="center"
                            variant='form'
                            {...register("pricing")}
                        />
                        <Text variant="profile" fontWeight="regular" ml="0.5vw">Rs</Text>
                        </Flex>
                        </Box>
                    </Flex>
                    <Button type="submit" isLoading={isSubmitting} mt="2vh" fontWeight="normal">Confirm Session</Button>
                </FormControl>
            </form>
        </Box>
    );
}