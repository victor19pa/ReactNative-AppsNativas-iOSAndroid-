import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Text, useWindowDimensions } from 'react-native';
import InternalMenu from '../components/InternalMenu';

const Drawer = createDrawerNavigator();

function MenuLateral() {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      drawerContent={ (props) => <InternalMenu {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false, 
      }}      
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default MenuLateral
