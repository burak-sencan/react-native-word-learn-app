import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { circleShadow, containerShadow } from '../theme/commonStyles'

const Header = ({ en, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 40, color: colors.purple, textTransform: 'capitalize' }}>
          {en}
        </Text>
        <Text style={{ fontSize: 15, color: colors.black, marginLeft: 2, marginBottom: -40 }}>
          {type}
        </Text>
      </View>
      <TouchableOpacity style={styles.circle}>
        <Ionicons name='volume-high-sharp' size={20} color={colors.purple} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
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

export default Header
