import { createContext, useContext, useState } from "react";

//1. create a contexxt
export const AuthContext = createContext()

export const useAuth= () => useContext(AuthContext)

//2. share the created context with other comp

export default function AuthProvider({children}){
    
    //3.put some state in context

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password){
        if(username === 'in28minutes' && password=== 'dummy'){
            setAuthenticated(true)
            return true
        }else{
            setAuthenticated(false)
            return false        
        }
    } 

    function logout(){
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}