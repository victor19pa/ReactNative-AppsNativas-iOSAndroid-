import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useRef, useState } from 'react'
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import useFade from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width: screenWidth } = Dimensions.get('window')
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any, any> { };

const Slides = ({ navigation }: Props) => {
  const { theme: { colors, dividerColor } } = useContext(ThemeContext)

  const [activeIndex, setActiveIndex] = useState(0);
  // const [isVisible, setIsVisible] = useState(false)
  const { opacityRef, fadeIn } = useFade();
  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center'
      }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />

        <Text style={{
          ...stylesSlides.title,
          color: colors.primary
        }}>{item.title}</Text>

        <Text style={{
          ...stylesSlides.subTitle,
          color: colors.text
        }}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 50 }}
    >
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === 2) {
            // setIsVisible(true)
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
      }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,

          }}
        />

        <Animated.View
          style={{
            opacity: opacityRef
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              width: 140,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            activeOpacity={0.9}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('Home')
              }
            }}
          >
            <Text style={{
              fontSize: 25,
              color: colors.text,
            }}>
              Entrar
            </Text>
            <Icon
              name='chevron-forward-outline'
              size={28}
              color='white'
            />
          </TouchableOpacity>
        </Animated.View>

      </View>

    </SafeAreaView>
  )
}
const stylesSlides = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16
  }

});

export default Slides