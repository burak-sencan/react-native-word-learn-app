import { View, Text, StyleSheet, ScrollView } from 'react-native'

import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Defination = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 22, color: colors.black }}>Defination</Text>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, color: colors.purple }}>deer+berry</Text>
        <Text
          style={{
            fontSize: 20,

            color: colors.purple,
            textTransform: 'capitalize',
          }}>
          geyik üzümü
        </Text>
      </View>
      <ScrollView>
        <Text style={{ fontSize: 18, color: colors.lightBlack, overflow: 'hidden' }}>
          Small branching blueberry common in marshy areas of the eastern United States having
          greenish or yellowish unpalatable berries reputedly eaten by deer
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    padding: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Defination
