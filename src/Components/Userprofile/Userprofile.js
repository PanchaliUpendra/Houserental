import React, { useContext } from 'react';
import './Userprofile.css';
import MyContext from '../../MyContext';
import profileimg from '../../images/profileimg.png'

function Userprofile(){
    const sharedvalues = useContext(MyContext);
  return (
    <div className='userprofile-container'>
      {sharedvalues.userprofile.map((product)=>{
        return(
            <div key={product.proId} className='userprofile-con-div'>
                <img src={profileimg} alt="profileimg" className='userprofile-image'/>
                <div className='userprofile-each-div'>
                    <h2>Full Name:</h2>
                    <p>{product.firstname} {product.lastname}</p>
                </div>
                <div className='userprofile-each-div'>
                    <h2>Gmail:</h2>
                    <p>{product.gmail}</p>
                </div>
                <div className='userprofile-each-div'>
                    <h2>Pin Code:</h2>
                    <p>{product.pincode}</p>
                </div>
                <div className='userprofile-each-div'>
                    <h2>Number:</h2>
                    <p>{product.phonenumber}</p>
                </div>
                <div className='userprofile-each-div'>
                    <h2>Address:</h2>
                    <p>{product.address}</p>
                </div>

            </div>
        )
      })}
    </div>
  );
}

export default Userprofile;