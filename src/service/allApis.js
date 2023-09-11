
import BASE_URL from "./base_url"
import { commonRequest } from "./commonRequest"

//register
export const registerApi=async (header,body)=>{
  return await commonRequest("POST",`${BASE_URL}/employees/register`,body,header)
}

//get all employees in table
export const getAllEmployees=async(search)=>{
  return await commonRequest("GET",`${BASE_URL}/employees/getEmployees?search=${search}`,"")
  //body=""  header=default(application/json)
}
//get single employee
export const getProfile=async(id)=>{
  return await commonRequest('GET',`${BASE_URL}/employees/getEmployee/${id}`,"")
}

//delete
export const removeEmployee=async(id)=>{
  return await commonRequest('DELETE',`${BASE_URL}/employees/removeEmployee/${id}`,{})
}

//upate employee
export const editEmployee=async(id,header,body)=>{
  return await  commonRequest('PUT',`${BASE_URL}/employees/updateEmployee/${id}`,body,header)
}