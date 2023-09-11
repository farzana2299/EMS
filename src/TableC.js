import React from 'react'
import BASE_URL from './service/base_url'
import { Link } from 'react-router-dom'


function TableC({ employees,removeEmp }) {
  return (
    <div>
      <table class="table w-75" style={{ position: 'relative', left: '150px',backgroundColor: 'lightgreen' }}>
        <thead>
          <tr>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>NO</th>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>NAME</th>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>EMAIL</th>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>MOBILE NUMBER</th>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>STATUS</th>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>PROFILE</th>
            <th scope="col" style={{fontSize:'25px',color:'darkblue'}}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            employees?.length>0?employees.map((i, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{i.fname + " " + i.lname}</td>
                <td>{i.email}</td>
                <td>{i.mobile}</td>
                <td><button type="button" class="btn btn-info">Active</button></td>
                <td><img style={{ width: '50px', height: '50px' }} src={`${BASE_URL}/uploads/${i.profile}`} alt="" /></td>
                <td>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-layer-group fa-2x" style={{ color: 'black' }}></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to={`/view/${i._id}`}>
                        <li><a class="dropdown-item"><i class="fa-regular fa-eye fa-2x"></i><b> VIEW</b></a></li>
                      </Link>
                      <Link to={`/edit/${i._id}`}>
                        <li><a class="dropdown-item"><i class="fa-solid fa-user-pen fa-2x"></i><b>EDIT</b></a></li>
                      </Link>
                      <li><div onClick={()=>removeEmp(i._id)} class="dropdown-item" href="#"><i class="fa-solid fa-trash-can fa-2x"></i><b>DELETE</b></div></li>
                    </ul>
                  </li>
                </td>
              </tr>
            )) : "No Employees Present"
          }

        </tbody>
      </table>
    </div>
  )
}

export default TableC