import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { boxShadow, circleShadow, containerShadow } from '../theme/commonStyles'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 40, color: colors.purple }}>Deerberry</Text>
        <Text style={{ fontSize: 15, color: colors.black, marginBottom: -40 }}>Noun</Text>
      </View>
      <TouchableOpacity title='asd' style={styles.circle}>
        <Ionicons name='volume-high-sharp' size={20} color={colors.purple} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...containerShadow,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: colors.white,
    ...circleShadow,
  },
})
