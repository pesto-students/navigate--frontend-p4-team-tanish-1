import { axiosGetRequest } from "./apiHelper.js";

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

async function listAlumni(){
    try{
        const response = await axiosGetRequest(`/alumni/get/`)
        return response['data']
    }
    catch(error){
        console.log(error);
    }
}

export {getStudent, getAlumni, listAlumni}