import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Dice = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>
        <Ionicons name='color-wand' size={48} color={colors.orange} />
      </TouchableOpacity>
    </View>
  )
}

export default Dice

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    marginTop: 20,
  },

  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
})
