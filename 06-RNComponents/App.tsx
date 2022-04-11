import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigator';
import { LogBox } from 'react-native';
import utilities from './tailwind.json';
import { TailwindProvider } from 'tailwind-rn/dist';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
