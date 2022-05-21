import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle, ItemSeparator } from '../components/atoms'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
  }
];

const CustomSectionList = () => {
  const { theme: { colors, dividerColor } } = useContext(ThemeContext)

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>

      <SectionList
        sections={casas}
        renderItem={({ item }) => <Text style={{ color: colors.text }}> {item} </Text>}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: colors.background }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        ListHeaderComponent={() => <HeaderTitle title={'Section List'} />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 50 }}>
            <HeaderTitle title={'Total Casas ' + casas.length} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}

      />
    </View>
  )
}

export default CustomSectionList