import axios from "axios";
import { getAuth } from "firebase/auth";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});

let accessToken = sessionStorage.getItem("access");

async function axiosGetRequest(path, token=accessToken){
    const response = await client.get(path, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    });
    return response
}

async function axiosPostRequest(path, body, token=accessToken){
    const data = await client.post(path, body,{
        headers: {
            Authorization : `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}