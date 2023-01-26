import { StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const InputText = () => {
  const [text, onChangeText] = useState('')
  console.log(text)
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginTop: 20,
    padding: 20,
    fontSize: 24,
    color: '#888',
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
})

export default InputText
