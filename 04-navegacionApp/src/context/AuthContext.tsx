import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//definir como luce
export interface AuthState {
  isLoggedIn: Boolean;
  username?: string;
  favoriteIcon?: string;
}

//estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
}

//lo usaremos para decirle a react como luce y que exporta el context
export interface AuthContextProps {
  authState: AuthState;
  signIn(): () => void;
}

//crear context
export const AuthContext = createContext({} as AuthContextProps)

//compoente proveedor del estado - high order component
export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({ type: 'signIn'})
  }
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => Object,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}