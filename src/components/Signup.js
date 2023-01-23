import React, {useState} from 'react'
import axios from 'axios';
import Input from "./Input";
import Select from './Select';
// import './sign.css'

function Signup() {
    const url = "http://localhost:8000/register";
    const [data,setData] = useState({});
 
 const handleChange = (e) => {
    const newData =  {...data};
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
 }

async  function handleSubmit(e){
    e.preventDefault();
    try{
         const res = await axios.post(url, data);
         console.log(res.data);

      }catch(e){
         console.log(e);
      }

}


const batchData = ["First Year","Second Year","Third Year","Final Year"];
const branchData = ["Computer","Entc","Electrical","Istrumentation"];

  return (
    <div className='container border border-primary mt-5 p-8'>
       <form className="row g-3 m-2 p-2 " onSubmit = {handleSubmit} >
          <div className="col-md-6">
              <Input label = "Name" type = "text" name  = "name" onChange = {handleChange} />
          </div>
          <div className="col-md-6">
              <Input label = "Password" type = "password" name  = "password" onChange = {handleChange} />
          </div>
          <div className="col-md-6">
              <Input label = "Email" type = "text" name  = "email" onChange = {handleChange} />
          </div>
          <div className="col-md-6">
              <Input label = "Phone" type = "text" name  = "phone" onChange = {handleChange} />
          </div>
          <div className="col-12">
              <Input label = "Address" type = "text" name  = "address" onChange = {handleChange} />
          </div>
          <div className="col-md-4">
            <Select label = "Batch" name = "batch" onChange = {handleChange} data = {batchData} />
          </div>
          <div className="col-md-4">
              <Select label = "Branch" name = "branch" onChange = {handleChange} data = {branchData} />
          </div>
          <div className="col-md-4">
              <Input label = "Birth-Date" type = "date" name  = "dob" onChange = {handleChange} />
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-primary" >Sign in</button>
          </div>
      </form>
    </div>
  )
}

export default Signup