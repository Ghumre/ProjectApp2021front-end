import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback,
    TouchableWithoutFeedbackBase, View,Dimensions, KeyboardAvoidingView, PlatformColor } from 'react-native';
import FormInput from './FormInput';
import FormSubmitButton from '../FormSubmitButton';
import { isValidEmail,isValidObjectField,updateError } from '../utils/methods';
import client from '../Api/client';

import { StackActions } from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup'; 

const validationSchema=Yup.object({
    firstname:Yup.string().trim().min(3,'Invalid FirstName!').required('FirstName is required!'),
    secondname:Yup.string().trim().min(3,'Invalid LastName!').required('LastName is required!'),
    age:Yup.number().required('Enter Valid Age!').min(1,'Invalid Age!').required('Age is required!'),
    gender:Yup.string().trim().required('Gender is Required!'),
    AdharNo:Yup.number().required('Enter Adhar number!').min(12,'Invalid Adhar Number!').required('Adhar Number Is Required!'),
    phoneno:Yup.number().required('Enter Valid Phone Number!').min(12,'Invalid Phone Number!').required('Phone Number Is Required!'),
    email:Yup.string().email('Invalid EmailId!').required('Email is Required!'),
    username:Yup.string().trim().required('UserName is Required!'),
    password:Yup.string().trim().min(8,'Password id too short!').required('Password is required!'),
});

    const SignUpForm=({navigation})=>{
       const userInfo={
            firstname:'',
            secondname:'',
            age:'',
            gender:'',
            AdharNo:'',
            phoneno:'',
            email:'',
            username:'',
            password:'',
            
        }
        const [error, setError]=useState('');
        const { firstname,secondname,age,gender, AdharNo, phoneno, email,username,
        password}=userInfo;
        const handleOnTextChange=(value,fieldName)=>{
            setUserInfo({...userInfo, [fieldName]:value});
                };

    const signUp=async(values,formikActions)=>{
       
           const res=await client.post('/create-user',{
                ...values,
            });
           
            if(res.data.success){
        const signInRes= await client.post('/sign-in',{email:values.email,
        password:values.password});
        if(signInRes.data.success){
        navigation.dispatch(
                  StackActions.replace('UserProfile', {
                  token: signInRes.data.token,
                  })
         );}
 }

            console.log(res.data);
            formikActions.resetForm();
            formikActions.setSubmitting(false)
       
   }

        
        return(
            <KeyboardAvoidingView enabled behavior={Platform.OS==='ios'?'padding':null} style={styles.container}>
            
        {/* {error?<Text style={{color:'red',fontSize:18,textAlign:'center'}}>{error}</Text>:null} */}

        <Formik initialValues={userInfo} validationSchema={validationSchema}
         onSubmit={signUp}>
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>{
            
            const {firstname,secondname,age,gender, AdharNo, phoneno, email,username,
                password}=values;
        
          return (<ScrollView showsVerticalScrollIndicator={false}>
            <FormInput value={firstname} 
            onChangeText={handleChange('firstname')}   
            label='First Name' error={touched.firstname && errors.firstname}
             onBlur={handleBlur('firstname')} placeholder='eg., john'/>
            

            <FormInput 
            onChangeText={handleChange('secondname')}  
            error={touched.secondname && errors.secondname}
             onBlur={handleBlur('secondname')} 
            label='Last Name' value={secondname} placeholder='eg., doe'/>

            <FormInput label='Age' onChangeText={ handleChange('age')}  
            error={touched.age && errors.age}
            onBlur={handleBlur('age')} 
             value={age} placeholder='eg., 12' maxLength={3}/>

            <FormInput label='Gender' onChangeText={ handleChange('gender')} 
            error={touched.gender && errors.gender}
            onBlur={handleBlur('gender')}  
            value={gender} placeholder='eg., male'/>

            <FormInput label='Email-Id' autoCapitalize='none'  
                onChangeText={ handleChange('email')}
                error={touched.email && errors.email}    
             onBlur={handleBlur('email')}
            value={email} placeholder='eg., abc@gmail.com'/>      

            <FormInput label='Adhar Card Number' onChangeText={handleChange('AdharNo')}   
           error={touched.AdharNo && errors.AdharNo}
           onBlur={handleBlur('AdharNo')}
           value={AdharNo} placeholder='eg.,1234 1234 1234' maxLength={12}/>

            <FormInput label='PhoneNo' onChangeText={handleChange('phoneno')} 
            error={touched.phoneno && errors.phoneno} 
            onBlur={handleBlur('phoneno')}  
             value={phoneno} placeholder='eg., 12345678' maxLength={10}/>

            <FormInput label='User Name' onChangeText={ handleChange('username')} 
            error={touched.username && errors.username}
            onBlur={handleBlur('username')}  
            value={username} placeholder='eg.,doe0pf' maxLength={10}/>

            <FormInput autoCapitalize='none' onChangeText={handleChange('password')}  
            error={touched.password && errors.password}
            onBlur={handleBlur('password')} 
            value={password} label='Password' placeholder='eg.,john23w' maxLength={8} secureTextEntry={true}/>

              <FormSubmitButton submitting={isSubmitting} onPress={handleSubmit} title='Sign Up'/>
            </ScrollView>);

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
         },
        
    });
    export default SignUpForm;