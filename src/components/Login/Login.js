import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, FormControl, InputGroup, Input } from 'react-bootstrap'

import './Login.css';
function Login(props) {
    const [user, setUser] = useState([null, null]);
    const LoginService = () => {
        const account = document.getElementById('Login_Acc').value;
        const password = document.getElementById('Login_Pwd').value;

        if (verifyLoginData(account, password)) {
            setUser([account, password]);
        } else {
            alert('Format Error')
        }
    }


    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.post('http://localhost:39780/user/login', null);
    //             // console.log(res);
    //         } catch (exception) {
    //             alert('Account OR Password Incorrect')
    //         }
    //     }

    //     if (user[0] !== null) fetchData();
    // }, [user])

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
        <>
        <Row>
            <Col className="Header d-flex" xl={5}>
                <div className="align-self-center w-100">
                    <div className="mb-5">
                        <div className="title">DB</div>
                        <div className="title">Manager</div>
                    </div>

                    <div className="slogan">Safety and Convenient For</div>
                    <div className="slogan">Manage DataBase</div>
                </div>

            </Col>
            <Col className="LoginForm" xl={7}>
                <div>DB</div>
                <div>Manager</div>
                <div>Safety and Convenient For Manage DataBase</div>
            </Col>
        </Row>


        <Row className="Footer my-3">

            <Col  xl={5}>Copyright © 2021 Weirdooo. All Rights Reserved</Col>
        </Row>
        </>
    )
}

export default Login;