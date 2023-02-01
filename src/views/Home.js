// import { useEffect } from 'react'
// import { fetchData } from '../features/home/homeSlice'

import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Defination from '../components/Defination'
import Dice from '../components/Dice'
import Header from '../components/Header'
import SaveButton from '../components/SaveButton'
import Synonyms from '../components/Synonyms'
import { useSelector } from 'react-redux'
import Welcome from '../components/Welcome'

const Home = () => {
  const data = useSelector(state => state.home.data)

  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#f7f7f7', '#f9f9f9', '#f7f7f7']}>
      {data !== null ? (
        <View>
          <Header en={data?.en} type={data?.type} />
          <Defination level={data?.level} meanings={data?.data[0]?.meanings} />
          <Synonyms meanings={data?.data[0]?.meanings} />
        </View>
      ) : (
        <Welcome />
      )}
      <View style={styles.buttonContainer}>
        {data !== null ? <SaveButton /> : <View></View>}
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

export default Home
