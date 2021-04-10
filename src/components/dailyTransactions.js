import React,{ useState,useEffect } from 'react';
import axios from 'axios'; 

const DailyTransaction = () =>{
    const [expense, setExpense] = useState([]);
    const [income, setIncome] = useState([]);
    useEffect(() =>{
        getTransactions();
    },[])
    const getTransactions = () =>{
        axios.get('http://localhost:8080/transactions/dailytransactions',{
            headers:{'auth-token':localStorage.getItem('token')
            }
        })
        .then(res =>{
            setExpense(res.data.expenses);
            setIncome(res.data.income);
        })
            .catch(error =>{
                console.log(error);
            })
        
    }
    return(
        <div>
            <h1>DailyTransaction</h1>
        </div>
    );
}

export default DailyTransaction;