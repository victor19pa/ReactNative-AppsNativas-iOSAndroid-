import React, { createContext, useReducer } from "react";
import { lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  const [theme, dispatch] = useReducer(themeReducer, lightTheme) // TODO initial state

  const setDarkTheme = () => {
    console.log('set dark theme');

  }
  const setLightTheme = () => {
    dispatch({
      type: 'light_theme'
    })
    console.log('set light theme');

  }
  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}