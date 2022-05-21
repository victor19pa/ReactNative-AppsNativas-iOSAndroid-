import 'react-native-gesture-handler';
import React from 'react';
import { Stack } from './src/navigator';
import { LogBox } from 'react-native';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);
// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: '#',
//     // background: '#',
//     // card: '#',
//     // text: '#',
//     // border: '#',
//     // notification: '#',
//   }
// }
const App = () => {
  return (
    <AppState>
      <Stack />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
