import React, { createContext } from "react";

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