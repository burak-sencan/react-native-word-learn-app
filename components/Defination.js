import { View, Text, StyleSheet, ScrollView } from 'react-native'

import colors from '../theme/color'

const Defination = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 24 }}>Defination</Text>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, color: colors.black }}>deer+berry</Text>
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
        <Text style={{ fontSize: 20, color: colors.black, overflow: 'hidden' }}>
          Small branching blueberry common in marshy areas of the eastern United States having
          greenish or yellowish unpalatable berries reputedly eaten by deer
        </Text>
      </ScrollView>
    </View>
  )
}

export default Defination

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    padding: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
})
