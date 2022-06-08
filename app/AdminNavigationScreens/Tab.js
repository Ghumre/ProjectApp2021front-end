import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

const Tab = ({color, tab,onPress, icon, backgroundColor}) => {
  return (
   <TouchableOpacity style={styles.container} onPress={onPress} backgroundColor={backgroundColor}>
     {icon && <SimpleLineIcons name={icon} style={{alignItems:'center'}} size={22} color={color} />}
     <Text style={styles.text,{color}}>{tab.name}</Text>
   
   </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
    container:{
        paddingBottom:7,
        paddingTop:7,
        paddingHorizontal:6,
        paddingLeft:3,
        paddingRight:3,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
    
    },
    text:{
      
    },
    
})