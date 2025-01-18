import { createContext, useContext, useState } from "react";

//1. create a contexxt
export const AuthContext = createContext()

export const useAuth= () => useContext(AuthContext)

//2. share the created context with other comp

export default function AuthProvider({children}){
    
    //put some state in context
    const [number, setNumber ] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    return(
        <AuthContext.Provider value={ {number, isAuthenticated, setAuthenticated} }>
            {children}
        </AuthContext.Provider>
    )
}