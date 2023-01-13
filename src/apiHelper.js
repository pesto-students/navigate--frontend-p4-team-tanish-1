import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});

let accessToken = localStorage.getItem("access");

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
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}