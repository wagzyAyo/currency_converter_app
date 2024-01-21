import Convert from './screens/convert';
import About from './screens/about';
import Privacy from './screens/privacy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
/*
ABout component
*/

const Tabs = createBottomTabNavigator()

const Tab = () => {
    return (
        <Tabs.Navigator>
        <Tabs.Screen  name='Convert currency' component={Convert} options={{
          tabBarIcon: ({focused}) =>(
            <FontAwesome name={'exchange'} size={22} color={ focused ? 'blue' : 'black' } />
          )
        }}/>
        <Tabs.Screen name='About' component={About} options={{
          tabBarIcon: ({ focused}) => (
            <FontAwesome name={'info-circle'} size={22} color={focused ? 'blue' : 'black'} />
          )
        }} />
        <Tabs.Screen name='Privacy' component={Privacy} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name={'privacy-tip'} size={22} color={ focused ? 'blue' : 'black'} />
          )
        }} />
    </Tabs.Navigator>
    )
}

export default Tab