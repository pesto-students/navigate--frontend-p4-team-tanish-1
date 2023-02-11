import {
    Flex,
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { FaVideo } from "react-icons/fa/index.js";
import { getMeetingCredential } from "../../API";
import { useNavigate } from "react-router-dom";
import { NoUpcoming } from "../NoData";
import { useSelector } from "react-redux";
import userPhoto from "../../Assets/user-placeholder.png";

async function joinMeeting(data, user, helper) {
    const {navigate} = helper;
    const { meetingID, _id } = data
    if(meetingID !== undefined & _id !== null){
        const response = await getMeetingCredential(_id, user);
        const meetingAccessToken = response.data.data.token;
        await sessionStorage.setItem("meetingToken", meetingAccessToken);
        navigate('/join')
    }
    else{
        alert("Invalid meeting ID")
        navigate('/signout')
    }
}

function UpcomingData({data, navigate}){
    const isAlumni = data.alumni.name === undefined
    const guestName = isAlumni ? data.student.name : data.alumni.name;
    const photo = isAlumni ? data.student.image : data.alumni.image;
    const userData = useSelector((state) => state.user.userData);
    const user = {userID: userData._id, name: userData.name, image: userData.image}
    const [isDisabled, setIsDisabled] = useState(true)
    useEffect(() => {
        function checkTime(){
            let current = new Date();
            let scheduled = new Date(`${data.date}T${data.from}`)
            setIsDisabled(current < scheduled)
        }
        const interval = setInterval(() => checkTime(), 5000)
        return () => {
          clearInterval(interval);
        }   
    })

    return (
        <Flex
            direction={["column", "row", "row"]}
            justifyContent="space-between"
        >
            <Flex direction="column" align="flex-start" mx="0.5em">
                <Stack mt="2" spacing="4" textAlign="left" fontSize="1.1em">
                    <Text fontSize="1.3em" fontWeight="500" color="primary">
                        Upcoming Session
                    </Text>
                    <Text fontSize="1.1em" fontWeight="500" color="secondary">
                        Join upcoming session with {guestName}
                    </Text>
                    <Text fontSize="0.9em" mb="2em">
                        <b>Agenda</b> - {data.agenda}
                    </Text>
                    <Text fontSize="0.9em" mb="2em">
                        <b>Date</b> - {data.date}<br/><b>Time</b> - {data.from}
                    </Text>
                </Stack>
                <Button
                    isDisabled={isDisabled}
                    color="secondary"
                    bg="none"
                    border="1px solid #093d65"
                    w="12em"
                    mt="1.5em"
                    mb="1em"
                    title="You can join when session starts"
                    onClick={() => joinMeeting(data, user, { navigate })}
                >
                    <Icon as={FaVideo} mr="0.7em"></Icon>Join Meeting
                </Button>
                <Text color={"red.500"} display={isDisabled ? "flex" :"none"}>You will be able to join at scheduled date and time</Text>
            </Flex>
            <Image
                src={photo !== null ? photo : userPhoto}
                my="auto"
                mx="0.5em"
                boxSize={["", "25vw", "20vh"]}
                display={["none", "flex", "flex"]}
                alt=""
                objectFit={"cover"}
                borderRadius="0.7em 0.7em 0em 0em"
            />
        </Flex>
    );
}

export default function UpcomingSession({data}) {
    const navigate = useNavigate();
    return (
        <Card
            bg="white"
            width={["100%", "100%", "100%", "70%"]}
            borderRadius="0.5em">
            <CardBody alignItems={"center"}>
                {data === undefined ? <NoUpcoming /> : <UpcomingData data={data} navigate={navigate}/>}
            </CardBody>
        </Card>
    );
}
