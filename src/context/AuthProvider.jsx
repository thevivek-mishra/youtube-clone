import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { fetchData } from "../utlis/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [loading, setLoading] =useState(false);
    const [data, setData]= useState([]);
    const [value,setValue] =useState("new")

    useEffect(()=>{
        fetchAlldata(value)
    },[value])

    const fetchAlldata =(query)=>{
        setLoading(true);
        fetchData(`search/?=${query}`).then(res=>{
            setData(res)
            setLoading(false)
        })
    }

    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>useContext(AuthContext)