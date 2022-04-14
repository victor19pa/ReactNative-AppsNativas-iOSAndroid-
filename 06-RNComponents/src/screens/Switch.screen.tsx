import React, { useState } from 'react'
import { View, Switch, Platform } from "react-native";
import { HeaderTitle } from '../components/atoms';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{ marginTop: 10, flex: 1, marginHorizontal: 20 }}>
      <HeaderTitle title={'Switches'} />
      <Switch
        trackColor={{ false: "#d9d9db", true: "#5856d6" }}
        thumbColor={(Platform.OS === 'android') ? '#5856d6' : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default SwitchScreen;