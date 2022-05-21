import { Theme } from "@react-navigation/native"

type ThemeAction =
  | { type: 'light_theme' }
  | { type: 'dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  dividerColor: string;
}

const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: 'red',
    background: 'blue',
    card: 'green',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0,0.7)'
}
export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

  switch (action.type) {
    case 'light_theme':
      return { ...lightTheme }

    default:
      return state;
  }
}