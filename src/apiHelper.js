import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});

async function axiosGetRequest(path, token){
    const response = await client.get(path, {
        headers: {
            Authorization : `Bearer ${token}`
        }        
    });
    return response
}

async function axiosPostRequest(path, body, token){
    const data = await client.post(path, body,{
        headers: { 
            Authorization : `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}