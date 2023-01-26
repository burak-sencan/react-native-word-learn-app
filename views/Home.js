import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Defination from '../components/Defination'
import Dice from '../components/Dice'
import Header from '../components/Header'
import SaveButton from '../components/SaveButton'
import Synonyms from '../components/Synonyms'

const Home = () => {
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
      </View>
      <View style={styles.buttonContainer}>
        <SaveButton />
        <Dice />
      </View>
    </LinearGradient>
  )
}

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

export default Home
