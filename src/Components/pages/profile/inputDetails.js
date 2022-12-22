import { useForm } from "react-hook-form";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea
} from "@chakra-ui/react";

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
                <FormControl w={["100%", "100%", "80%"]}>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Headline</FormLabel>
                        <Input
                            id="headline"
                            w={['85%','85%','75%']}
                            placeholder="Headline"
                            type="text"
                            variant='form'
                            {...register("headline")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Your Bio</FormLabel>
                        <Textarea
                            id="email"
                            w={['85%','85%','75%']}
                            placeholder="Email"
                            type="email"
                            mb = "2vh"
                            variant='form'
                            {...register("email")}
                        />
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Work Experience</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Organization</FormLabel>
                                <Input
                                    id="headline"
                                    w={['85%','85%','75%']}
                                    placeholder="Organization"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Role</FormLabel>
                                <Input
                                    id="headline"
                                    w={['85%','85%','75%']}
                                    placeholder="Organization"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Work Summary</FormLabel>
                                <Textarea
                                    id="email"
                                    w={['85%','85%','75%']}
                                    placeholder="Email"
                                    type="email"
                                    mb = "2vh"
                                    variant='form'
                                    {...register("email")}
                                />
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Education</FormLabel>
                        <Box w={["100%","100%","75%"]}>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Institution</FormLabel>
                                <Input
                                    id="headline"
                                    w={['85%','85%','75%']}
                                    placeholder="Organization"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                            <Flex justify="space-between" direction={["column", "column", "row"]}>
                                <FormLabel variant="profile">Course</FormLabel>
                                <Input
                                    id="headline"
                                    w={['85%','85%','75%']}
                                    placeholder="Organization"
                                    type="text"
                                    variant='form'
                                /> 
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex justify="space-between" direction={["column", "column", "row"]}>
                        <FormLabel variant="profile">Area of Interest</FormLabel>
                        <Input
                            id="headline"
                            w={['85%','85%','75%']}
                            placeholder="Headline"
                            type="text"
                            variant='form'
                            {...register("headline")}
                        />
                    </Flex>
                </FormControl>
            </form>
        </Box>
    );
}
