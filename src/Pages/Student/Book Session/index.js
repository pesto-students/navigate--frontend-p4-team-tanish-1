import { Flex, Box, Button, useToast, FormControl } from "@chakra-ui/react";
import Navbar from "../../../Components/Student/Sidebar/Navbar.js";
import Sidebar from "../../../Components/Student/Sidebar/sidebar.js";
import BookSession from "../../../Components/Book Session/booking.js"
import Hero from "../../../Components/hero.js";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getAlumni } from "../../../API.js";
import { axiosPostRequest } from "../../../apiHelper.js";
import { useSelector } from "react-redux";

async function bookSession(values, alumniDetails, id, helpers) {
    const {navigate, toast} = helpers;
    const body = {
        studentID: id,
        alumniID: alumniDetails._id,
        topic: values.topic,
        agenda: values.agenda,
        date: values.date,
        from: values.from,
        to: values.to,
        amount: 100
    }
    console.log(body);
    axiosPostRequest('/booking/create', body);
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
    const params = useParams();
    const alumniID = params['id']
    const [alumniDetails, setalumniDetails] = useState({})
    useEffect(() => {
        async function fetchAlumni(){
            const response = await getAlumni(alumniID)
            console.log(response);
            setalumniDetails(response['data'])
        } fetchAlumni();
    }, [])

    const {name, _id} = useSelector((state) => state.user.userData);
    const toast = useToast();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    return (
        <Flex direction={["column", "column", "row"]}>
            <Sidebar/>
            <Box bg="default-bg" w={["100%", "100%", "80%"]}>
                <Navbar />
                <Hero fullName={name}/>
                
                <Box pt="16vh">
                <form onSubmit={handleSubmit((values) => bookSession(values, alumniDetails, _id, {navigate, toast}))}>
                    <FormControl p="2vw" w="100%" mb="5em">
                        <BookSession data={alumniDetails} register={register} />            
                        <Button type="submit" isLoading={isSubmitting} mt="2vh" fontWeight="normal">Confirm Session</Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}