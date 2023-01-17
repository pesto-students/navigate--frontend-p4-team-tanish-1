import axios from "axios";
import { getAuth } from "firebase/auth";
import jwtDecode from "jwt-decode";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});

const app = getAuth()
async function getAccessToken(){
    const accessToken = await sessionStorage.getItem("accessToken")
    const data = jwtDecode(accessToken)
    const TTL = data.exp - Math.ceil(Date.now() / 1000);
    if(TTL > 0){
        console.log("redirect to signout");
    }
    return accessToken
}

async function axiosGetRequest(path){
    const accessToken = await getAccessToken()
    const response = await client.get(path, {
        headers: {
            Authorization : `Bearer ${accessToken}`
        }
    });
    return response
}

async function axiosPostRequest(path, body){
    const accessToken = await getAccessToken()
    const data = await client.post(path, body,{
        headers: {
            Authorization : `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}