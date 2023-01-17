import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_LOGOUT } from "../../../redux/userSlice";
import { signOut } from "firebase/auth";
import auth from "../../../firebase-config.js";
import { Spinner, Box } from "@chakra-ui/react";

export default function SignOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
        async function Logout() {
            await signOut(auth)
            dispatch(USER_LOGOUT());
            navigate("/")
        } Logout();
    }, []);
  
    return(
        <Box align="center" h="100vh">
            <Spinner thickness='0.5em' h="10vh" w="10vh" speed='0.65s' emptyColor='gray.200' color='primary' size='xl'/>;
        </Box>
    )
  };