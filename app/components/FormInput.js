import { View, Text, TextInput,StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const FormInput = (props) => {
  const {label,placeholder,maxLength,secureTextEntry,error}=props;
  return (
    <>
    <View style={{ flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
      <Text style={styles.text}>{label}</Text>
      <Text style={{color:'red',fontSize:16}}>{error}</Text>    
    </View>
      
            <TextInput {...props} style={styles.Input} placeholder={placeholder}
             maxLength={maxLength} secureTextEntry={secureTextEntry} />
             
            
            
    </>
  );
};

const styles=StyleSheet.create({

Input:{
    borderColor:'black',borderWidth:1,fontSize:16,
            borderRadius:8,paddingLeft:20,paddingRight:20,marginBottom:10,
            paddingTop:8,paddingBottom:8,
},
text:{
    fontSize:19,
    fontWeight:'bold',
    marginBottom:5,
},

});
export default FormInput;


