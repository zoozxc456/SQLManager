import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Input } from 'reactstrap';
function Register(props) {
    const [user, setUser] = useState([null, null]);
    const RegisterService = () => {
        const account = document.getElementById('Login_Acc').value;
        const password = document.getElementById('Login_Pwd').value;

        if (verifyLoginData(account, password)) {
            setUser([account, password]);
        }else{
            alert('Format Error')
        }
    }


    useEffect(() => {

        const fetchData=async()=>{
            try{
                const res = await axios.post('http://localhost:39780/user/login',null);
                // console.log(res);
            }catch(exception){
                alert('Account OR Password Incorrect')
            } 
        }
       
        if (user[0] !== null) fetchData();
    }, [user])

    const verifyLoginData = (account, password) => {
        /*
            Account : Length>=8 
            Password : Length>=8 , include Letter and Number
        */
        if (account.length < 8 || password.length < 8) return false;

        // Regex Expression
        const patten = /^(?=.*\d)(?=.*[A-Za-z]).{8,15}$/;
        if (!patten.test(password)) return false;
        else return true;
    }

    return (
        <Container fluid>
            <div>Register Page</div>
            <Input type={'text'}/>
            <div>Account<input type='text' id='Register_Acc' placeholder='' /></div>
            <div>Password<input type='password' id='Register_Pwd' /></div>
            <div>Username<input type='text' id='Register_Uname' /></div>
            <div>E-mail<input type='email' id='Register_Email' /></div>
            <div><Button onClick={RegisterService}>Register !!</Button></div>
        </Container>
    )
}

export default Register;