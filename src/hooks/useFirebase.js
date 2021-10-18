import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();

const useFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth=getAuth();

  const [user,setUser] = useState({});
  const [error,setError]=useState('');


    const signInUsingGoogle=()=>{

        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
            
        }).catch(error=>{
            setError(error.massage);

        })
    }


    const logOut=()=>{
        signOut(auth).then(()=>{
            setUser({});

        }).catch(error=>{
            setError(error.massage);
        })
    }


    useEffect(()=>{

        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);

            }
            
        })


    },[auth]);


    console.log(user);

    return {
        user,error,signInUsingGoogle,logOut
    
    };


}

export default useFirebase;