import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}
const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'star-outline',
    components: 'Animation102Screen'
  }
]
const Home = () => {

  const { top } = useSafeAreaInsets();

  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text style={{ color: 'black' }}>{menuItem.name} - {menuItem.icon}</Text>
      </View>
    )
  }

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={styles.title}>Opciones de menu</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
    )
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

export default Home