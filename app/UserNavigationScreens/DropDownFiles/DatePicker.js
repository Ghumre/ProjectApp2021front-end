import React, { useState, useEffect } from 'react';
import {TouchableOpacity,TextInput, View, Text, Alert,Button,Platform,StyleSheet, StatusBar} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
//import DateTimePicker from 'react-native-date-picker'
const DatePicker=(props)=>{
   const {label,error,value,onChangeText,onBlur,placeholder}=props;
   const [date,setDate]=useState(new Date());
   const [mode,setMode]=useState('date');
   const [show,setShow]=useState(false);
   const [text, setText]=useState('');
const onChange= (event, selectedDate)=>{
       const currentDate= selectedDate || date;
       setShow(Platform.OS === "ios");
       setDate(currentDate);

       let tempDate=new Date(currentDate);
       let fDate=tempDate.getDate()+'-'+(tempDate.getMonth()+1)+'-'+tempDate.getFullYear();
        // let selDate=JSON.stringify(fDate);
       setText( fDate);
       console.log(fDate);
       
    
   }

   const showMode=(currentMode)=>{
       setShow(true);
       setMode(currentMode);
   }

   const showDatepicker = () => {
    showMode('date');
  };

    return(
        <>
        <View  style={{ flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
            <Text  style={{fontSize:19,
    fontWeight:'bold',
    marginBottom:5,}}> {label} </Text>
            <Text  style={{color:'red',fontSize:16}}>{error}</Text> 
        </View>
         <View {...props} style={styles.container}>
          <TextInput  {...props}  style = {styles.text} onChangeText={(val)=>text} 
        onBlur={onBlur} 
           value={text}/>

         
           <TouchableOpacity onPressIn={showDatepicker} style={styles.Button}>
           <FontAwesome name="calendar" size={30} color="white" />
            </TouchableOpacity> 
            {
               show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display='calendar'
                onChange={onChange}
                
              />
               )
           }
           
         </View>
       < / >
    );
    
};
export default DatePicker;

const styles=StyleSheet.create({
   container:{
       flexDirection:'row',
       backgroundColor:'#fff',
       alignItems:'center',
      justifyContent:'space-between',
       marginBottom:8,
},
   text:{
    borderColor:'black',borderWidth:1,fontSize:16,
    borderRadius:8,paddingLeft:20,paddingRight:210,marginBottom:10,
    paddingTop:8,paddingBottom:8,
   },
   Button:{
       borderRadius:8,
       borderColor:'black',
       backgroundColor:'black',
      height:40,
      width:40,
      marginBottom:9,
      justifyContent:'center',
      alignItems:'center',
    }
});