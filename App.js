// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home.js';
import Details from './screens/Details.js';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(46,139,87,0.7)',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: '#0f0f0f',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{title: 'Home screen'}}
        />
        <Stack.Screen 
          name="Details"
          component={Details}
          options={{title: 'Details screen'}}
       />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
