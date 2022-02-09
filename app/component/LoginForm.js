import React, { useState } from 'react';
import { isValidEmail,isValidObjectField,updateError } from '../utils/methods';
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback,
    TouchableWithoutFeedbackBase, View,Dimensions, KeyboardAvoidingView, PlatformColor } from 'react-native';
import FormSubmitButton from '../FormSubmitButton';
import FormInput from './FormInput';
import {Formik} from 'formik';
import * as Yup from 'yup'; 
import client from '../Api/client';
import { StackActions } from '@react-navigation/native';

const validationSchema=Yup.object({
   email:Yup.string().email('Invalid Email-Id!').required('Email is Required!'),
    password:Yup.string().trim().min(8,'Password id too short!').required('Password is required!'),

});

    const LoginForm=({navigation})=>{
        const [userInfo,setUserInfo]=useState({
           email:'',
           password:'',
        });

        const [error, setError]=useState('');
        const {email,password}=userInfo;

        const handleChange=(value,fieldName)=>{
            setUserInfo({...userInfo, [fieldName]:value});
                };

        const isValidForm=()=>{
              if(!isValidObjectField(userInfo)) return updateError('Required All Fields', setError);

              if(!isValidEmail(email)) return updateError('Invalid Email', setError);
              
              if(!password.trim()||password.length<8) return updateError('Password  is too short! ', setError);
              
               return true;
               
        };

        const submitForm=async()=>{
            if(isValidForm()){
                try{
                 const res=await client.post('/sign-in',{...userInfo});
                   console.log(res);
                }catch(error){
                    console.log(error.message);
                }
              
            }
        };


        const login=async(values,formikActions)=>{
       
            const res=await client.post('/sign-in',{
                ...values,
            });
            // if(res.data.success){
            //     setUserInfo({email:'',password:''});
            // }
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
       
        
    };
        return(
            <KeyboardAvoidingView enabled behavior={Platform.OS==='ios'?'padding':null} style={styles.container}>
{/*               
{error?<Text style={{color:'red',fontSize:18,textAlign:'center'}}>{error}</Text>:null} */}

        <Formik initialValues={userInfo} validationSchema={validationSchema}
        onSubmit={login}>
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>{
              
              const {password,email}=values;
            
              return (
             <>
            <FormInput label='Email-Id' autoCapitalize='none'
            onChangeText={handleChange('email')}
            error={touched.email && errors.email}
         onBlur={handleBlur('email')}
            value={email} placeholder='eg., abc@gmail.com'/>   
            
            <FormInput autoCapitalize='none' onChangeText={handleChange('password')}  
            error={touched.password && errors.password}
            onBlur={handleBlur('password')} 
            value={password} label='Password' placeholder='eg.,john23w' maxLength={8} secureTextEntry={true}/>
            
            <FormSubmitButton submitting={isSubmitting} onPress={handleSubmit} title='Login'/>
         </>
            );

              }
            }
    
            </Formik>
                             </KeyboardAvoidingView>

        )
    }

    const styles = StyleSheet.create({
         container:{
            paddingHorizontal:20,
            marginBottom:20,
            width:Dimensions.get('window').width,
         },
        
    });
    export default LoginForm;