import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AdminLoginForm from './AdminLogin';

const AdminAppForm = ({navigation,route}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <AdminLoginForm navigation={navigation}/>
    </View>
  )
}

export default AdminAppForm;

const styles = StyleSheet.create({})