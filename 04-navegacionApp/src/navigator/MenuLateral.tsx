import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { useWindowDimensions } from 'react-native';
import InternalMenu from '../components/InternalMenu';
import { Tabs } from './Tabs';

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
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default MenuLateral
