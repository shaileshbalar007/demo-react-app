import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetchAllStudents();
  },[]);

  const fetchAllStudents= async ()=>{
    try{
      const res=await axios.get("https://mysql-node-api-anm7.onrender.com/getstudents");
   
      // const res=await axios.get("https://demo-react-app-8e694232037e.herokuapp.com/getstudents");
      setData(res.data);
    }catch(err){
      console.log(err);
    }
}
  return (
    <div className="App">
      <header className="App-header">
          <table>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>City</th>
              </tr>
         
          {
            data.map((item)=>
              <tr>
                  <td>{item.id}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
              </tr>
            )
          }
           </table>
      </header>
    </div>
  );
}

export default App;
