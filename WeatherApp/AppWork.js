
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './WeatherApp/Details';
import HomeWeather from './WeatherApp/HomeWeather';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Details'>
        <Stack.Screen  options={{headerShown: false}} name="HomeWeather" component={HomeWeather} />
      <Stack.Screen  options={{headerShown: false}} name="Details" component={Details} />
         {/*<Stack.Screen  options={{headerShown: false}}name="MyCart" component={MyCart} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default App;