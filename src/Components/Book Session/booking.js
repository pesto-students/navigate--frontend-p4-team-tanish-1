import {
    Flex,
    Box,
    FormLabel,
    Input,
    Textarea,
    Text,
    useToast,
} from "@chakra-ui/react";
import { SelectTime } from "../EditProfile/pricingAvailability";
import { useEffect, useState } from "react";
import { axiosPostRequest } from "../../apiHelper";
import { useNavigate } from "react-router";

export default function Booking({ register, data, dateSelector }) {
    const [selectedDate, setSelectedDate] = dateSelector;
    const [startOptions, setStartOptions] = useState();
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        async function getOptions(){
            const body = {
                alumniID: data._id,
                date: selectedDate
            }
            const response = await axiosPostRequest('/booking/slots', body)
            if(response.status === 401){
                navigate('/signout')
                return toast({
                    title : "Session Timeout",
                    description: "Session expired please login again",
                    variant: "top-accent",
                    status: "info",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            }
            setStartOptions(response['data']['data']['from'])
        }
        getOptions();
    }, [selectedDate, data._id])

    return (<>
        <Flex justify="space-between" alignItems={"center"} direction={["column", "column", "row"]}>
            <FormLabel variant="profile" color="secondary">Topic of Discussion</FormLabel>
            <Input
                required
                id="topic"
                w={['90%', '90%', '75%']}
                placeholder="Topic"
                type="text"
                variant='form'
                {...register("topic")}
            />
        </Flex>
        <Flex justify="space-between" alignItems={"center"} direction={["column", "column", "row"]}>
            <FormLabel variant="profile" color="secondary">Agenda</FormLabel>
            <Textarea
                required
                id="agenda"
                w={['90%', '90%', '75%']}
                placeholder="What's on your mind?"
                type="text"
                mb="2vh"
                variant='form'
                {...register("agenda")}
            />
        </Flex>
        <Flex justify="space-between" alignItems={"center"} direction={["column", "column", "row"]}>
            <FormLabel variant="profile" color="secondary">Date</FormLabel>
            <Box w={["100%", "100%", "75%"]}>
                <Flex justify="space-between" alignItems="center" direction={["column", "column", "row"]}>
                    <Box w={["100%", "100%", "75%"]}>
                        <Flex justify="flex-start" align="center" direction={["column", "column", "row"]}>
                            <Input required
                                color={"primary"}
                                id="availabilityDate"
                                width={["30%"]}
                                minWidth='fit-content'
                                type="date" textAlign="center"
                                variant='form' mr="2vw"
                                {...register("date")}
                                value={selectedDate}
                                onChange={(e) => {setSelectedDate(e.target.value)}}
                            /><Text fontWeight="500" m={"2vw"}>From</Text>
                            <SelectTime m={"2vw"} defaultValue={data.weekdaysFrom} register={register} id={"from"} options={startOptions}/>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        <Flex align="center" alignItems={"center"} justify="space-between" direction={["column", "column", "row"]}>
            <FormLabel variant="profile" color="secondary">Pay</FormLabel>
            <Box w={["100%", "100%", "75%"]}>
                <Flex justify="flex-start" align="center">
                    <Input
                        disabled
                        id="amount"
                        w={['75%', '75%', '10%']}
                        type="number" textAlign="center"
                        variant='form'
                        value={data.pricing}
                    />
                    <Text variant="profile" fontWeight="regular" ml="0.5vw">Rs</Text>
                </Flex>
            </Box>
        </Flex>
        <Text color="secondary" fontSize={"lg"}>Your session will be for 60 minutes</Text>
    </>
    );
}