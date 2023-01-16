import {
    Flex,
    Box,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";

export default function AlumniPricingEdit({data, register}) {
    return (
        <>
            <Flex justify="space-between" direction={["column", "column", "row"]}>
                <FormLabel variant="profile" color="secondary">Availability</FormLabel>
                <Box w={["100%","100%","75%"]}>
                    <Flex justify="space-evenly" align="center" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Weekdays</FormLabel>
                        <Input
                            id="weekdaysFrom"
                            w={['50%','50%','30%']}
                            type="time" textAlign="center"
                            variant='form'
                            {...register("weekdaysFrom")}
                            defaultValue={data.weekdaysFrom}
                        /> to 
                        <Input
                            id="weekdaysTo"
                            w={['50%','50%','30%']}
                            type="time" textAlign="center"
                            variant='form'
                            {...register("weekdaysTo")}
                            defaultValue={data.weekdaysTo}
                        /> 
                    </Flex>
                    <Flex justify="space-evenly" align="center" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Weekends</FormLabel>
                        <Input
                            id="weekendsFrom"
                            w={['50%','50%','30%']}
                            type="time" textAlign="center"
                            variant='form'
                            {...register("weekendsFrom")}
                            defaultValue={data.weekendsFrom}
                        /> to 
                        <Input
                            id="weekdaysTo"
                            w={['50%','50%','30%']}
                            type="time" textAlign="center"
                            variant='form'
                            {...register("weekendsTo")}
                            defaultValue={data.weekendsTo}
                        /> 
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