import React, { useEffect, useState } from 'react'
import './View.css';
import { useParams } from 'react-router-dom';
import { getProfile } from './service/allApis';
import BASE_URL from './service/base_url';

function View() {
  const [user,setUser]=useState({})

const {id}=useParams()

const getUser=async()=>{
  const {data}=await getProfile(id)
  setUser(data)
}
console.log(user);
useEffect(()=>{
  getUser()
},[])


  return (
    <div>

    {user?<div id='d' className='container w-75 mt-5 row c'>
      <div className="col-lg-6">
        <img src={`${BASE_URL}/uploads/${user.profile}`} alt="" />
      </div>
      <div className="col-lg-6">
        <ul class="list-group">
          <li class="list-group-item c"><i class="fa-solid fa-file-signature" style={{color:'blue'}}></i><b> FULL NAME:</b><span><b>{user.fname+" "+user.lname}</b></span></li><br />
          <li class="list-group-item c"><i class="fa-solid fa-envelope" style={{color:'blue'}}></i><b>EMAIL:</b><span><b>{user.email}</b></span></li><br />
          <li class="list-group-item c"><i class="fa-solid fa-phone" style={{color:'blue'}}></i><b>MOBILE NUMBER:</b><span><b>{user.mobile}</b></span></li><br />
          <li class="list-group-item c"><i class="fa-solid fa-venus-mars" style={{color:'blue'}}></i><b>GENDER:</b><span><b>{user.gender}</b></span></li><br />
          <li class="list-group-item c"><i class="fa-brands fa-usps" style={{color:'blue'}}></i><b>CURRENT STATUS:</b><span><b>{user.status}</b></span></li><br />
          <li class="list-group-item c"><i class="fa-solid fa-location-crosshairs" style={{color:'blue'}}></i><b>LOCATION:</b><span><b>{user.location}</b></span></li><br />
        </ul>
      </div>

    </div>:"NO SUCH DATA"}
    </div>
  )
}

export default View