import { View, Text, StyleSheet } from 'react-native'
import Defination from '../components/Defination'
import Dice from '../components/Dice'
import Header from '../components/Header'
import SaveButton from '../components/SaveButton'
import Synonyms from '../components/Synonyms'

const Home = () => {
  return (
    <View style={[styles.container]}>
      <Header />
      <Defination />
      <Synonyms />
      <SaveButton />
      <Dice />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
})

export default Home
