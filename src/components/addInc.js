import React, { useState } from 'react';
import axios from 'axios';
import './addIncExp.css';

const AddIncome = () => {
    const [amount, setAmount] = useState(0);
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            "amount": amount,
            "account": account,
            "category": category,
            "description": description
        }
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
        axios.post("http://localhost:8080/user/income/addincome", data, { headers: headers })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className="container">
            <div className="form-container">
                <form className="form" onSubmit={(e) => { submitHandler(e) }}>
                    <label className="amt-label">Amount</label>
                    <input
                        type="number"
                        step="any"
                        value={amount}
                        onChange={(e) => { setAmount(e.target.value) }}
                    />
                    <br />
                    <label>Account</label>
                    <input
                        type="text"
                        valaue={account}
                        onChange={(e) => { setAccount(e.target.value) }}

                    />
                    <br />
                    <label>Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => { setCategory(e.target.value) }}

                    />
                    <br />
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}

                    />
                    <br />
                    <input type="submit" value="submit" className="sub-btn" />
                </form>
            </div>
        </div>
    );
}

export default AddIncome;