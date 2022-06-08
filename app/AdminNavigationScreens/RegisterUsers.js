import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginForm from '../component/LoginForm';
import SignUpForm from '../component/SignUpForm';

const RegisterUsers = ({navigation:{navigate}}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
     <TouchableOpacity style={styles.btn} onPress={()=> navigate('SignUpForm')}>
    <Text style={styles.txt}>Add User Here </Text>

     </TouchableOpacity>
    
    </View>
  )
}

export default RegisterUsers;

const styles = StyleSheet.create({
  btn:{
 color:'#fff',
    justifyContent:'center',alignItems:'center',
    backgroundColor:'rgba(21,21,51,1)',
    height:100,
    width:100,
    borderRadius:125/2,
  },
  txt:{
    color:'#fff'
  }
})