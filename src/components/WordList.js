import { View, Text, StyleSheet, ScrollView } from 'react-native'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'
import DeleteButton from './DeleteButton'

const wordList = [
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
  { word: 'Apple' },
]

const WordList = () => {
  return (
    <ScrollView style={styles.container}>
      {wordList.map((word, idx) => (
        <View style={styles.tableItem}>
          <Text style={{ fontSize: 18, color: colors.black }} key={idx}>
            {word.word}
          </Text>
          <DeleteButton />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
  tableItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingRight: 2,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginBottom: -1,
  },
})

export default WordList
