import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../theme/color'
import { circleShadow } from '../theme/commonStyles'

const SaveButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>
        <Ionicons name='bookmark-sharp' size={20} color={colors.green} />
      </TouchableOpacity>
    </View>
  )
}

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

export default SaveButton
