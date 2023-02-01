import { View, Text, StyleSheet, ScrollView } from 'react-native'

import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Defination = ({ meanings, level }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 22, color: colors.lightBlack }}>Defination</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <ScrollView style={{ marginRight: 20 }}>
          {meanings?.map((meaning, idx) => (
            <View style={{ paddingVertical: 10 }} key={idx}>
              <Text style={{ fontSize: 18, color: colors.purple, overflow: 'hidden' }}>
                {meaning?.partOfSpeech}
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  color: colors.lightBlack,
                  overflow: 'hidden',
                }}>
                {meaning?.definitions[0]?.definition}
              </Text>
            </View>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 18, color: colors.lightBlack }}>{level || ''}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    padding: 10,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Defination
