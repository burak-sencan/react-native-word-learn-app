import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../theme/color'
import { circleShadow } from '../theme/commonStyles'

const DeleteButton = ({ id, wordList, setWordordList = null }) => {
  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem(`${id}`)
      if (setWordordList) {
        setWordordList(wordList.filter(word => word.id != id))
      }
    } catch (error) {
      console.log(error)
    }
    console.log('Deleted.')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={handleDelete}>
        <Ionicons name='trash' size={20} color={colors.red} />
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

export default DeleteButton
