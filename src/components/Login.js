import React,{useState} from 'react';
import axios from "axios"
import './login.css'
import { useHistory } from 'react-router-dom';

function Login({setUser}){
   const history  = useHistory();

   const url = "http://localhost:8000/login";
   const [data, setData ] = useState({
      uname:'',
      pass:'',
      role:'',
   });

   const handleChange = (e) => {
      const newData = {...data};
      newData[e.target.name] = e.target.value;
      setData(newData);
      
      console.log(newData);

   }

   async function handleSubmit(e) {
      e.preventDefault();
      try{
         const res = await axios.post(url, data);
         console.log(res.data);
         setUser(data);
         history.push('/');

      }catch(e){
         console.log(e);
      }
      

      
   }






    return(
    <>        
        <div className="login" >
         <form className="form" name="myForm" onSubmit = {handleSubmit}>
            <h3> LogIn </h3>
            <hr/>
            <div className="icontainer"><span className="fa fa-user icon"></span>
               <input type="text" name = "uname" placeholder="Enter Username" onChange = {handleChange}/>
            </div>
            <div className="icontainer"><span className="fa fa-lock icon"></span>
               
               <input type="password" name  = "pass" placeholder="Enter password" className="cp" onChange = {handleChange} />
            </div>
            
                <select className = "select" name  = "role" onChange = {handleChange}>
                <option selected>Select Role ....</option>
                <option value="Admin">Teacher</option>
                <option value="Student">Student</option>
    
                </select>
           
            <hr/>
            
            <button className="btnedesign" >LogIn</button>
            <div>or</div>
            <button className="btnedesign" >Register</button>
         </form>
         </div>
        
    </>)
}
export default Login;