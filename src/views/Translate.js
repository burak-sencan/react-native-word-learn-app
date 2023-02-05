import { View, StyleSheet } from 'react-native'
import Search from '../components/Search'
import { LinearGradient } from 'expo-linear-gradient'
import Synonyms from '../components/Synonyms'
import SaveButton from '../components/SaveButton'
import { useSelector } from 'react-redux'
import Translation from '../components/Translation'

const Translate = () => {
  const data = useSelector(state => state.translate.data)

  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#f7f7f7', '#f9f9f9', '#f7f7f7']}>
      <View>
        <Search />
        {data && <Translation data={data.data} />}
      </View>
      {/* <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        {data && <SaveButton />}
      </View> */}
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
