import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import BottomTabs from '../screens/tabs'

const Routes = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShadowVisible: false}}>
            <Stack.Screen name='home' component={BottomTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes    