import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();

const useFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth=getAuth();

  const [user,setUser] = useState({});
  const [error,setError]=useState('');
  const [isLoding,setLoding]=useState(true);



    const signInUsingGoogle=()=>{
        setLoding(true);

      return  signInWithPopup(auth,googleProvider)
        
    }


    const logOut=()=>{

        setLoding(true);
        signOut(auth).then(()=>{
            setUser({});

        }).finally(()=>{setLoding(false)})
        
        // .catch(error=>{
        //     setError(error.massage);
        // })
    }


    useEffect(()=>{

        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);

            }else{
                setUser({})
        }
        setLoding(false);
            
        })


    },[auth]);


    // console.log(user);

    return {
        user,error,signInUsingGoogle,logOut,isLoding,setError
    
    };


}

export default useFirebase;