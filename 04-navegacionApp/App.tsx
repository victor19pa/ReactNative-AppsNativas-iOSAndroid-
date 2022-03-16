import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';

import { LogBox } from 'react-native';
import MenuLateralBasico from './src/navigator/MenuLateralBasico';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateralBasico />
    </NavigationContainer>
  )
}

export default App