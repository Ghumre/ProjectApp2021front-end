import React from 'react';

import AppForm from './component/AppForm';
import ImageUpload from './component/ImageUpload';
import UserProfile from './component/UserProfile';
import { createStackNavigator } from '@react-navigation/stack';
import  'react-native-gesture-handler';
import Decision from  './component/Decision';
import  AdminAppForm from './component/AdminAppForm';
import AdminProfile from './component/AdminProfile';
import RegisterUsers from './AdminNavigatingScreens/RegisterUsers';
import LoginForm from './component/LoginForm';
import SignUpForm from './component/SignUpForm';
const Stack = createStackNavigator();

const StackNavigator=()=>{
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Decision} name='Decision'/>
        <Stack.Screen component={AdminProfile} name='AdminProfile'/>
        <Stack.Screen component={AppForm} name='AppForm'/>
        <Stack.Screen component={ImageUpload} name='ImageUpload'/>
        <Stack.Screen component={UserProfile} name='UserProfile'/>
        <Stack.Screen component={AdminAppForm} name='AdminAppForm'/>
        <Stack.Screen component={RegisterUsers} name='RegisterUsers'/>
     <Stack.Screen component={SignUpForm} name='SignUpForm'/>
      < /Stack.Navigator>
  );
};



const  MainContainer=()=> {
  return (
    <StackNavigator/>
    );
};

export default MainContainer;