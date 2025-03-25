import React, { createContext, useContext, useEffect, useState } from "react";
import { logoutUser,loginUser } from "./user";
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
const login=async(credentials)=>{
    setLoading(true);
    try{
        const user =await loginUser(credentials);
        setCurrentUser(user)
        setUserIsLoggedIn(true)
    }
    catch(err){
        console.error('Login failed: ', err)
        setCurrentUser(null)
        setUserIsLoggedIn(false)
    } 
    finally{
        setLoading(false)
    }
 }
 const logout = async () => {
    setLoading(true);
    try {
        await logoutUser();
        setCurrentUser(null);
        setUserIsLoggedIn(false);
    } catch (error) {
        console.error('Logout failed:', error);
    } finally {
        setLoading(false);
    }
}
    const value = {
        currentUser,
        userIsLoggedIn,
        loading,
        logout,
        login
    }
    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}