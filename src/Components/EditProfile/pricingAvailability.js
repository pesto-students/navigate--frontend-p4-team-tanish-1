import {
    Flex,
    Box,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";

export function SelectTime({register, id, defaultValue}){
    return (
        <select required placeholder="Time" {...register(id)} defaultValue={defaultValue}>
            <option disabled>-- Time --</option>
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
        </select>
    )
}

export default function AlumniPricingEdit({data, register}) {
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
                    id="headline"
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