import React, { useState } from 'react'
import './emp.css'

function Employe() {
const [update,setUpdate]=useState({
    name:"",
    employee_id:"",
    company:"",
    salary:""
})
const [employeeDet]=useState([{name:"sravankumar",employee_id:"23838",company:"cognizant",salary:"10000"},{name:"sravankumar",employee_id:"23838",company:"cognizant",salary:"10000"},{name:"sravankumar",employee_id:"23838",company:"cognizant",salary:"10000"},{name:"sravankumar",employee_id:"23838",company:"cognizant",salary:"10000"},{name:"sravankumar",employee_id:"23838",company:"cognizant",salary:"10000"}])
const handleChange=(e)=>{
console.log(e.target.value)
}
  return (
    <div className="table-wrapper">
    <table className="table">
        <thead>
          <tr>
            <th className='expand'>Name</th>
            <th>ID</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeDet.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.employee_id}</td>
              <td>{employee.company}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Add</button>
    </div>
  )
}

export default Employe