import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../../types/appInterfaces';


interface Props {
  menuItem: MenuItem;
}

const FlatlistMenuItem = ({ menuItem }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
    >
      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color='gray'
          size={30}
        />
        <Text style={styles.itemTxt}>
          {menuItem.name}
        </Text>
        <View style={styles.forwardContainer} />
        <Icon
          name='chevron-forward-outline'
          color='gray'
          size={20}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTxt: {
    marginLeft: 10,
    color: 'black',
    fontSize: 23
  },
  forwardContainer: {
    flex: 1,
  }
});

export default FlatlistMenuItem;