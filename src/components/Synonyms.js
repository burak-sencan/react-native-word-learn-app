import { View, Text, StyleSheet, ScrollView } from 'react-native'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Synonyms = ({ meanings }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 22, color: colors.lightBlack }}>Synonyms</Text>
      {meanings?.map(
        (meaning, idx) =>
          meaning?.synonyms[0] && (
            <View
              key={idx}
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, color: colors.purple, overflow: 'hidden' }}>
                {meaning.partOfSpeech}
              </Text>
              <Text style={{ fontSize: 18, color: colors.lightBlack }}>{meaning?.synonyms[0]}</Text>
            </View>
          )
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Synonyms
