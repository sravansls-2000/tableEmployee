import React, { useState } from 'react'
import './modal.css'
import { useNavigate } from 'react-router'

export function Modal({closeModal,addNote,DeletedNote}) {
    const navigate =useNavigate()
    const [formValues,setFormValues] = useState({
    name:"",
    employee_Id:"",
    company:"",
    salary:""
    })

    const handleChange = (e) => {
      const { value ,name } = e.target;
      setFormValues(previousValue=>{
        return {...previousValue,[name]:value}
      });
      console.log(formValues)
    };
    

    const handleClick = (e) => {
           e.preventDefault();
       addNote(formValues)
          setFormValues({
        name:"",
        employee_id:"",
        company:"",
        salary:""
        })
        closeModal()
     
    };

  return (
    <div className="modal-container"    
    onClick={(e) => {
      if (e.target.className === "modal-container") closeModal();
    }}>
    <div className="modal">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} name="name" value={formValues.name} />
        </div>
        <div className="form-group">
          <label htmlFor="employee_Id">Id</label>
          <input  onChange={handleChange} name="employee_Id" value={formValues.employee_Id} />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input onChange={handleChange} name="company" value={formValues.company} />
        </div>
        <div className="form-group">
          <label htmlFor="salary">salary</label>
          <input onChange={handleChange} name="salary" value={formValues.salary} />
        </div>
     
      <button type="submit" className="btn" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

