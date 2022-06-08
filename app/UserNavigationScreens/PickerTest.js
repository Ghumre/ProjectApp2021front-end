import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { useState ,useEffect} from 'react';
     
const PickerTest = (props) => { 
  
 const [state,setState]= useState('');

 useEffect(()=>{
 const updateListItems=setInterval((listItems)=>{
   setState({listItems:listItems});

 },2000);
 return updateListItems;
    
 });
   
    const {option1,placeholder,option2,option3,option4,error,Label}=props;
  return (
      <>
    <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
      <Text style={styles.text}>{Label}</Text>
      <Text style={{color:'red',fontSize:16}}>{error}</Text>
    </View>
    <View style={styles.picContainer}>
        <Picker mode='dropdown' placeholder={placeholder}  selectedValue={state} onValueChange={useEffect}
                style={styles.picker} >
                    <Picker.Item label={option1} value={option1} />
                    <Picker.Item label={option2} value={option2} />
                    <Picker.Item label={option3} value={option3} />
                    <Picker.Item label={option4} value={option4} />
                    
        </Picker>      
    </View></>
  );
}

export default PickerTest;

const styles = StyleSheet.create({
    picker:{
        height:38,
        width:350,
        marginBottom:7,
       
    },
    picContainer:{
      borderRadius:7,
      borderWidth:1,
      borderColor:'black',
      marginBottom:10,
      paddingBottom:1,
    },
    text:{
      fontSize:19,
      fontWeight:'bold',
      marginBottom:5,
  },
  
});