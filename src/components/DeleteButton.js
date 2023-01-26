import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../theme/color'
import { circleShadow } from '../theme/commonStyles'

const DeleteButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>
        <Ionicons name='trash' size={20} color={colors.red} />
      </TouchableOpacity>
    </View>
  )
}

export default DeleteButton
const styles = StyleSheet.create({
  container: {},

  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: colors.white,
    ...circleShadow,
  },
})