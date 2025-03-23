import React, { createContext, useContext, useEffect, useState } from "react";

const  AuthContext =createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export const AuthProvider=({children})=>{
    const [currentUser,setCurrentUser] = useState(null)
    const [userIsLoggedIn,setUserIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{

    },[])
 function Login(user){
    if(user){
        setCurrentUser(user)
        setUserIsLoggedIn(true)
        
    }
    else{
        setCurrentUser(null)
        setUserIsLoggedIn(false)
    }
    setLoading(false)
 }
    const value = {
        currentUser,
        userIsLoggedIn,
        loading
    }
    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}