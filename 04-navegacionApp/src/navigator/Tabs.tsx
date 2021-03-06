import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {


  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = ''
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'basket-outline'
              break;

            case 'TopTabNavigator':
              iconName = 'camera-outline'
              break;

            case 'StackNavigator':
              iconName = 'checkmark-outline'
              break;
          }
          return (
            <Icon name={iconName} size={23} color='white' />
          )
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1', }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabbIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabbIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = ''
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;

            case 'Tab2Screen':
              iconName = 'T2'
              break;

            case 'StackNavigator':
              iconName = 'ST'
              break;
          }
          return (
            <Text style={{ color }}>{iconName}</Text>
          )
        },
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
      })}
    >
      <BottomTabbIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1', }} component={Tab1Screen} />
      <BottomTabbIOS.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
      <BottomTabbIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabbIOS.Navigator>
  );
}