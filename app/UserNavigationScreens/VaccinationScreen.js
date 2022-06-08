import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback,
    TouchableWithoutFeedbackBase, View,Dimensions, KeyboardAvoidingView, PlatformColor } from 'react-native';
import FormInput from '../component/FormInput';
import FormSubmitButton from '../FormSubmitButton';
import { isValidEmail,isValidObjectField,updateError } from '../utils/methods';
import client from '../Api/client';

import { StackActions } from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup'; 
import AnimatedScrollView from './AnimatedScrollView';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import PickerTest from './PickerTest';
import DropDown from './DropDownFiles/DropDowns';
import DropDown1 from './DropDownFiles/TimeDropDown'
import DatePicker from './DropDownFiles/DatePicker';
import { DateSchema } from 'yup';
const validationSchema=Yup.object({
    firstname:Yup.string().trim().min(3,'Invalid FirstName!').required('FirstName is required!'),
    lastname:Yup.string().trim().min(3,'Invalid LastName!').required('LastName is required!'),
    phoneno:Yup.number().required('Enter Valid Phone Number!').min(12,'Invalid Phone Number!').required('Phone Number Is Required!'),
   vaccineType :Yup.string().trim().required('This is required!'),   
   slotsTime :Yup.string().trim().required('This is required!'),   
slotsDate :Yup.string().trim().required('This is required!'),   
 
});

    const VaccineForm =()=>{
        const userInfo={
            firstname:'',
           lastname:'',
           phoneno:'',
            slotsTime:'',
            slotsDate:'',
            vaccineType:'', 
           
            
        }
        const [error, setError]= useState('');
        const { firstname,lastname,phoneno,slotsDate,slotsTime,testType}= userInfo;

        
        const handleOnTextChange=(value,fieldName)=>{
            setUserInfo({...userInfo, [fieldName]:value});
                };

    const Vaccine =async(values,formikActions)=>{
       
        const res=await client.post('/registersForVaccination',{
            ...values,
        });
        
            console.log(res.data);
            formikActions.resetForm();
            formikActions.setSubmitting(false)
        }

        

        
        return(
            <KeyboardAvoidingView enabled behavior={Platform.OS==='ios'?'padding':null} style={styles.container}>
            
        {/* {error?<Text style={{color:'red',fontSize:18,textAlign:'center'}}>{error}</Text>:null} */}

        <Formik initialValues={userInfo} validationSchema={validationSchema}
         onSubmit={Vaccine}>
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>{
            
            const {firstname,lastname,phoneno,slotsDate,slotsTime, vaccineType }=values;
              
              return (  
          
            <AnimatedScrollView>
              <FormInput label='First Name' value={firstname}
               onChangeText={handleChange('firstname')}   
              error={touched.firstname && errors.firstname}
              onBlur={handleBlur('firstname')} placeholder='eg., john' />
         
         <FormInput label='last Name'  value={lastname}
         onChangeText={handleChange('lastname')}   
              error={touched.lastname && errors.lastname}
              onBlur={handleBlur('lastname')} placeholder='eg., doe' />
             
              <FormInput label='Phone No'  value={phoneno}
              onChangeText={handleChange('phoneno')}   
              error={touched.phoneno && errors.phoneno}
              onBlur={handleBlur('phoneno')} placeholder='eg., 4582963182' maxLength={10} />
         

         <DropDown1 placeholder='Select Timing'
             onValueChange={handleChange('slotsTime')}
             error={touched.slotsTime && errors.slotsTime}
             onBlur={handleBlur('slotsTime')} label='Select Time' selectedValue={slotsTime}/>
         

           
        {/* <DropDown placeholder='Select Date'
             onValueChange={handleChange('slotsDate')}
             error={touched.slotsDate && errors.slotsDate}
             onBlur={handleBlur('slotsDate')} selectedValue={slotsDate} label='Select Date'/>
           */}

             <DropDown placeholder='Select Vaccine-Type'
             onValueChange={handleChange('vaccineType')}
             error={touched.vaccineType && errors.vaccineType}
             onBlur={handleBlur('vaccineType')} 
             selectedValue={vaccineType}
             label='Select Vaccine Type' />
             
< DatePicker  
   onChangeText={handleChange('slotsDate')}
      error={touched.slotsDate && errors.slotsDate}
             onBlur={handleBlur('slotsDate')} label='Select-Date'
             value={values.slotsDate} />

       
           <FormSubmitButton submitting={isSubmitting} onPress={handleSubmit} title='Book Slot'/>
                </AnimatedScrollView>
            );

            }
         }
        </Formik>

             </KeyboardAvoidingView>

        )
    }

    const styles = StyleSheet.create({
         container:{
            marginBottom:20,
            paddingHorizontal:20,
            width:Dimensions.get('window').width,
            backgroundColor:'#fff', 
        
        },
         picker: {
            width: 450,
           

            borderColor: 'black',
            borderWidth: 1,
            borderRadius:5,
          },
          pickerItem: {
            color: 'red'
          },
          text:{
              fontSize:18,
              color:'black',
              fontWeight:'bold',
              marginBottom:7,

          },
          containers: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'white',
            marginBottom:20,
            borderWidth:1,
            borderColor:'black',
            borderRadius:8,
            paddingTop:1,
            paddingLeft:100,
            color:'black',
            fontSize:18,
            
          },
          Input:{
            borderColor:'black',borderWidth:1,fontSize:16,
                    borderRadius:8,paddingLeft:20,paddingRight:20,marginBottom:10,
                    paddingTop:8,paddingBottom:8,
        },
        text1:{
            fontSize:19,
            fontWeight:'bold',
            marginBottom:5,
        },
    });
    export default VaccineForm;