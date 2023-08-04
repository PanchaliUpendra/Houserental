import React, { useContext, useState } from 'react';
import './Addhouse.css';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../../Firebase';
import MyContext from '../../MyContext';

function Addhouse(){
    const userdetails = useContext(MyContext);
    const [housedata,sethousedata] = useState({
        ownermobno:'',
        TotalBedrooms:'',
        BathRooms:'',
        kitchen:'',
        hall:'',
        price:'',
        state:'',
        district:'',
        village:'',
        email:'',
        detailadd:''
    });

    async function  addhousedetail(event){
        event.preventDefault();
        try{
            if(housedata!==null){
                const docRef = await addDoc(collection(db,"usersinfo", `${userdetails.uuid}`,'addhousedata'),housedata);
                  console.log("Document written with ID: ", docRef.id);
                  
                
                alert("successfully added your data");
                sethousedata({
                    ownermobno:'',
                    TotalBedrooms:'',
                    BathRooms:'',
                    kitchen:'',
                    hall:'',
                    price:'',
                    state:'',
                    district:'',
                    village:'',
                    email:'',
                    detailadd:''
                });
            }else{
                alert("please add the first")
            }
        }catch(e){
            console.log("error adding the data",`${userdetails.uuid}`);

        }
    }

    return(
        <>
            <div className='addhouse-container'>
            <div className='addhouse-header-note'>
            <h1>If you have an house to rent . please add here </h1>
            </div>
            <div className='addhouse-form-house-details'>
                <form>
                    {/* house details */}
                    <div className='house-details-all-parts'>
                    <div className='addhouse-form-part1'>
                        <div className='addhouse-input-div'>
                            <label>Owner Number</label>
                            <input  type='number' value={housedata.ownermobno} onChange={(e)=>sethousedata({...housedata, ownermobno:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Total Bedrooms</label>
                            <input type='number' value={housedata.TotalBedrooms}  onChange={(e)=>sethousedata({...housedata,TotalBedrooms:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Bath Rooms</label>
                            <input type='number' value={housedata.BathRooms} onChange={(e)=>sethousedata({...housedata,BathRooms:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>kitchen</label>
                            <input type='number' value={housedata.kitchen} onChange={(e)=>sethousedata({...housedata, kitchen:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Hall</label>
                            <input type='number' value={housedata.hall} onChange={(e)=>sethousedata({...housedata, hall:e.target.value})} required/>
                        </div>
                    </div>
                        
                    <div className='addhouse-form-part-2nd'>
                        <div className='addhouse-input-div'>
                            <label>Price</label>
                            <input type='number' placeholder='rent per month' value={housedata.price} onChange={(e)=>sethousedata({...housedata, price:e.target.value})} required/>
                        </div>
                        {/* house address */}
                        <div className='addhouse-input-div'>
                            <label>state</label>
                            <input type='text' className='addhouse-input-houseform' value={housedata.state} onChange={(e)=>sethousedata({...housedata, state:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>district</label>
                            <input type='text' className='addhouse-input-houseform' value={housedata.district} onChange={(e)=>sethousedata({...housedata,district:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Town/Village</label>
                            <input type='text' value={housedata.village} className='addhouse-input-houseform' onChange={(e)=>sethousedata({...housedata,village:e.target.value})} required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>email</label>
                            <input type='email' value={housedata.email} className='addhouse-input-houseform' onChange={(e)=>sethousedata({...housedata,email:e.target.value})} required/>
                        </div>
                    </div>
                    </div> 
                    {/* detailed house address */}
                    <div className='addhouse-input-div'>
                        <textarea value={housedata.detailadd} placeholder='write the detail address of your house' onChange={(e)=>sethousedata({...housedata,detailadd:e.target.value})}/>
                    </div>
                    <div className='addhouse-final-btn'>
                    <button className='addhouse-submit-btn' onClick={(e)=>addhousedetail(e)}>Submit</button>
                    </div>
                    
                </form>
            </div>
            </div>
        </>
    );
}

export default Addhouse;