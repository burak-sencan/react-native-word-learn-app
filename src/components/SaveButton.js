import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../theme/color'
import { circleShadow } from '../theme/commonStyles'

const SaveButton = ({ data }) => {
  const storeData = async () => {
    const value = {
      en: data.en,
      data: data.data,
      type: data.type,
      level: data.level,
      id: data.id,
    }

    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`${data.id}`, jsonValue)
      console.log("Saved.")
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={storeData}>
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
