import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:4000/" 
});

async function axiosGetRequest(path){
    const response = await client.get(path);
    return response
}

async function axiosPostRequest(path, body){
    const data = await client.post(path, body,{
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}