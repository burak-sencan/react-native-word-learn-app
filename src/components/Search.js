import { StyleSheet, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWord, setText } from '../features/translate/translateSlice'
import colors from '../theme/color'
import { containerShadow } from '../theme/commonStyles'

const Search = () => {
  const text = useSelector(state => state.translate.text)
  const dispatch = useDispatch()
  return (
    <TextInput
      style={styles.container}
      onChangeText={e => dispatch(setText(e))}
      placeholder='Search'
      value={text}
      onSubmitEditing={() => {
        dispatch(fetchWord(text))
      }}
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
