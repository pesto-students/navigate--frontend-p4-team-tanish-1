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

async function bookSession(values, alumniDetails, id, helpers) {
    const {navigate, toast} = helpers;
    const body = {
        student: id,
        alumni: alumniDetails._id,
        topic: values.topic,
        agenda: values.agenda,
        date: values.date,
        from: values.from,
        to: (parseInt(values.from.split(":")[0])+1).toString()+":00",
        amount: alumniDetails.pricing
    }
    const createResponse = await axiosPostRequest('/booking/create', body);
    const isPaymentRequired = createResponse.data.paymentRequired;

    if(isPaymentRequired){
        const orderID = createResponse.data.order.id;
        const amount = createResponse.data.data.amount;
        var options = {
            key: process.env.REACT_APP_RAZORPAY_KEY, 
            amount: amount,
            currency: "INR",
            name: "Navigate",
            description: "Payment for your session on Navigate",
            image: {logo},
            order_id: orderID,
            handler: async function callbackHandler(response){
                const body = {
                    payment_id: response.razorpay_payment_id,
                    order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    sessionID: createResponse.data.data._id
                }
                const verifyResponse = await axiosPostRequest('/payment/verify', body);
                if(verifyResponse.data.isVerified){
                    navigate('/student/session-confirm', {state: createResponse.data})
                    return toast({ 
                        title: "Booking successful",
                        description: "Your session with Alumni is scheduled",
                        status: "success",
                        variant: "top-accent",
                        duration: 5000,
                        position: "top",
                        isClosable: true,
                    })
                }
                else{
                    navigate('/error')
                }
            },
            prefill: {
                "name": "Chand",
                "email": "test.kumar@example.com",
                "contact": "9999999999"
            },
            notes: {
                "address": "Navigate Corporate Office"
            },
            theme: {
                "color": "#3B58B0"
            }
        };
        const razorPay = new window.Razorpay(options);
        razorPay.on('payment.failed', function (response){
            navigate('/error')
        });
        razorPay.open();
    }
    else{
        navigate('/student/session-confirm', {state: createResponse.data});
    }
}

export default function Booking(){
    const params = useParams();
    const alumniID = params['id']
    const todayDate = new Date().toISOString().slice(0, 10)
    const [selectedDate, setSelectedDate] = useState(todayDate)
    const [alumniDetails, setalumniDetails] = useState({})
    useEffect(() => {
        async function fetchAlumni(){
            const response = await getAlumni(alumniID)
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
                <Hero fullName={alumniDetails.name} photo={alumniDetails.image}/>
                
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