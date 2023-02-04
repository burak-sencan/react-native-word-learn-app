import { useFocusEffect } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setKeys } from '../features/wordCard/wordCardSlice'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, View } from 'react-native'
import Defination from '../components/Defination'
import DeleteButton from '../components/DeleteButton'
import Header from '../components/Header'
import NextButton from '../components/NextButton'
import Synonyms from '../components/Synonyms'
import Welcome from '../components/Welcome'
import AsyncStorage from '@react-native-async-storage/async-storage'

const WordCard = () => {
  const data = useSelector(state => state.wordCard.savedWord)
  const dispatch = useDispatch()

  // Get all words
  useFocusEffect(() => {
    getAllKeys()
  })

  const getAllKeys = async () => {
    let keys
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (error) {
      console.log(error)
    }
    dispatch(setKeys(keys.filter(key => key != 'EXPO_CONSTANTS_INSTALLATION_ID')))
  }

  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#f7f7f7', '#f9f9f9', '#f7f7f7']}>
      {data !== null ? (
        <View>
          <Header en={data?.en} type={data?.type} />
          <Defination meanings={data?.data[0]?.meanings} level={data?.level} />
          <Synonyms meanings={data?.data[0]?.meanings} />
        </View>
      ) : (
        <Welcome text={'View Your Saved Words!'} />
      )}
      <View style={[styles.buttonContainer]}>
        {data !== null ? <DeleteButton id={data.id} /> : <View></View>}
        <NextButton />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
})

export default WordCard
