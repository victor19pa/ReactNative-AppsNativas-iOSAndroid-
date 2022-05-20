import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Stack } from './src/navigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);
const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // primary: '#',
    // background: '#',
    // card: '#',
    // text: '#',
    // border: '#',
    // notification: '#',
  }
}
const App = () => {

  return (
    <NavigationContainer
      theme={customTheme}
    >
      <Stack />
    </NavigationContainer>
  );
};

export default App;
