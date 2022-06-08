import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../NavigatingScreens/HomeScreen';
import News from '../NavigatingScreens/NewsScreen';
import ProfileUser from '../NavigatingScreens/ProfileUser';
import Vaccination from '../NavigatingScreens/VaccinationScreen';
import TabBar from '../NavigatingScreens/TabBar';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import TabBarProvider from '../context/TabBarProvider';
import BottomTab from '../NavigatingScreens/BottomTab';
const Tab = createBottomTabNavigator();


const UserProfile = () => {
  return (
    <TabBarProvider>

<BottomTab/>  
   
    </TabBarProvider>
   
    
   
    );
};

export default UserProfile;
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
