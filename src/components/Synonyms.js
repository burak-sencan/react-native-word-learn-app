import { View, Text, StyleSheet } from 'react-native'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Synonyms = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: colors.black }}>Synonyms</Text>
      <Text style={{ fontSize: 20, color: colors.black }}>malus pumila</Text>
    </View>
  )
}

export default Synonyms

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 80,
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})
