import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import WordList from '../components/WordList'

const EditWord = () => {
  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 0.8, y: 0.1 }}
      end={{ x: 0.5, y: 0.6 }}
      colors={['#fff', '#f9f9f9']}>
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
