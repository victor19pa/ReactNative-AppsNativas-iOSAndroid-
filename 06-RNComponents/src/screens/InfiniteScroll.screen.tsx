import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import FadeInImage from '../components/organisms/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfiniteScroll = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const { theme: { colors } } = useContext(ThemeContext)

  const loadMore = () => {

    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);


  }
  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        style={{
          width: '100%',
          height: 400
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ActivityIndicator size={25} color={colors.primary} />
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
      />
    </View>
  )
}

export default InfiniteScroll