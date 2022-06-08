import axios from "axios";
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import client from '../Api/client';
import AnimatedScrollView from '../NavigatingScreens/AnimatedScrollView';
const Dashboard = () => {
  const [getDatas,setGetDatas]=useState([]);
  

  const getData=async()=>{
    try {
       const {data}= await client.get('/Vaccinations');
    
         return  setGetDatas(data);
        return data;
        console.log(data);
    } catch (error) {
      const {response}=error;
      if(response?.data){
        return response.data;
      }
      return {error:error.message || error};
  
    }
    }
  
  useEffect(()=>{
               getData();
        },[]);
       
        let info=[
        { getDatas}

        ];

        
  return (
    
        <AnimatedScrollView>
    <View style={styles.container} >
      
        {
       
          info.map((Element,key)=>
          
          {
         return   <View style={{justifyContent:'space-between',
            alignItems:'center',flexDirection:'row'}}>
              
              <View style={styles.subContainar} >
               
                <View>
                  <Text style={styles.text}>Patients's First Name:</Text>
                  <Text style={styles.text}>Patients's Last Name:</Text>
                  <Text style={styles.text}>Slots Date:</Text>
                  <Text style={styles.text}>Slots Time:</Text>
                  <Text style={styles.text}>Type Of Vaccine:</Text>
                  <Text style={styles.text}>Patient's PhoneNo:</Text>
                </View>
                <View >
            <Text style={styles.text}>{Element.getDatas.firstname} </Text>
              <Text style={styles.text}>{Element.getDatas.lastname}</Text>
              <Text style={styles.text}>{Element.getDatas.slotsDate}</Text>
              <Text style={styles.text}>{Element.getDatas.slotsTime}</Text>
              <Text style={styles.text}>{Element.getDatas.vaccineType}</Text>
              <Text style={styles.text}>{Element.getDatas.phoneno}</Text>
          </View>
              
             
             
              </View>
            </View>
          }
          )
        }
      <View style={{justifyContent:'space-between',
            alignItems:'center',flexDirection:'row',marginTop:10}}>
              
              <View style={styles.subContainar} >
               
                <View>
                  <Text style={styles.text}>Patients's First Name:</Text>
                  <Text style={styles.text}>Patients's Last Name:</Text>
                  <Text style={styles.text}>Slots Date:</Text>
                  <Text style={styles.text}>Slots Time:</Text>
                  <Text style={styles.text}>Type Of Vaccine:</Text>
                  <Text style={styles.text}>Patient's PhoneNo:</Text>
                </View>
                <View >
            <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
          </View>
              
             
             
              </View>
            </View>
            <View style={{justifyContent:'space-between',
            alignItems:'center',flexDirection:'row',marginTop:10}}>
              
              <View style={styles.subContainar} >
               
                <View>
                  <Text style={styles.text}>Patients's First Name:</Text>
                  <Text style={styles.text}>Patients's Last Name:</Text>
                  <Text style={styles.text}>Slots Date:</Text>
                  <Text style={styles.text}>Slots Time:</Text>
                  <Text style={styles.text}>Type Of Vaccine:</Text>
                  <Text style={styles.text}>Patient's PhoneNo:</Text>
                </View>
                <View >
            <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
          </View>
              
             
             
              </View>
            </View>
            <View style={{justifyContent:'space-between',
            alignItems:'center',flexDirection:'row',marginTop:10}}>
              
              <View style={styles.subContainar} >
               
                <View>
                  <Text style={styles.text}>Patients's First Name:</Text>
                  <Text style={styles.text}>Patients's Last Name:</Text>
                  <Text style={styles.text}>Slots Date:</Text>
                  <Text style={styles.text}>Slots Time:</Text>
                  <Text style={styles.text}>Type Of Vaccine:</Text>
                  <Text style={styles.text}>Patient's PhoneNo:</Text>
                </View>
                <View >
            <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
              <Text style={styles.text}></Text>
          </View>
              
             
             
              </View>
            </View>
     
      </View>
      </AnimatedScrollView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
    alignItems: "center",
    justifyContent: "center",
    marginBottom:15,
   marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  text:{
      
       color:'black',
       marginBottom:4,
       marginRight:11,
  },
  subContainar:{
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:8,
    borderWidth:1,
    borderColor:'black',
    shadowColor:'#171717',
    shadowOffset:{width:-2,height:4},
    shadowOpacity:25,
    shadowRadius:25,
    elevation:10,
    flex:1,
   marginHorizontal:7,
   paddingHorizontal:10,

  }
  
});