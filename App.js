import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase, View,Dimensions ,Animated} from 'react-native';

import FormHeader from './app/component/FormHeader';
import FormSelectorButton from './app/component/FormSelectorButton';
import LoginForm from './app/component/LoginForm';
import SignUpForm from './app/component/SignUpForm';
import axios from 'axios';
import ImageUpload from './app/component/ImageUpload';
import AppForm from './app/component/AppForm';
import UserProfile from './app/component/UserProfile';
import 'react-native-gesture-handler';
import MainContainer from './app/MainContainer';

export default function App() { 
return(
<NavigationContainer>
  <MainContainer/>
</NavigationContainer>     
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },
  borderLeft:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
  },
  borderRight:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
  }
});
