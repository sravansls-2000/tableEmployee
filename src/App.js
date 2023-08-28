import Employe from './components/Employe';
import { Routes, Route } from "react-router-dom";
import {Modal} from './components/modal';
import { useState } from 'react';



function App() {
const [modalOpen,setModalOpen] =useState(false)
const [employeeDet,setEmployeeDet]=useState([
  {name:"sravankumar",employee_Id:"23838",company:"cognizant",salary:"10000"},
  {name:"sravankumar",employee_Id:"23838",company:"cognizant",salary:"10000"},
  {name:"sravankumar",employee_Id:"23838",company:"cognizant",salary:"10000"},
  {name:"sravankumar",employee_Id:"23838",company:"cognizant",salary:"10000"},
  {name:"sravankumar",employee_Id:"23838",company:"cognizant",salary:"10000"}])

const addNote=(formValues)=>{
  console.log(formValues)
  setEmployeeDet((previousValue)=>
   {return [...previousValue,formValues]})
  
  }
  
  const DeleteItem=(id)=>{
  setEmployeeDet((prevItems) => {
    return prevItems.filter((item, index) => {
      return index !== id;
    });
  });
  }
  const EditItem=(id)=>{
    setEmployeeDet((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    }
  return (
    <div className="App">
      <Employe employeeDet={employeeDet} EditItem={EditItem}    DeleteItem={DeleteItem}/>
      <button onClick={() => setModalOpen(true)} className="addBtn">
        Add
      </button>

  {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        addNote={addNote}
     
        />
      )}
    </div>
  );
}

export default App;
