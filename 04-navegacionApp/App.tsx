import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
import { LogBox } from 'react-native';
// import MenuLateralBasico from './src/navigator/MenuLateralBasico';
import MenuLateral from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App