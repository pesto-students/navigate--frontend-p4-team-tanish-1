import { axiosGetRequest } from "./apiHelper.js";

async function getStudent(studentID, token){
    try{
        const response = await axiosGetRequest(`/student/get/${studentID}`, token)
        return response['data']
    }
    catch(error){
        console.log(error);
    }
}

export {getStudent}