import { View, Text, StyleSheet } from 'react-native'

import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: colors.purple }}>Welcome</Text>
      <Text style={{ fontSize: 24, color: colors.purple }}>Get Random Word !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
    padding: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Welcome
