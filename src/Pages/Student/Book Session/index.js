import { Flex, Box, Button, useToast, FormControl } from "@chakra-ui/react";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import BookSession from "../../../Components/Book Session/booking.js"
import Hero from "../../../Components/hero.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


async function bookSession(values, navigate, toast) {
    await setTimeout(()=> {
        console.log(values);
        console.log(3000)
    }, 3000)
    navigate('/student/session-confirm');
    return (
        toast({ 
            title: "Booking successful",
            description: "Your session with James Doe is scheduled",
            status: "success",
            variant: "top-accent",
            duration: 5000,
            isClosable: true,
        })
    )
}

export default function Booking(){
    const toast = useToast();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    console.log(errors);
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero />
                
                <Box pt="16vh">
                <form onSubmit={handleSubmit((values) => bookSession(values, navigate, toast))}>
                    <FormControl p="2vw" w="100%" mb="5em">
                        <BookSession register={register} />            
                        <Button type="submit" isLoading={isSubmitting} mt="2vh" fontWeight="normal">Confirm Session</Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}