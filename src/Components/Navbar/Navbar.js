import React from 'react';
import './Navbar.css';
import Logoimg from '../../images/logoimg.jpg';
import { NavLink,useNavigate } from 'react-router-dom';

import { signOut } from "firebase/auth";
import { auth } from '../../Firebase';

function Navbar(props){
   
    const[resnav,setres]=React.useState(false);
    const navigate = useNavigate();
    function handlesignout(){
        signOut(auth).then(() => {
            alert("you sucessfully logged out")
            navigate('/signin')
          }).catch((error) => {
           alert("somthing is wrong occurs")
          });
    }
    function handlenavigate(events){
        if(props.userdetl){
            navigate(`${events}`);
        }else{
            alert("please login");
            navigate('/signin');
        }
    }

    function handleuseref(et){
        setTimeout(()=>{
            props.handlescroll(et)
        },1000);
    }
    return(
        <>
        
        <div className="Navbar-container">
        <NavLink to={'/'}><img src={Logoimg} alt="logo" className="navbar-logo"/></NavLink>
        <ul className="Navbar-container-ul">
            <NavLink to={'/'}> <li>Home</li> </NavLink>
            <NavLink to={'/'} onClick={()=>handleuseref('cabout')}><li >About Us</li></NavLink>
            <NavLink to={'/'} onClick={()=>handleuseref('ccontactus')}><li >Contact Us</li></NavLink>
            {/* <NavLink to={'/Addhouse'}> <li>AddHouse</li> </NavLink> */}
            <li onClick={()=>handlenavigate('/addhouse')}>AddHouse</li>
            {/* <NavLink to={'/searchhouse'}> <li>Search House</li> </NavLink> */}
            <li onClick={()=>handlenavigate('/searchhouse')}>Search House</li>
        </ul>
        <div className="Navbar-container-login-reg">
            
            <div className="Navbar-container-login-reg">
             {props.userdetl?<p className="Navbar-container-login-reg-nth-child-1" onClick={()=>handlesignout()}>Logout</p>:<NavLink to={'/signin'}><p className="Navbar-container-login-reg-nth-child-1">Login</p></NavLink>}
             {props.userdetl?<NavLink to={'/userprofile'}><p className="Navbar-container-login-reg-nth-child-2">Profile</p></NavLink>:<NavLink to={'/signup'}><p className="Navbar-container-login-reg-nth-child-2">Register</p></NavLink>}
            </div>
            

        </div>
       
        <div className={resnav===true ?"second-naverbar-ul":"second-navbar-hidden-ul"}>
        <ul className="Navbar-container-ul">
            <NavLink to={'/'} onClick={()=>{setres(!resnav)}}> <li>Home</li> </NavLink>
            <NavLink to={'/'} onClick={()=>{
                handleuseref('cabout');
                setres(!resnav);

            }}><li >About Us</li></NavLink>
            <NavLink to={'/'} onClick={()=>{
            handleuseref('ccontactus');
            setres(!resnav);
            }}><li >Contact Us</li></NavLink>
            <NavLink to={'/Addhouse'} onClick={()=>setres(!resnav)}> <li>AddHouse</li> </NavLink>
            <NavLink to={'/findhouse'} onClick={()=>setres(!resnav)}> <li>Search House</li> </NavLink>
            <ul>
                {props.userdetl?<li onClick={()=>{
                    setres(!resnav);
                    handlesignout();
                }}>Logout</li>:<NavLink  to={'/signin'} onClick={()=>setres(!resnav)}><li>Login</li></NavLink>}
                {props.userdetl?<NavLink  to={'/userprofile'} onClick={()=>setres(!resnav)}> <li>Profile</li></NavLink>:<NavLink  to={'/signup'} onClick={()=>setres(!resnav)}> <li>Register</li></NavLink>}
            </ul>
        </ul>
        </div>
        <div className="Navbar-container-login-reg-part2" >
            <label className="hamburger">
            <input type="checkbox" onClick={()=>setres(!resnav)} className={resnav?"menu":"close"}/>
            <svg viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
            </svg>
            </label>
        </div>
        </div> 
        </>
    );
}
export default Navbar;