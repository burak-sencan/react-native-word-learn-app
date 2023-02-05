import { View, Text, StyleSheet, ScrollView } from 'react-native'

import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Translation = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 22, color: colors.lightBlack }}>Translation</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <ScrollView style={{ marginRight: 20 }}>
          {data?.translations?.map((translation, idx) => (
            <View style={{ paddingVertical: 10 }} key={idx}>
              <Text style={{ fontSize: 18, color: colors.purple, overflow: 'hidden' }}>
                {translation.translatedText}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    padding: 10,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Translation
