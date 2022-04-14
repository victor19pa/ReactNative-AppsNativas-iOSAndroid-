import React, { useState } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { CustomSwitch, HeaderTitle } from '../components/atoms';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  const { isActive, isHappy, isHungry } = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    })
  }

  return (
    <View style={{ marginTop: 10, flex: 1, marginHorizontal: 20 }}>
      <HeaderTitle title={'Switches'} />
      <View style={styles.rowSwitch}>
        <Text style={styles.txtSwitch}>is Active</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>
      <Text style={styles.txtSwitch}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  txtSwitch: {
    fontSize: 25,
    color: 'black'
  },
  rowSwitch: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default SwitchScreen;