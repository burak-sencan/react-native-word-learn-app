import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import WordList from '../components/WordList'

const EditWord = () => {
  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#f7f7f7', '#f9f9f9', '#f7f7f7']}>
      <WordList />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})

export default EditWord
