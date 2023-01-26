import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
import Defination from '../components/Defination'
import DeleteButton from '../components/DeleteButton'
import Example from '../components/Example'
import Header from '../components/Header'
import NextButton from '../components/NextButton'
import Synonyms from '../components/Synonyms'

const WordCard = () => {
  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 0.8, y: 0.1 }}
      end={{ x: 0.5, y: 0.6 }}
      colors={['#fff', '#f9f9f9']}>
      <View>
        <Header />
        <Defination />
        <Synonyms />
        <Example />
      </View>
      <View style={[styles.buttonContainer]}>
        <DeleteButton />
        <NextButton />
      </View>
    </LinearGradient>
  )
}

export default WordCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
})
