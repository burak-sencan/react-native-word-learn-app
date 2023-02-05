import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { containerShadow } from '../theme/commonStyles'
import colors from '../theme/color'
import DeleteButton from './DeleteButton'

const WordList = () => {
  const [wordList, setWordordList] = useState([])

  useFocusEffect(
    useCallback(() => {
      getAllKeys()
    }, [])
  )

  const getAllKeys = async () => {
    let keys
    try {
      keys = await AsyncStorage.getAllKeys()
      if (keys) {
        keys = keys.filter(key => key != 'EXPO_CONSTANTS_INSTALLATION_ID')
        getMultiple(keys)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getMultiple = async keys => {
    let values
    try {
      values = await AsyncStorage.multiGet(keys)
    } catch (error) {
      console.log(error)
    }
    let temp = values.map(value => JSON.parse(value[1]))
    setWordordList(temp)
  }

  return (
    <ScrollView style={styles.container}>
      {wordList.map(word => (
        <View style={styles.tableItem} key={word.id}>
          <Text style={{ fontSize: 18, color: colors.black }}>
            {word.en.charAt(0).toUpperCase() + word.en.slice(1)}
          </Text>
          <DeleteButton id={word.id} wordList={wordList} setWordordList={setWordordList} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
  tableItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingRight: 2,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginBottom: -1,
  },
})

export default WordList
