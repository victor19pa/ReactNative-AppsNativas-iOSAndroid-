import React, { useState } from 'react'
import { View, Switch } from "react-native";

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{ marginTop: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Switch
        trackColor={{ false: "#d9d9db", true: "#00bf56" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default SwitchScreen;