import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AlertScreen,
  Animation101,
  Animation102,
  ChangeThemeScreen,
  CustomModal,
  Home,
  InfiniteScrollScreen,
  PullToRefresh,
  SectionList,
  SlidesScreen,
  Switch,
  TextInput
} from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          cardStyle: {
            // backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animation101Screen" component={Animation101} />
        <Stack.Screen name="Animation102Screen" component={Animation102} />
        <Stack.Screen name="SwitchScreen" component={Switch} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInput} />
        <Stack.Screen name="PullToRefreshScreen" component={PullToRefresh} />
        <Stack.Screen name="CustomSectionListScreen" component={SectionList} />
        <Stack.Screen name="CustomModalScreen" component={CustomModal} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;