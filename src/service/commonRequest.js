//creating a common structure for all api requei
import axios from "axios"
export const commonRequest=async (method,url,body,header)=>{
    let config={
        method,
        url,
        headers:header?header:"application/json",
        data:body
    }
return axios(config).then(response=>{
    console.log(response);
    return response
}).catch (err=>{
    console.log(err);
    return err
})
}

//file type
//body-form data - headers   content-type:multipart/formData

//no file type  data in api
      //         -headers   application/json