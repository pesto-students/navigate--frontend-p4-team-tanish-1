import { axiosGetRequest, axiosPostRequest } from "./apiHelper.js";

async function getStudent(studentID){
    try{
        if(studentID===undefined || studentID === "")
            return {
                "status": "400",
                "message": "Bad Request"
            }
        const response = await axiosGetRequest(`/student/get/${studentID}`)
        return response['data']
    }
    catch(error){
        console.log(error.response.status);
        return error.response.status;
    }
}

async function getAlumni(alumniID){
    try{
        if(alumniID===undefined || alumniID==="")
            return {
                "status": "400",
                "message": "Bad Request"
            }
        const response = await axiosGetRequest(`/alumni/get/${alumniID}`)
        return response['data']
    }
    catch(error){
        console.log(error.response.status);
        return error.response.status;
    }
}

async function listAlumni(query){
    try{
        const params = {
            q: query
        }
        const response = await axiosGetRequest(`/alumni/get/`, params);
        return response['data']
    }
    catch(error){
        console.log(error.response.status);
        return error.response.status;
    }
}

async function suggestedAlumni(interest){
    try{
        const body = {
            interest: interest
        }
        const response = await axiosPostRequest(`/alumni/suggested/`, body)
        return response['data']
    }
    catch(error){
        console.log(error.response.status);
        return error.response.status;
    }
}

async function getMeetingCredential(_id, username){
    try{
        const body = {
            id: _id,
            name: username.name,
            userID: username.userID,
            image: username.image
        }
        const response = await axiosPostRequest('/meeting/join/', body)
        return response['data']
    }
    catch(error){
        console.log(error.response.status);
        return error.response.status;
    }
}

export {getStudent, getAlumni, listAlumni, suggestedAlumni, getMeetingCredential}