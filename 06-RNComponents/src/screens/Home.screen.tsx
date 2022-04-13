import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { menuItems } from '../common/menuItemsFlat';
import { ListHeader } from '../components/atoms';
import { styles } from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const Home = () => {

  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text style={{ color: 'black' }}>{menuItem.name} - {menuItem.icon}</Text>
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
        ListHeaderComponent={<ListHeader title='Opciones de Menu' />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

export default Home