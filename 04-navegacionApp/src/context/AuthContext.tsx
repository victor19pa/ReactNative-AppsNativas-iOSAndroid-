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
  username: '',
  favoriteIcon: '',
}

//lo usaremos para decirle a react como luce y que exporta el context
export interface AuthContextProps {
  authState: AuthState;
  signIn(): () => void;
}

//crear context
export const AuthContext = createContext({} as AuthContextProps)

//compoente proveedor del estado
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