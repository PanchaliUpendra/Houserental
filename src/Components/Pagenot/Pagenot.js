import React from "react";
import './Pagenot.css';
import fzf from '../../images/fo4page.PNG';
function Pagenot(){
    return(
        <>
        <div className="pagenot-container">
            <h1>Page not Found</h1>
            <img src={fzf} className="fourzerofour-img" alt='fzf'/>
            <button>Go Back</button>
        </div>
        </>
    );
}

export default Pagenot;