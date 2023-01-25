import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './views/Home'
import WordCard from './views/WordCard'
import Translate from './views/Translate'
import EditWord from './views/EditWord'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            } else if (route.name === 'WordCard') {
              iconName = focused ? 'book-sharp' : 'book-outline'
            } else if (route.name === 'Translate') {
              iconName = focused ? 'language-sharp' : 'language-outline'
            } else if (route.name === 'EditWord') {
              iconName = focused ? 'construct-sharp' : 'construct-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#6A4C93',
          tabBarInactiveTintColor: '#555',
        })}>
        <Tab.Screen options={{ title: 'Home', headerShown: false }} name='Home' component={Home} />
        <Tab.Screen
          options={{ title: 'Word Card', headerShown: false }}
          name='WordCard'
          component={WordCard}
        />
        <Tab.Screen
          options={{ title: 'Translate', headerShown: false }}
          name='Translate'
          component={Translate}
        />
        <Tab.Screen
          options={{ title: 'Edit Word', headerShown: false }}
          name='EditWord'
          component={EditWord}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
