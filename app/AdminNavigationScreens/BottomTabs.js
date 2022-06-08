import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarProvider from '../context/TabBarProvider';
import TabBar from '../AdminNavigatingScreens/TabBar';
import { SimpleLineIcons } from '@expo/vector-icons';
import AdminHome from '../AdminNavigatingScreens/AdminHome';
import News from '../AdminNavigatingScreens/News';
import RegisterUsers from '../AdminNavigatingScreens/RegisterUsers';
import Dashboard from '../AdminNavigatingScreens/Dashboard';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator  tabBar={(props=><TabBar {...props}/>)}
    
    >
     <Tab.Screen name='Home' component={AdminHome} initialParams={{icon:'home'}}/>
      <Tab.Screen name='Dashboard' component={Dashboard} initialParams={{icon:'grid'}}/>
      <Tab.Screen name='Add Users' component={RegisterUsers} initialParams={{icon:'user-following'}}/>
      <Tab.Screen name='News' component={News} initialParams={{icon:'book-open'}}/>
        
    </Tab.Navigator>
  )
}

export default BottomTabs

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