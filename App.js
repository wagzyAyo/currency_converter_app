import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Convert from './src/components/screens/convert';
import About from './src/components/screens/about';
import Privacy from './src/components/screens/privacy';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen  name='Convert currency' component={Convert}/>
        <Tabs.Screen name='About' component={About} />
        <Tabs.Screen name='Privacy' component={Privacy} />
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
