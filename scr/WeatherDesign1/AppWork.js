import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './scr/WeatherDesign1/DetailsScreen';
import HomeScreen1 from './scr/WeatherDesign1/HomeScreen1';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DetailsScreen1'>
       <Stack.Screen options={{headerShown: false}} name='HomeScreen1' component={HomeScreen1}/>
      <Stack.Screen  options={{headerShown: false}} name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};
export default App;