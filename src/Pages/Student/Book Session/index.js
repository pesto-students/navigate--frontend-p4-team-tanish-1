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
import logo from "../../../Assets/logos/logo-SQ.png";

async function callbackHandler(data, navigate){
    console.log(data);
    const response = await axiosPostRequest('/payment/verify', data);
    console.log(response);
    navigate('/student/session-confirm');
}

async function bookSession(values, alumniDetails, id, helpers) {
    const {navigate, toast} = helpers;
    const body = {
        student: id,
        alumni: alumniDetails._id,
        topic: values.topic,
        agenda: values.agenda,
        date: values.date,
        from: values.from,
        to: values.to,
        amount: 100
    }
    const response = await axiosPostRequest('/booking/create', body);
    const orderID = response.data.order.id
    const amount = response.data.amount
    console.log("this is orderid", orderID)
    var options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, 
        amount: amount,
        currency: "INR",
        name: "Navigate",
        description: "Make payment for you session on Navigate",
        image: {logo},
        order_id: orderID,
        handler: callbackHandler({
            order_id: response.razorpay_payment_id,
            payment_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
        }, navigate),
        prefill: {
            "name": "Chand",
            "email": "test.kumar@example.com",
            "contact": "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3B58B0"
        }
    };
    const razorPay = new window.Razorpay(options);
    razorPay.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    razorPay.open();

    // navigate('/student/session-confirm');
    return toast({ 
                title: "Booking successful",
                description: "Your session with James Doe is scheduled",
                status: "success",
                variant: "top-accent",
                duration: 5000,
                isClosable: true,
            })
}

export default function Booking(){
    const params = useParams();
    const alumniID = params['id']
    const [selectedDate, setSelectedDate] = useState()
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
                <Hero fullName={alumniDetails.name}/>
                
                <Box pt="16vh">
                <form onSubmit={handleSubmit((values) => bookSession(values, alumniDetails, _id, {navigate, toast}))}>
                    <FormControl p="2vw" w="100%" mb="5em">
                        <BookSession data={alumniDetails} register={register} dateSelector={[selectedDate, setSelectedDate]}/>            
                        <Button id="rzp-button1" type="submit" isLoading={isSubmitting} mt="2vh" fontWeight="normal">Make payment</Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}