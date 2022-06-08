import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../NavigatingScreens/TabBar';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import TabBarProvider from '../context/TabBarProvider';
import BottomTabs from '../AdminNavigatingScreens/BottomTabs';
import AdminHome from '../AdminNavigatingScreens/AdminHome';
import News from '../AdminNavigatingScreens/News';
import RegisterUsers from '../AdminNavigatingScreens/RegisterUsers';
import Dashboard from '../AdminNavigatingScreens/Dashboard';

const Tab = createBottomTabNavigator();

const AdminProfile = ({navigation,route}) => {
  return (
    <TabBarProvider>

    <BottomTabs/>  
       
        </TabBarProvider>
       
  )
}

export default AdminProfile

const styles = StyleSheet.create({})