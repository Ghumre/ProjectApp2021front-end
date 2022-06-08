import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Alert,Button} from 'react-native';
import { useFormik } from 'formik';
import { Picker } from '@react-native-picker/picker';


const  DropDown1=(props)=>{
    const {placeholder,onValueChange,label,error,selectedValue}=props;

    const Timings=[
        {name:"",id:''},
        {name:"9am to 11am", id: 1},
         {name:"1pm to 3pm", id: 2},
         {name:"5pm to 9pm", id: 3},
         
    ];
   
   const [state, setState]=useState('');
  // useEffect=()
    return(
        <>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
            <Text style={{color:'black',marginBottom:5,fontSize:18,fontWeight:'bold'}}>{label}</Text>   
            <Text style={{color:'red',marginBottom:5,fontSize:18}}>{error}</Text>
             </View>
        <View style={{borderColor:'black',borderWidth:1
        ,borderRadius:8,marginBottom:5}}>
             <Picker 
            enabled={true} 
            mode="dropdown"
            placeholder={placeholder}
             onValueChange={onValueChange}
            selectedValue={selectedValue}
          > 
    
        { Timings.map((item) => {
        return <Picker.Item 
              label={item.name.toString()} 
              value={item.name.toString()} 
               key={item.id.toString()} 
              />
              
        })
    } 

        </Picker> 
         
        </View></>  
    );
};
export default DropDown1;