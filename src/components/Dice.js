import { useDispatch, useSelector } from 'react-redux'
import { getWord } from '../features/home/homeSlice'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { circleShadow } from '../theme/commonStyles'

const Dice = () => {
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={() => dispatch(getWord())}>
        <Ionicons name='color-wand' size={48} color={colors.orange} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: colors.white,
    ...circleShadow,
  },
})

export default Dice
