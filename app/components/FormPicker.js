import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormPicker = (props) => {
    const {label,error}=props;
  return (
    <>
    <View style={{ flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
      <Text style={styles.text}>{label}</Text>
      <Text style={{color:'red',fontSize:16}}>{error}</Text>    
    </View>
    <Picker>
        <Picker.Items/>
    </Picker>
    </>
  )
}

export default FormPicker

const styles = StyleSheet.create({})