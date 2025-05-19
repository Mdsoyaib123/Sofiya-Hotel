/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from './../../config/firebase.config';
import axios from "axios";

export const auth= getAuth(app)
const GoogleProvider  = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
    }
    const signInGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,GithubProvider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unSubsCribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                const loggedUser = {email:currentUser.email}
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
        })
        return ()=>{
            return unSubsCribe();
        }
    },[])


    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        signInGoogle,
        signInGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;