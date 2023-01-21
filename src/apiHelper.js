import axios from "axios";
import { getAuth } from "firebase/auth";
import jwtDecode from "jwt-decode";
import { Navigate, redirect } from "react-router-dom";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});

const app = getAuth()
async function getAccessToken(){
    const accessToken = await sessionStorage.getItem("accessToken")
    const data = jwtDecode(accessToken)
    const TTL = data.exp - Math.ceil(Date.now() / 1000);
    if(TTL < 0){
        redirect('/signout');
    }
    return accessToken
}

async function axiosGetRequest(path, params = {}){
    const accessToken = await getAccessToken()
    const response = await client.get(path, {
        headers: {
            Authorization : `Bearer ${accessToken}`
        },
        params: params
    });
    return response
}

async function axiosPostRequest(path, body, options = {}){
    const accessToken = await getAccessToken()
    const response = await client.post(path, body,{
        headers: {
            Authorization : `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded",
            ...options
        }
    })
    return response
}

export {axiosGetRequest, axiosPostRequest}