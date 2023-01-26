import { View, StyleSheet } from 'react-native'
import InputText from '../components/InputText'
import { LinearGradient } from 'expo-linear-gradient'
import Defination from '../components/Defination'
import Synonyms from '../components/Synonyms'
import Example from '../components/Example'
import SaveButton from '../components/SaveButton'

const Translate = () => {
  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 0.8, y: 0.1 }}
      end={{ x: 0.5, y: 0.6 }}
      colors={['#fff', '#f9f9f9']}>
      <View>
        <InputText />
        <Defination />
        <Synonyms />
        <Example />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
        <SaveButton />
      </View>
    </LinearGradient>
  )
}

export default Translate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 20,
  },
})
