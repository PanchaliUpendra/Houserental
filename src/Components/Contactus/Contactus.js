import React, { useState } from 'react';
import './Contactus.css';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../Firebase';
const Contactus = (props) => {
   
  const[contactform,setcontactform]=useState({
    gmail:'',
    phonenumber:'',
    messages:''
  })

  async function handlesubmitcontact(){
    try{
      if(props.userdetl){
        const docRef = await addDoc(collection(db, "contactus"), contactform);
        alert("you form sucessfully comnpleted, please check your mail after two days ", docRef.id);
        
      }else{
        alert("sorry please login")
      }
    }catch{
      console.log("error occurs")
    }
    
   
  }

  return (
    <>
    <div className="contactus-container" ref={props.scrollcontact}>
        <div className="contactsus-inner-container-part1">
            <h1>About Contact Us</h1>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing 
            elit. Aliquam dolore quasi excepturi in eaque velit 
            doloremque iusto consectetur deserunt atque. Aut saepe v
            eniam vero architecto eos nobis minus asperiores
            dignissimos.
            </p>
        </div>
        <div className="contactus-inner-container">
        <input type="text" placeholder='enter gmail' onChange={(e)=>setcontactform({...contactform,gmail:e.target.value})}  name="gmail" />
        <input type="text" placeholder='enter phonenumber' onChange={(e)=>setcontactform({...contactform,phonenumber:e.target.value})} name="phonenum" />
        <textarea cols="30" rows="10" placeholder='Enter message' onChange={(e)=>setcontactform({...contactform,messages:e.target.value})} name="message"></textarea>
        <button onClick={()=>handlesubmitcontact()}>send</button>
        </div>
    </div>
    </>
  )
}

export default Contactus