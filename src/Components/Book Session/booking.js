import {
    Flex,
    Box,
    FormLabel,
    Input,
    Textarea,
    Text,
} from "@chakra-ui/react";
import { SelectTime } from "../EditProfile/pricingAvailability";
import { useState } from "react";
import { axiosPostRequest } from "../../apiHelper";

export default function Booking({ register, data, dateSelector }) {
    const [selectedDate, setSelectedDate] = dateSelector;
    const [startOptions, setStartOptions] = useState([]);
    const [endOptions, setendOptions] = useState([]);

    const FetchAvailableSlots = async function(date){
        await setSelectedDate(date);
        console.log(date, "this is selected");
        const body = {
            alumniID: data._id,
            date: selectedDate
        }
        const response = await axiosPostRequest('/booking/slots', body)
        console.log(response);
    }

    return (<>
        <Flex justify="space-between" direction={["column", "column", "row"]}>
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
        <Flex justify="space-between" direction={["column", "column", "row"]}>
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
        <Flex justify="space-between" direction={["column", "column", "row"]}>
            <FormLabel variant="profile" color="secondary">Availability</FormLabel>
            <Box w={["100%", "100%", "75%"]}>
                <Flex justify="space-between" align="center" direction={["column", "column", "row"]}>
                    <Box w={["100%", "100%", "75%"]}>
                        <Flex justify="flex-start" align="center" direction={["column", "column", "row"]}>
                            <Input required
                                id="availabilityDate"
                                width={["30%"]}
                                minWidth='fit-content'
                                type="date" textAlign="center"
                                variant='form' mr="2vw"
                                {...register("date")}
                                onChange={(e) => {FetchAvailableSlots(e.target.value)}}
                            /><Text fontWeight="500" m={"2vw"}>From</Text>
                            <SelectTime m={"2vw"} defaultValue={data.weekdaysFrom} register={register} id={"from"}/>
                            <Text m={"2vw"} fontWeight="500">To</Text>
                            <SelectTime m={"2vw"} defaultValue={data.weekdaysTo} register={register} id={"to"}/>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        <Flex align="center" justify="space-between" direction={["column", "column", "row"]}>
            <FormLabel variant="profile" color="secondary">Pay</FormLabel>
            <Box w={["100%", "100%", "75%"]}>
                <Flex justify="flex-start" align="center">
                    <Input
                        disabled
                        value={"100"}
                        id="headline"
                        w={['75%', '75%', '10%']}
                        type="number" textAlign="center"
                        variant='form'
                        {...register("amount")}
                    />
                    <Text variant="profile" fontWeight="regular" ml="0.5vw">Rs</Text>
                </Flex>
            </Box>
        </Flex>
    </>
    );
}