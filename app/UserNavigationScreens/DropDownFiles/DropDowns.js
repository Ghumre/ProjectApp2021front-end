import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Alert,Button} from 'react-native';
import { useFormik } from 'formik';
import { Picker } from '@react-native-picker/picker';

const DropDown=(props)=>{
    const {placeholder,onValueChange,label,error,selectedValue}=props;

const Vaccines=[
    {name:"" , id:''},
    {name:"tetanus", id: 1},
     {name:"Covaccine", id: 2},
     {name:"Covisheilde", id: 3},
     {name:"BCG", id: 4},
];

 
const [state,setState]= useState('');

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
       {Vaccines.map((item) => {
        return <Picker.Item 
              label={item.name.toString()} 
              value={item.name.toString()} 
              key={item.id.toString()} />
              
        })}
     </Picker>
        </View></>
    );
};
export default DropDown;

