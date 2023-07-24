/* this page is for registeration page not the signout page  */

import React,{ useState} from 'react';
import './Signout.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../Firebase';


function Signout(){

    const navigate =useNavigate();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [confpassword,setconfpassword]=useState('');

    const [userinfo,setuserinfo] = useState({
        gmail:'',
        firstname:'',
        lastname:'',
        phonenumber:'',
        address:'',
        pincode:''
    });

    function register(event){
        event.preventDefault();
        if(email!=='' && password===confpassword && password.length>=6 && email.length>=10){
            createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            
            console.log("you have successfully registered",userCredential.user.uid)
            handlesubmitcontact(userCredential.user.uid);
            navigate('/')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(" Error ",errorCode,errorMessage)
        });
        }else{
            alert("sorry please check your  credentials");
        }
        
    }
    
    async function handlesubmitcontact(useruid){
        try{
          
            const docRef = await addDoc(collection(db, "usersinfo",`${useruid}`,"personalinfo"), userinfo);
            console.log("u successfully registered",docRef.id);
          
        }catch{
          alert("error occurs")
        }
        
       
      }
    
    
    return(
        <>
        <div className='login-container'>
            <form className='login-cont-form'>
            <div className='login-cont-form-dividing-parts'>
                <div className='first-login-div-parts'>
                    <div className='login-form-divs'>
                    <label>First Name</label>
                    <input placeholder='Firstname' type='text' onChange={(e)=>setuserinfo({...userinfo,firstname:e.target.value})} value={userinfo.firstname} required/>
                    </div>
                    <div className='login-form-divs'>
                    <label>Last Name</label>
                    <input placeholder='Last Name' type='text' onChange={(e)=>setuserinfo({...userinfo,lastname:e.target.value})} value={userinfo.lastname} required/>
                    </div>
                    <div className='login-form-divs'>
                    <label>Mobile Num</label>
                    <input placeholder='Mobile Number' type='number' onChange={(e)=>setuserinfo({...userinfo,phonenumber:e.target.value})} value={userinfo.phonenumber} required/>
                    </div>
                    <div className='login-form-divs'>
                    <label>Address</label>
                    <input placeholder='Address' type='text' onChange={(e)=>setuserinfo({...userinfo,address:e.target.value})} value={userinfo.address} required/>
                    </div>
                </div>
                <div className='all-dive-login-parts'>
                    <div className='login-form-divs'>
                    <label>pincode</label>
                    <input placeholder='pincode' type='number' onChange={(e)=>setuserinfo({...userinfo,pincode:e.target.value})} value={userinfo.pincode} required/>
                    </div>
                    <div className='login-form-divs'>
                    <label>mailID</label>
                    <input placeholder='ABC@gmail.com' type='text' onChange={(e)=>{
                        setemail(e.target.value);
                        setuserinfo({...userinfo,gmail:e.target.value})}
                        } value={email} required/>
                    </div>
                    <div className='login-form-divs'>
                    <label>Password</label>
                    <input placeholder='password' type='password' onChange={(e)=>setpassword(e.target.value)} required/>
                    </div>
                    <div className='login-form-divs'>
                    <label>Confirm Password</label>
                    <input placeholder='Confirm Password' type='password' onChange={(e)=>setconfpassword(e.target.value)} required/>
                    </div>
                </div>
            </div>
                
                <div className='login-submit-btn'>
                <button onClick={(event)=>register(event)}>Register</button>
                <p>Already have an account?<span className='login-button-signup'><NavLink to='/signin'>SignIn </NavLink> </span></p>
                </div>
            </form>
        </div>
        </>
    );
}

export default Signout;