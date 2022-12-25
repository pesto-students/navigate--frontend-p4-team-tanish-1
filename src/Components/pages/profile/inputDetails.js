import { useForm } from "react-hook-form";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Icon,
    Button
} from "@chakra-ui/react";
import { FaSave, FaTimesCircle } from 'react-icons/fa/index.js';
import { MultiSelect, useMultiSelect } from 'chakra-multiselect'

const InterestMultiSelect = () => {
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
function updateUserDetails() {
    console.log("Updating user details");
}

export default function InputForm() {
    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    return (
        <Box pt="16vh" ml="5vw">
            <form onSubmit={handleSubmit(updateUserDetails)}>
                <FormControl w={["100%", "100%", "80%"]} mb="5em">
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Headline</FormLabel>
                        <Input
                            id="headline"
                            w={['85%','85%','75%']}
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
                            w={['85%','85%','75%']}
                            placeholder="Graduate from stanford university"
                            type="text"
                            mb = "2vh"
                            variant='form'
                            {...register("email")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Work Experience</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Organization</FormLabel>
                                <Input
                                    id="organization"
                                    w={['85%','85%','75%']}
                                    placeholder="Organization name"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Role</FormLabel>
                                <Input
                                    id="role"
                                    w={['85%','85%','75%']}
                                    placeholder="Your Role"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Work Summary</FormLabel>
                                <Textarea
                                    id="summary"
                                    w={['85%','85%','75%']}
                                    placeholder="What do you do?"
                                    type="text"
                                    mb = "2vh"
                                    variant='form'
                                    {...register("email")}
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
                                    w={['85%','85%','75%']}
                                    placeholder="Institution name"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Course</FormLabel>
                                <Input
                                    id="course"
                                    w={['85%','85%','75%']}
                                    placeholder="Course name"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Availability</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="flex-start" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile" fontWeight="regular" w="180px" mr="2vw">Monday to Friday</FormLabel>
                                <Input
                                    id="weekdays"
                                    w={['85%','85%','25%']}
                                    placeholder="7:00 PM - 9:00 PM"
                                    type="time" textAlign="center"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="flex-start" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile" fontWeight="regular" w="180px" mr="2vw">Saturday and Sunday</FormLabel>
                                <Input
                                    id="weekends"
                                    w={['85%','85%','25%']}
                                    placeholder="7:00 PM - 9:00 PM"
                                    type="time" textAlign="center"
                                    variant='form'
                                /> 
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex justify="space-between" align="baseline" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Area of Interest</FormLabel>
                        <InterestMultiSelect/>
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile" color="secondary">Pricing</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                        <Flex justify="flex-start" align="center">
                        <Input
                            id="headline"
                            w={['75%','75%','10%']}
                            placeholder="150"
                            type="number" textAlign="center"
                            variant='form'
                            {...register("headline")}
                        />
                        <FormLabel variant="profile" fontWeight="regular" ml="0.5vw">Rs per hour</FormLabel>
                        </Flex>
                        </Box>
                    </Flex>
                        <Button variant="edit"><Icon as={FaSave} variant="profile"/>Save</Button>
                        <Button variant="edit"><Icon as={FaTimesCircle} variant="profile"/>Cancel</Button>
                </FormControl>
            </form>
        </Box>
    );
}