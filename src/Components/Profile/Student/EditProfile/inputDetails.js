import { useForm } from "react-hook-form";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Icon,
    Button,
    Text
} from "@chakra-ui/react";
import { FaSave, FaTimesCircle } from 'react-icons/fa/index.js';
import { MultiSelect, useMultiSelect } from 'chakra-multiselect'

const InterestMultiSelect = (prop) => {
    console.log(prop);
    const { value, options, onChange } = useMultiSelect({
    value: [],
    options: ["Cyber Security", "Data Science", "Entrepreneurship"]
    })

    return (
    <MultiSelect
        options={options}
        value={value}
        label='Choose or create items'
        onChange={onChange}
        create
    />
    )
}
async function updateUserDetails(values) {
    console.log(values);
    await setTimeout(()=> {
        console.log(3000)
    }, 3000)
}

export default function InputForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    
    return (
        <Box pt="16vh">
            <form onSubmit={handleSubmit(updateUserDetails)}>
                <FormControl p="2vw" w="100%" mb="5em">
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Headline</FormLabel>
                        <Input
                            id="headline"
                            w={['90%','90%','75%']}
                            placeholder="Tech Enthusiast"
                            type="text"
                            variant='form'
                            {...register("headline")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Your Bio</FormLabel>
                        <Textarea
                            id="bio"
                            w={['90%','90%','75%']}
                            placeholder="Graduate from stanford university"
                            type="text"
                            mb = "2vh"
                            variant='form'
                            {...register("bio")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Work Experience</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Organization</FormLabel>
                                <Input
                                    id="organization"
                                    w={['90%','90%','75%']}
                                    placeholder="Organization name"
                                    type="text"
                                    variant='form'
                                    {...register("workOrg")}
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Role</FormLabel>
                                <Input
                                    id="role"
                                    w={['90%','90%','75%']}
                                    placeholder="Your Role"
                                    type="text"
                                    variant='form'
                                    {...register("workRole")}
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Work Summary</FormLabel>
                                <Textarea
                                    id="summary"
                                    w={['90%','90%','75%']}
                                    placeholder="What do you do?"
                                    type="text"
                                    mb = "2vh"
                                    variant='form'
                                    {...register("workSummary")}
                                />
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Education</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Institution</FormLabel>
                                <Input
                                    id="institution"
                                    w={['90%','90%','75%']}
                                    placeholder="Institution name"
                                    type="text"
                                    variant='form'
                                    {...register("eduInstitute")}
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Course</FormLabel>
                                <Input
                                    id="course"
                                    w={['90%','90%','75%']}
                                    placeholder="Course name"
                                    type="text"
                                    variant='form'
                                    {...register("eduDegre")}
                                /> 
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Availability</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-evenly" align="center" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Weekdays</FormLabel>
                                <Input
                                    id="weekdaysFrom"
                                    w={['45%','45%','25%']}
                                    type="time" textAlign="center"
                                    variant='form'
                                    {...register("weekdaysFrom")}
                                /> to 
                                <Input
                                    id="weekdaysTo"
                                    w={['45%','45%','25%']}
                                    type="time" textAlign="center"
                                    variant='form'
                                    {...register("weekdaysTo")}
                                /> 
                            </Flex>
                            <Flex justify="space-evenly" align="center" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Weekends</FormLabel>
                                <Input
                                    id="weekendsFrom"
                                    w={['45%','45%','25%']}
                                    type="time" textAlign="center"
                                    variant='form'
                                    {...register("weekendFrom")}
                                /> to 
                                <Input
                                    id="weekdaysTo"
                                    w={['45%','45%','25%']}
                                    type="time" textAlign="center"
                                    variant='form'
                                    {...register("weekendTo")}
                                /> 
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex w={["90%", "90%", "75%"]} justify="space-between" align="baseline" mb="6px" direction={["column", "column", "row"]}>
                        <FormLabel minWidth="30%" variant="profile" color="secondary">Area of Interest</FormLabel>
                        <InterestMultiSelect />
                    </Flex>
                    <Flex align="center" justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Pricing</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                        <Flex justify="flex-start" align="center">
                        <Input
                            id="headline"
                            w={['75%','75%','10%']}
                            placeholder="150"
                            type="number" textAlign="center"
                            variant='form'
                            {...register("pricing")}
                        />
                        <Text variant="profile" fontWeight="regular" ml="0.5vw">Rs per hour</Text>
                        </Flex>
                        </Box>
                    </Flex>
                        <Button variant="edit" type="submit" isLoading={isSubmitting}><Icon as={FaSave} variant="profile"/>Save</Button>
                        <Button variant="edit"><Icon as={FaTimesCircle} variant="profile"/>Cancel</Button>
                </FormControl>
            </form>
        </Box>
    );
}