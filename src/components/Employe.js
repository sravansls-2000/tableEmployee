import React, { useState } from 'react'
import './emp.css'
import { useNavigate } from 'react-router'

function Employe({employeeDet,DeleteItem,EditItem}) {
    
const Navigate = useNavigate();
const deleteClick =(id)=>{

    DeleteItem(id)
}
const EditClick =(id)=>{
    
    EditItem(id)
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
              <td>
                <button >edit</button>
                <button className='delete-btn' onClick={()=>{deleteClick(index)}}>X</button>

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Employe