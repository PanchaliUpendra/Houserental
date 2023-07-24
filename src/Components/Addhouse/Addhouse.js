import React from 'react';
import './Addhouse.css';

function Addhouse(){
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
                            <input type='text' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Total Bedrooms</label>
                            <input type='text' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Bath Rooms</label>
                            <input type='text' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>kitchen</label>
                            <input type='text' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Hall</label>
                            <input type='text' required/>
                        </div>
                    </div>
                        
                    <div className='addhouse-form-part-2nd'>
                        <div className='addhouse-input-div'>
                            <label>Price</label>
                            <input type='text' required/>
                        </div>
                        {/* house address */}
                        <div className='addhouse-input-div'>
                            <label>state</label>
                            <input type='text' className='addhouse-input-houseform' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>district</label>
                            <input type='text' className='addhouse-input-houseform' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>Town/Village</label>
                            <input type='text' className='addhouse-input-houseform' required/>
                        </div>
                        <div className='addhouse-input-div'>
                            <label>email</label>
                            <input type='text' className='addhouse-input-houseform' required/>
                        </div>
                    </div>
                    </div> 
                    {/* detailed house address */}
                    <div className='addhouse-input-div'>
                        <textarea placeholder='write the detail address of your house'/>
                    </div>
                    <div className='addhouse-final-btn'>
                    <button className='addhouse-submit-btn'>Submit</button>
                    </div>
                    
                </form>
            </div>
            </div>
        </>
    );
}

export default Addhouse;