import React, { useState } from 'react';
import './authentication.css';
import axios from 'axios';
const Signin = () => {
    const [emailid, setEmailid] = useState('');
    const [password, setPassword] = useState('');
    let res = "";
    
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            "email": emailid,
            "password": password
        }
        axios.post("http://localhost:8080/users/signin", data)
            .then(response => {
                localStorage.setItem('token',response.data);
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="form-container">
                <form className="form" onSubmit={(e) => submitHandler(e)}>
                    <label> Email id </label>
                    <input
                        type="email"
                        className="field"
                        value={emailid}
                        onChange={(e) => { setEmailid(e.target.value); }}
                    />
                    <br />
                    <label> Password </label>
                    <input
                        type="password"
                        className="field"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                    /><br />
                    <input type="submit" className="sub-btn" value="submit" />
                </form>
                <h3>{res}</h3>
            </div>
        </div>
    )
}
export default Signin;
