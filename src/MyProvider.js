import React, { useCallback, useEffect, useState } from 'react';
import MyContext from './MyContext';
import { db } from './Firebase';
import { getDocs,doc,collection,getDoc } from 'firebase/firestore';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
const MyProvider= ({children}) => {

    const [userprofile,setuserprofile] = useState({});

    const [uuid,setuuid] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setuuid(uid);
        } else {
          console.log("please login");
        }
      });

    const getprofiledoc = useCallback(async (proId) =>{
        try{
            const docRef = doc(db,'usersinfo',`${uuid}`,'personalinfo',`${proId}`);
            const docsnap = await getDoc(docRef);
            if(docsnap.exists()){
                const documentData = docsnap.data();
                console.log(proId);
                return {proId,...documentData};
            }else{
                console.log('addcart document not fount');
                return null;
            }
        }catch(e){
            console.log('sorry sir error agaya',e);
            return null;
        }
    },[uuid]);

    const helloprofiler = useCallback(async() => {
        try{
            const querySnapshot = await getDocs(collection(db,'usersinfo',`${uuid}`,'personalinfo'));
            const promises = querySnapshot.docs.map((doc)=>{
                const docId = doc.id;
                return getprofiledoc(docId);
            });
            const data = await Promise.all(promises);
            
            setuserprofile(data.filter((item)=>item!==null));

        }catch(e){
            console.error('error',e);
        }
    },[getprofiledoc,uuid]);

    useEffect(()=>{
            helloprofiler();
    },[helloprofiler]);
    

    return <MyContext.Provider value={{userprofile:userprofile,
        uuid:uuid}}>{children}</MyContext.Provider>;
}
export default MyProvider;