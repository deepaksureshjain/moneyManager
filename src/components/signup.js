import React,{ useState } from 'react';
import './authentication.css';
import axios from 'axios';
const Signup = () =>{
    const [username, setUsername] = useState('');
    const [emailid, setEmailid] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) =>{
        console.log("here");
        e.preventDefault();
       const data={
           "username":username,
           "email":emailid,
           "password":password
       }
        axios.post("http://localhost:8080/users/signup",data)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
		console.log("err ")
                console.log(err);
            })
           
    }

    return(
        <div className="container">
            <div className="form-container">
                <form className="form" onSubmit={(e) => submitHandler(e)}>
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="field" 
                        value={username} 
                        onChange={(e) => {setUsername(e.target.value);}} 
                    />
                    <br />
                    <label> Email id </label>
                    <input 
                        type="email" 
                        className="field" 
                        value={emailid} 
                        onChange={(e) =>{setEmailid(e.target.value);}}
                    />
                    <br />
                    <label> Password </label>
                    <input 
                        type="password" 
                        className="field" 
                        value={password}
                        onChange={(e) =>{setPassword(e.target.value);}}
                    /><br/>
                    <input type="submit" className="sub-btn" value="submit"/>
                </form>
            </div>
        </div>
    )
}
export default Signup;
