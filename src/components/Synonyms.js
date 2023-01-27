import { View, Text, StyleSheet } from 'react-native'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Synonyms = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, color: colors.black }}>Synonyms</Text>
      <Text style={{ fontSize: 18, color: colors.lightBlack }}>malus pumila</Text>
    </View>
  )
}

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

export default Synonyms
