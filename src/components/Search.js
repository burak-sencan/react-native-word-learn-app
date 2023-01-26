import { StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Search = () => {
  const [text, onChangeText] = useState('')

  return (
    <TextInput
      style={styles.container}
      onChangeText={onChangeText}
      placeholder='Search'
      value={text}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 20,
    fontSize: 24,
    color: '#888',
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default Search
