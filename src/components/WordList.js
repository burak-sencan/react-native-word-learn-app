import { View, Text, StyleSheet, ScrollView } from 'react-native'
import DeleteButton from './DeleteButton'

const wordList = [
  {
    word: 'Apple',
  },
  {
    word: 'Apple',
  },
  {
    word: 'Apple',
  },
  {
    word: 'Apple',
  },
  {
    word: 'Apple',
  },
  {
    word: 'Apple',
  },
  {
    word: 'Apple',
  },
]

const WordList = () => {
  return (
    <ScrollView style={styles.container}>
      {wordList.map((word, idx) => (
        <View style={styles.tableItem}>
          <Text key={idx}>{word.word}</Text>
          <DeleteButton />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
  tableItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
})

export default WordList
