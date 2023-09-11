import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import TableC from './TableC'
import { useEffect } from 'react'
import { useState } from 'react'
import SpinnerC from './SpinnerC'
import { deleteContext, registerContext } from './employeeContext/ContextShare'
import { getAllEmployees, removeEmployee } from './service/allApis'



function Home() {
    //state to store search data
    const [search,setSearch]=useState("")

    //state to store all employees
    const [allEmployees, setAllEmployees] = useState([])

    //api to get all employees
    const getEmployees = async () => {
        const response = await getAllEmployees(search)
        setAllEmployees(response.data)
    }
    // console.log(allEmployees);

    //to get coontext
    const { registerData, setRegisterData } = useContext(registerContext)

    //context to delete
    const { deleteData, setDeleteData } = useContext(deleteContext)

    //state to handle spin
    const [showSpin, setSpin] = useState(false)

    //function to delete employee
    const deleteEmployee = async (id) => {
        const { data } = await removeEmployee(id)

        //store in delete context
        setDeleteData(data)

        //refreash the table content
        getEmployees()
    }
console.log(search);
    useEffect(() => {

        getEmployees()

        setTimeout(() => {
            setSpin(true)
        }, 1000)
    }, [search])
    //
    // console.log(showSpin);
    return (
        <div>
            {
                registerData ? <div onClose={()=>setRegisterData("")} class="alert alert-success alert-dismissible fade show w-50 container" role="alert">
                    {registerData.fname} Added Successfully
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> : ""
            }
            {
                deleteData ? <div onClose={()=>setDeleteData("")} class="alert alert-success alert-dismissible fade show w-50 container" role="alert">
                    {deleteData.fname} Deleted Successfully
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> : ""
            }
            <div class="mb-3 w-25 ms-5 mt-5">
                <input onChange={e=>setSearch(e.target.value)} type="text" placeholder='Search employee' class="form-control" id='search' />
                <button type="submit" class="btn btn-primary" style={{ position: 'relative', top: '-40px', left: '250px' }}>Search</button>
                
                <Link to={`/add`}>
                    <button type="button" class="btn btn-success" style={{ position: 'relative', top: '-40px', left: '800px' }}><i class="fa-solid fa-user-plus"></i>Add</button>
                </Link>
            </div>
            <div>
                {
                    showSpin ? <TableC employees={allEmployees} removeEmp={deleteEmployee}></TableC> : <SpinnerC></SpinnerC>
                }
            </div>


        </div>

    )
}

export default Home