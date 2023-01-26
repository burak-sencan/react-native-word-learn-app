import { View, Text, StyleSheet } from 'react-native'
import colors from '../theme/color'

const Example = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: colors.black }}>Example</Text>
      <Text style={{ fontSize: 20, color: colors.black }}>I eat apple.</Text>
    </View>
  )
}

export default Example

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
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
