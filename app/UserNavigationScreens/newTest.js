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
import DropDown1 from './DropDownFiles/TimeDropDown';
import TestDropDown from './DropDownFiles/TestDropDown';
import DropDown from './DropDownFiles/DropDowns';
import DatePicker from './DropDownFiles/DatePicker';
const validationSchema=Yup.object({
    firstname:Yup.string().trim().min(3,'Invalid FirstName!').required('FirstName is required!'),
    lastname:Yup.string().trim().min(3,'Invalid LastName!').required('LastName is required!'),
    phoneno:Yup.number().required('Enter Valid Phone Number!').min(12,'Invalid Phone Number!').required('Phone Number Is Required!'),
    testType:Yup.string().trim().required('This is required!'), 
   slotsTime:Yup.string().trim().required('This is required!'), 
   // slotsDate:Yup.string().trim().required('This is required!'), 
   slotsDate:Yup.string().trim().required('This is required!'),


});

    const TestForm =()=>{
        const userInfo={
            firstname:'',
            lastname:'',
            slotsTime:'',
            slotsDate:'',
            testType:'',
            phoneno:'',
            
        }
        const [error, setError]= useState('');
        const { firstname,lastname, phoneno,slotsDate,slotsTime,testType}= userInfo;

        
        const handleOnTextChange=(value,fieldName)=>{
            setUserInfo({...userInfo, [fieldName]:value});
                };

    const test =async(values,formikActions)=>{
       
        const res=await client.post('/Testing',{
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
         onSubmit={test}>
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting,setFieldValue})=>{
            
            const {firstname,lastname, phoneno,slotsDate,slotsTime,testType}=values;
              
              return (  
          
            <AnimatedScrollView>
              <FormInput value={firstname} 
            onChangeText={handleChange('firstname')}   
            label='First Name' error={touched.firstname && errors.firstname}
             onBlur={handleBlur('firstname')} placeholder='eg., john'/>
            
            <FormInput value={lastname} 
            onChangeText={handleChange('lastname')}   
            label='Last Name' error={touched.lastname && errors.lastname}
             onBlur={handleBlur('lastname')} placeholder='eg.,doe'/>

            <FormInput label='PhoneNo' onChangeText={handleChange('phoneno')} 
            error={touched.phoneno && errors.phoneno} 
            onBlur={handleBlur('phoneno')}  
             value={phoneno} placeholder='eg., 12345678' maxLength={10}/>

           
         <DropDown1 placeholder='Select Timing'
             onValueChange={handleChange('slotsTime')}
             error={touched.slotsTime && errors.slotsTime}
             onBlur={handleBlur('slotsTime')} label='Select Time' selectedValue={slotsTime}/>
         
         <TestDropDown placeholder='Select Test-Type'
             onValueChange={handleChange('testType')}
             error={touched.testType && errors.testType}
             onBlur={handleBlur('testType')} 
             selectedValue={testType}
             label='Select Test Type'/>

             {/* <DropDown placeholder='Select Date'
             onValueChange={handleChange('slotsDate')}
             error={touched.slotsDate && errors.slotsDate}
             onBlur={handleBlur('slotsDate')} selectedValue={slotsDate} label='Select Date'/> */}
     
   < DatePicker  
   onChangeText={handleChange('slotsDate')}
             error={touched.slotsDate && errors.slotsDate}
             onBlur={handleBlur('slotsDate')} label='Select-Date'
             value={values.slotsDate} />

             {/* <MyForm values={slotsDate} error={touched.slotsDate && errors.slotsDate}
             onBlur={handleBlur('slotsDate')} setFieldValue={slotsDate} value={slotsDate}
             onValueChange={handleChange('slotsDate')} setFieldValue={slotsDate} label='Select Date' /> */}

            
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
            backgroundColor:'white',
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
    });
    export default TestForm;