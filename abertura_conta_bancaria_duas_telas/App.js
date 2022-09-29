import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Form from './src/pages/Form';
import Infos from './src/pages/Infos';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de Conta" component={Form} />
        <Stack.Screen name="Informações" component={Infos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
