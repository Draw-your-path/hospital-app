import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../Home';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="tabs_home"
    screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false
    }}>
      <Tab.Screen name="home" component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" colors={color} size={size} />
        )
      }}
       />
    </Tab.Navigator>
  )
}

export default BottomTabs