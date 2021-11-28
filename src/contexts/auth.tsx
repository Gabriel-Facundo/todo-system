import React, {createContext, useEffect, useState} from 'react'
import IAuthContext from 'interfaces/IAuthContext'
import type {ReactNode} from 'react'

const AuthContext = createContext({} as IAuthContext);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const logout = () => {
      localStorage.removeItem("isAuthenticated");
      setToken(false);
    }

    return (<AuthContext.Provider value={{login, token, failLogin, logout}}>
      {children}
    </AuthContext.Provider>)
}

export {AuthProvider, AuthContext}