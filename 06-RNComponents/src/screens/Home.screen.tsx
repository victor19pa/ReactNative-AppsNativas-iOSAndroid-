import React from 'react'
import { FlatList, View } from 'react-native'
import { menuItems } from '../common/menuItemsFlat';
import { HeaderTitle, ItemSeparator, } from '../components/atoms';
import { FlatlistItem } from '../components/organisms';
import { styles } from '../theme/appTheme';

const Home = () => {

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatlistItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title='Opciones de Menu' />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  )
}

export default Home