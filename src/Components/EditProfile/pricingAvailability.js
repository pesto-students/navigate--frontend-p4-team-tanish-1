import {
    Flex,
    Box,
    FormLabel,
    Input,
    Text,
    Select
} from "@chakra-ui/react";

export function SelectTime({register, id, options, defaultValue}){
    const allTimeSlot = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00", "23:00"]
    if(options === undefined)
        options = allTimeSlot
    return (
        <Select bg={"white"} minWidth={"fit-content"} required defaultValue={defaultValue} placeholder="Time" name={id} {...register(id)}>
            {options.map((option) => {
                return (<option id={option} value={option}>{option}</option>)
            })}
        </Select>
    )
}

export default function AlumniPricingEdit({data, register}) {
    console.log(data);
    return (
        <>
            <Flex justify="space-between" direction={["column", "column", "row"]}>
                <FormLabel variant="profile" color="secondary">Availability</FormLabel>
                <Box w={["100%","100%","75%"]}>
                    <Flex justify="space-evenly" align="center" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Weekdays</FormLabel>
                        <SelectTime register={register} id={"weekdaysFrom"} defaultValue={data.weekdaysFrom}/>
                        to 
                        <SelectTime register={register} id={"weekdaysTo"} defaultValue={data.weekdaysTo}/>
                    </Flex>
                    <Flex justify="space-evenly" align="center" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Weekends</FormLabel>
                        <SelectTime register={register} id={"weekendsFrom"} defaultValue={data.weekendsFrom}/>
                        to 
                        <SelectTime register={register} id={"weekendsTo"} defaultValue={data.weekendsTo}/> 
                    </Flex>
                </Box>
            </Flex>
            <Flex align="center" justify="space-between" direction={["column", "column", "row"]}>
                <FormLabel variant="profile" color="secondary">Pricing</FormLabel>
                <Box w={["100%","100%","75%"]}>
                <Flex justify="flex-start" align="center">
                <Input
                    id="headline" required
                    w={"30%"}
                    placeholder="150"
                    type="number" textAlign="center"
                    variant='form'
                    {...register("pricing")}
                    defaultValue = {data.pricing}
                />
                <Text variant="profile" fontWeight="regular" ml="0.5vw">Rs per hour</Text>
                </Flex>
                </Box>
            </Flex>
        </>
    );
}