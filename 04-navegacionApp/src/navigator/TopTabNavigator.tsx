import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, }) => {
          let iconName: string = ''
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'CH'
              break;

            case 'ContactsScreen':
              iconName = 'CS'
              break;

            case 'AlbumsScreen':
              iconName = 'Al'
              break;
          }
          return (
            <Text style={{ color }}>{iconName}</Text>
          )
        },
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chats'}}  component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}