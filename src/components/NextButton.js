import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { circleShadow } from '../theme/commonStyles'
import { useDispatch } from 'react-redux'
import { getSavedWord } from '../features/wordCard/wordCardSlice'

const NextButton = () => {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          dispatch(getSavedWord())
        }}>
        <Ionicons name='chevron-forward-outline' size={48} color={colors.orange} />
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

export default NextButton
