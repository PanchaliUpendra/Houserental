import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
function Login(){

    const navigate=useNavigate();

    const[usermail,setusermail]=useState('');
    const[userpassword,setuserpass]=useState('');



    function funlogin(e){
        e.preventDefault();
        if(usermail!=='' && userpassword!==''){
            signInWithEmailAndPassword(auth, usermail, userpassword)
            .then((userCredential) => {
                // Signed in 
                alert("you have successfully loggedin",userCredential);
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert("your errors are", errorCode,errorMessage);
            });
        }else{
            alert("please check your credentials");
        }
        
    }

    return(
        <>
        <div className='login-container'>
            <form className='login-cont-form'>
                <div className='login-form-divs'>
                <label>Username</label>
                <input placeholder='ABC@gmail.com' type='text' onChange={(e)=>setusermail(e.target.value)}/>
                </div>
                <div className='login-form-divs'>
                <label>Password</label>
                <input placeholder='password' type='password' onChange={(e)=>setuserpass(e.target.value)}/>
                </div>
                <div className='login-submit-btn'>
                <button onClick={(e)=>funlogin(e)}>Login</button>
                <p>Don't have an account?<span className='login-button-signup'><NavLink to='/signup'> Signup</NavLink></span></p>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;