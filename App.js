import React,{ useState, useEffect } from 'react';
import Inicial from './Inicial';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NextScreen from './NextScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import WeatherScreen from './WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} /> 
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />  
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
