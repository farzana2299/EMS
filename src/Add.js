import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { registerApi } from './service/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { registerContext } from './employeeContext/ContextShare';

function Add() {
    //state to hold error response
    const [errorMsg, setErrorMsg] = useState("")

    //create object for use navigate
    const navigate = useNavigate()

    //to get coontext
    const { registerData, setRegisterData } = useContext(registerContext)

    //state to holid image data
    const [Image, setImage] = useState("")

    //craeet a function to store image
    const setProfile = (e) => {
        setImage(e.target.files[0]);
    }

    //state to store preview image
    const [preview, setPreview] = useState("")

    //use effect ngOninit pole work cheyyunnathaan, [image kodkkumbo eppolokke image varunno appolokke work aakum]
    useEffect(() => {
        if (Image) {
            setPreview(URL.createObjectURL(Image))
        }
    }, [Image])
    console.log(preview);

    //state to hold all input datas entered by user
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        mobile: "",
        status: "",
        location: ""

    })

    //function to update user data
    const userDetails = (e) => {
        //    let value =e.target.value
        //    let name=e.target.name;  
        let { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }
    console.log(userData);


    //create a function for submit button
    const handleSubmit = async (e) => {
        e.preventDefault()

        //header  -contentType:multipart/formData
        const headerConfig = {
            "Content-Type": "multipart/form-data"
        }

        //body form data
        const data = new FormData()
        //access dats from userData
        const { fname, lname, email, gender, mobile, status, location } = userData

        if (fname == "") {
            toast.error("First name required")
        }
        else if (lname == "") {
            toast.error("Last name required")
        }
        else if (email == "") {
            toast.error("Email required")
        }
        else if (Image == "") {
            toast.error("Image required")
        }
        else if (gender == "") {
            toast.error("Gender required")
        }
        else if (mobile == "") {
            toast.error("Mobile required")
        }
        else if (status == "") {
            toast.error("Status required")
        }
        else if (location == "") {
            toast.error("Location required")
        }
        else {
            //add datas in formData0--onjectilekk append cheyth kodkkanam.
            data.append('user_profile', Image)
            data.append('fname', fname)
            data.append('lname', lname)
            data.append('email', email)
            data.append('gender', gender)
            data.append('mobile', mobile)
            data.append('status', status)
            data.append('location', location)

            //api call 
            const response = await registerApi(headerConfig, data)
            console.log(response);
            if (response.status == 200) {
                //update context
                setRegisterData(response.data)
                //reset userdata
                setUserData({
                    ...userData,
                    fname: "",
                    lname: "",
                    email: "",
                    gender: "",
                    mobile: "",
                    status: "",
                    location: ""
                })
                setImage("")

                //redirect to home
                navigate('/')
            }
            else {

                // console.log(response.response.data);
                // setErrorMsg(response.response.data)
            }
        }


    }

    return (
        <div class="row">
            {/* alert  */}

            {
                errorMsg ? <div class="alert alert-danger w-50 container alert-dismissible" role="alert"
                    onClose={() => setErrorMsg("")}>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    {errorMsg}
                </div> : ""
            }

            <h1 style={{ color: 'darkblue', position: 'relative', top: '25px', textShadow: '2px 2px' }}>EMPLOYEE REGISTRATION</h1>
            {/* div box */}
            <form class='container w-75 p-5 mt-5' style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border: '3px', borderRadius: '10px', backgroundColor: 'lightgreen', height: '650px'
            }}>

                <img style={{ borderRadius: '110px', width: '100px', height: '100px' }} src={preview ? preview : "https://i.postimg.cc/Nfg7cDRV/download-4.png"} alt="" />
                <br />
                <div className='row'>
                    {/* first col  */}
                    <div class="col-lg-6">
                        <label htmlFor="" style={{ position: 'relative', left: '-150px', color: 'darkblue' }}><b>First Name</b> </label>
                        <input onChange={userDetails} name='fname' required type="text" placeholder='Enter your First Name' class="form-control" />
                        <br />
                        <label htmlFor="" style={{ position: 'relative', left: '-150px', color: 'darkblue' }}><b>Email</b> </label>
                        <input onChange={userDetails} name='email' required type="email" placeholder='Enter your Email' class="form-control" />
                        <br />
                        <h5 style={{ position: 'relative', left: '-150px', color: 'darkblue' }}><b> Gender</b></h5>

                        <div className='ms-3'>
                            <input type="radio" onChange={userDetails} name='gender' value={'male'} id='m' /><label class="form-label mt-2 ms-2" htmlFor='m'>Male</label>
                            <input type="radio" onChange={userDetails} name='gender' value={'female'} id='f' /><label class="form-label mt-2 ms-2" htmlFor='f'>Female</label>

                        </div>
                        <br />
                        <label htmlFor="" style={{ position: 'relative', left: '-125px', color: 'darkblue' }}><b>Choose Profile Picture</b></label>
                        <input required onChange={setProfile} type="file" class="form-control" />
                    </div>
                    <div class="col-lg-6">
                        <label htmlFor="" style={{ position: 'relative', left: '-150px', color: 'darkblue' }}><b>Last Name</b> </label>
                        <input onChange={userDetails} name='lname' required type="text" placeholder='Enter your Last Name' class="form-control" />
                        <br />
                        <label htmlFor="" style={{ position: 'relative', left: '-150px', color: 'darkblue' }}><b>Mobile Number</b> </label>
                        <input onChange={userDetails} name='mobile' required type="text" placeholder='Enter your Mobile Number' class="form-control" />
                        <br />
                        <label htmlFor="" style={{ position: 'relative', left: '-150px', color: 'darkblue' }} ><b> Employee Status</b></label>
                        {/* dropdown */}
                        <div class="dropdown">
                            {/* <button style={{ position: 'relative', left: '-150px' }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select..
                            </button> */}
                            <select onChange={userDetails} class="dropdown w-100 form-control" name='status' id='s1'>
                                <option class="dropdown-item disabled" aria-disabled='true' >select...</option>

                                <option class="dropdown-item" value={'active'} href="#">Active</option>
                                <option class="dropdown-item" value={'inactive'} href="#">Inactive </option>
                            </select>

                        </div>
                        <br /><br />
                        <label htmlFor="" style={{ position: 'relative', left: '-150px', color: 'darkblue' }}><b>Location</b> </label>
                        <input onChange={userDetails} name='location' required type="text" placeholder='Enter your Location' class="form-control" />
                        <br />
                    </div>
                </div>
                <button onClick={handleSubmit} type="submit" class="btn btn-success btn-lg"><b style={{ fontSize: '25px' }}>ADD</b>  </button>
            </form>
            <ToastContainer position="top-center" theme="light" />
            <div></div>
        </div>
    )
}

export default Add