import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskScreen from './taskComponent';
import ContactScreen from './contactComponent';
import ContactRegister from './registerContactComponent';


const Tab = createBottomTabNavigator();

export default function Home() {
  return (
      <Tab.Navigator>
        <Tab.Screen name='contactos' component={ContactScreen} options={{header:()=><Text></Text>}}/>
        <Tab.Screen name="registro" component={ContactRegister} options={{header:()=><Text></Text>}}/>
        <Tab.Screen name="tareas" component={TaskScreen} />
      </Tab.Navigator>
      
  );
}