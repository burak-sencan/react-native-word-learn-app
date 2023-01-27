import { View, StyleSheet } from 'react-native'
import Search from '../components/Search'
import { LinearGradient } from 'expo-linear-gradient'
import Defination from '../components/Defination'
import Synonyms from '../components/Synonyms'
import Example from '../components/Example'
import SaveButton from '../components/SaveButton'

const Translate = () => {
  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#f7f7f7', '#f9f9f9', '#f7f7f7']}>
      <View>
        <Search />
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
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})
