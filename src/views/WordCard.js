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
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#f7f7f7', '#f9f9f9', '#f7f7f7']}>
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
