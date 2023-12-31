import React,{useState,useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Loading from './Components/Loading/Loading';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Pagenot from './Components/Pagenot/Pagenot';
import Login from './Components/Login/Login';
import Signout from './Components/Signout/Signout';
import Addhouse from './Components/Addhouse/Addhouse';
import Searchhouse from './Components/Searchhouse/Searchhouse';
import Userprofile from './Components/Userprofile/Userprofile';


import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';

function App() {
  const [displayname,setdisplayname] = useState(true);
  const [userdetl,setuserdetl] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setdisplayname(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  },[]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuserdetl(user);
    } else {
     setuserdetl(user);
    }
  });

  const scrollabout=useRef(null);
  const scrollcontact=useRef(null);
  const scrollmoreabout = useRef(null);

  function handlescroll(eprop){
    if(eprop==='cabout'){
      scrollabout.current.scrollIntoView({behavior:'smooth',block:'start'});
    }else if(eprop==='ccontactus'){
      scrollcontact.current.scrollIntoView({behavior:'smooth',block:'start'});
    }
    else if(eprop==='cmoreabout'){
      scrollmoreabout.current.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }

  return (
   <>
   {displayname?<Loading/>:
   <BrowserRouter>
   <Navbar userdetl={userdetl} handlescroll={handlescroll}/>
      <Routes>
        <Route path='/' element={<Homepage userdetl={userdetl} scrollabout={scrollabout} scrollcontact={scrollcontact} scrollmoreabout={scrollmoreabout} handlescroll={handlescroll}/>}/>
        <Route path={userdetl?'/Notfound':'/signin'} element={<Login/>}/>
        <Route path={userdetl?'/Notfound':'/signup'} element={<Signout/>}/>
        <Route path='/addhouse' element={<Addhouse/>}/>
        <Route path={userdetl?'/searchhouse':'/Notfound'} element={<Searchhouse/>}/>
        <Route path={userdetl?'/userprofile':'/Notfound'} element={<Userprofile/>}/>
        <Route path='*' element={<Pagenot/>}/>
      </Routes>
        
   </BrowserRouter>
   }
   </>
  );
}

export default App;
