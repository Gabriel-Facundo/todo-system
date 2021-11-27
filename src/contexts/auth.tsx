import React, {createContext, useEffect, useState} from 'react'
import ITodoContext from 'interfaces/ITodoContext'
import type {ReactNode} from 'react'

const AuthContext = createContext({} as ITodoContext);

function AuthProvider ({children}: {children: ReactNode}) {
    const [token, setToken] = useState(false);
    const [failLogin, setfailLogin] = useState('');
    
    useEffect(() => {
      if(token) {
        localStorage.setItem('isAuthenticated', JSON.stringify(token));
      }
      let isAuthenticated = (localStorage.getItem('isAuthenticated') === 'true');
      setToken(isAuthenticated);
      if(isAuthenticated) return
    }, [token])

    const login = (email: string, password: string) => {
      if(email && password){ 
        setToken(true);
        return;
      }
      setfailLogin('wronged')
      setTimeout(() => {
        setfailLogin('');
      }, 500);
    };
 
    return (<AuthContext.Provider value={{login, token, failLogin}}>
      {children}
    </AuthContext.Provider>)
}

export {AuthProvider, AuthContext}