import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
});

async function axiosGetRequest(path){
    console.log(process.env.REACT_APP_API_HOST);
    const response = await client.get(path);
    return response
}

async function axiosPostRequest(path, body){
    console.log(process.env.REACT_APP_API_HOST);
    const data = await client.post(path, body,{
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}