import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Animation101, Animation102, Home } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101Screen" component={Animation101} />
      <Stack.Screen name="Animation102Screen" component={Animation102} />
    </Stack.Navigator>
  );
}

export default StackNavigator;