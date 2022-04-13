import React from 'react'
import { FlatList, View } from 'react-native'
import { menuItems } from '../common/menuItemsFlat';
import { ListHeader } from '../components/atoms';
import { FlatlistItem } from '../components/organisms';
import { styles } from '../theme/appTheme';

const Home = () => {

  const itemSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
    )
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatlistItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<ListHeader title='Opciones de Menu' />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

export default Home