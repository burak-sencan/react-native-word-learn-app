import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { circleShadow } from '../theme/commonStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getSavedWord, setIdx } from '../features/wordCard/wordCardSlice'

const NextButton = () => {
  const dispatch = useDispatch()
  const idx = useSelector(state => state.wordCard.idx)
  const keys = useSelector(state => state.wordCard.keys)

  // EXPO_CONSTANTS_INSTALLATION_ID is default key for AsyncStorage
  const nextWord = async () => {
    let jsonValue
    if (idx < keys.length - 1) {
      try {
        jsonValue = await AsyncStorage.getItem(keys[idx])
        jsonValue != null ? JSON.parse(jsonValue) : null
        dispatch(getSavedWord(jsonValue))
        dispatch(setIdx(1))
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        dispatch(setIdx(0))
        jsonValue = await AsyncStorage.getItem(keys[idx])
        jsonValue != null ? JSON.parse(jsonValue) : null
        dispatch(getSavedWord(jsonValue))
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={nextWord}>
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
