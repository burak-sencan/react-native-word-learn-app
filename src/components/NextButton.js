import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { circleShadow } from '../theme/commonStyles'
import { useDispatch } from 'react-redux'
import { getSavedWord } from '../features/wordCard/wordCardSlice'
import { useFocusEffect } from '@react-navigation/native'

let keys = []
let idx = 0

const NextButton = () => {
  const dispatch = useDispatch()

  // Get all word id
  useFocusEffect(() => {
    getAllKeys()
  })

  const getAllKeys = async () => {
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (error) {
      console.log(error)
    }
  }

  // EXPO_CONSTANTS_INSTALLATION_ID is default key for AsyncStorage
  const nextWord = async () => {
    let jsonValue
    console.log(keys)
    if (idx < keys.length) {
      if (keys[idx] != 'EXPO_CONSTANTS_INSTALLATION_ID') {
        try {
          jsonValue = await AsyncStorage.getItem(keys[idx])
          jsonValue != null ? JSON.parse(jsonValue) : null
          idx++
          dispatch(getSavedWord(jsonValue))
        } catch (error) {
          console.log(error)
        }
      } else {
        if (keys.length != 0) {
          idx++
          try {
            jsonValue = await AsyncStorage.getItem(keys[idx])
            jsonValue != null ? JSON.parse(jsonValue) : null
            idx++
            dispatch(getSavedWord(jsonValue))
          } catch (error) {
            console.log(error)
          }
        }
      }
    } else {
      idx = 0
      if (keys[idx] != 'EXPO_CONSTANTS_INSTALLATION_ID') {
        try {
          jsonValue = await AsyncStorage.getItem(keys[idx])
          jsonValue != null ? JSON.parse(jsonValue) : null
          idx++
          dispatch(getSavedWord(jsonValue))
        } catch (error) {
          console.log(error)
        }
      } else {
        if (keys.length != 1) {
          idx++
          try {
            jsonValue = await AsyncStorage.getItem(keys[idx])
            jsonValue != null ? JSON.parse(jsonValue) : null
            idx++
            dispatch(getSavedWord(jsonValue))
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
    dispatch(getSavedWord(jsonValue))
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
