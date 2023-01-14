import axios from "axios";
import auth from './firebase-config.js';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
});

try{
    console.log(auth.currentUser.getIdToken()
    .then(function(token){
      console.log(token);
    }))
    .catch(function(error) {
      console.log(error);
    })
}
catch(error){
    console.log(error);
}

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
            Authorization : `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}

export {axiosGetRequest, axiosPostRequest}