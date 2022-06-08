import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import TabBarProvider from '../context/TabBarProvider';
import Home from './HomeScreen';
import News from '../NavigatingScreens/NewsScreen';
import ProfileUser from './ProfileUser';
import VaccineForm from './VaccinationScreen';
import TabBar from '../NavigatingScreens/TabBar';
import TestForm from '../NavigatingScreens/newTest';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    
    <Tab.Navigator  tabBar={(props=><TabBar {...props}/>)}
    >
      <Tab.Screen name='Home' component={Home} initialParams={{icon:'home'}}/>
      <Tab.Screen name='Vaccine' component={VaccineForm} initialParams={{icon:'injection-syringe'}}/>
      <Tab.Screen name='Test' component={TestForm} initialParams={{icon:'test-tube'}}/>
      <Tab.Screen name='News' component={News} initialParams={{icon:'hacker-news'}}/>
      {/* <Tab.Screen name='Profile' component={ProfileUser}/> */}
    </Tab.Navigator>
    
    );
};

export default BottomTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
    }
});
