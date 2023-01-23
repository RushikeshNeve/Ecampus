import React,{useState} from 'react';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Tables from "./components/Tables";
import SampleForm from "./components/SampleForm";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let flag  = false;
  const url = "http://localhost:8000/register";
  const [user, setUser] = useState({});

  return (
    <Router>
    <div>
      <Switch>
        <Route exact path  = "/" >
          {
             user ? user.name === "admin" && user.password === "admin" ? <Navbar /> : user._id ? <Signup />: <SampleForm /> : <Signup/>
          }
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
