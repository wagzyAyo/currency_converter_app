import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Convert from './src/components/screens/convert';
import About from './src/components/screens/about';
import Privacy from './src/components/screens/privacy';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'


const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen  name='Convert currency' component={Convert} options={{
          tabBarIcon: ({focused}) =>(
            <FontAwesome name='exchange' size={22} color={ focused ? 'blue' : 'black' } />
          )
        }}/>
        <Tabs.Screen name='About' component={About} options={{
          tabBarIcon: ({ focused}) => (
            <FontAwesome name='info-circle' size={22} color={focused ? 'blue' : 'black'} />
          )
        }} />
        <Tabs.Screen name='Privacy' component={Privacy} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name='privacy-tip' size={22} color={ focused ? 'blue' : 'black'} />
          )
        }} />
    </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
