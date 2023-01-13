import { axiosGetRequest } from "./apiHelper.js";

async function getStudent(studentID){
    try{
        const response = await axiosGetRequest(`/student/get/${studentID}`)
        return response['data']
    }
    catch(error){
        console.log(error);
    }
}

export {getStudent}