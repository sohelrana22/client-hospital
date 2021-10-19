import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
const [user, setUser] = useState({})
const [error, setError] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    // google sign in
    function signInWithGoogle() {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        }).catch(error => {
            setError(error.message)
        })
    }

    // email and password sign in
    function signInWithEmail(e) {
        e.preventDefault();
        console.log( email, password)
        signInWithEmailAndPassword (auth, email, password)
        .then(result => {
            setUser(result.user)
        }).catch(error => {
            setError(error.message)
        })
    }


    
    // Get the currently signed-in user
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } 
          });
          return () => unsubscribe;
    },[]);

    // sign out
    function logOut () {
        signOut(auth)
        .then(() => {
          
          })
          .catch((error) => {
            setError(error.message);
          });
    }

// getEmail

function getEmail(e) {
    setEmail(e?.target?.value)
}
// getPassword

function getPassword(e) {
    setPassword(e?.target?.value)
}

    return {
        signInWithGoogle,
        signInWithEmail,
        logOut,
        getPassword,
        getEmail,
        user,
        error,
    };
};

export default useFirebase;