import { createContext,  useEffect,  useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext= createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)
    const provider = new GoogleAuthProvider();
    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn=()=>{
        setLoading(true)
       return signInWithPopup(auth, provider)

    }
    useEffect(()=>{
      const unSubscrive=  onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state change',currentUser)
            setUser(currentUser);
            setLoading(false)

        })
        return()=>{
            unSubscrive()
        }
        
    },[])
    
   const authInfo={
    
    user,createUser,signIn,googleSignIn,logout,loading
   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;