import { axiosGetRequest, axiosPostRequest } from "./apiHelper.js";

async function getStudent(studentID){
    try{
        if(studentID===undefined || studentID === "")
            return {
                "status": "400",
                "message": "Unauthorized access"
            }
        const response = await axiosGetRequest(`/student/get/${studentID}`)
        return response['data']
    }
    catch(error){
        console.log(error);
    }
}

async function getAlumni(alumniID){
    try{
        if(alumniID===undefined || alumniID==="")
            return {
                "status": "400",
                "message": "Unauthorized access"
            }
        const response = await axiosGetRequest(`/alumni/get/${alumniID}`)
        return response['data']
    }
    catch(error){
        console.log(error);
    }
}

async function listAlumni(query){
    try{
        const body = {
            query: query
        }
        const response = await axiosPostRequest(`/alumni/get/`, body);
        return response['data']
    }
    catch(error){
        console.log(error);
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
        console.log(error);
    }
}

async function getMeetingCredential(_id, username){
    try{
        const body = {
            id: _id,
            name: username.name,
            userID: username.userID
        }
        const response = await axiosPostRequest('/meeting/join/', body)
        return response['data']
    }
    catch(error){
        console.log(error);
    }
}

export {getStudent, getAlumni, listAlumni, suggestedAlumni, getMeetingCredential}