import { View, Text, StyleSheet } from 'react-native'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Example = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, color: colors.black }}>Example</Text>
      <Text style={{ fontSize: 18, color: colors.lightBlack }}>I eat apple.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Example
