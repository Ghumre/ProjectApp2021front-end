import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppForm from './AppForm';
import AdminAppForm from './AdminAppForm';
import { Fontisto } from '@expo/vector-icons';

const Decision = ({navigation:{navigate}}) => {
 
  return (
    
      <View style={{flex:1,justifyContent:'center',alignItems:'center'
    ,backgroundColor:'#00A4CCFF'}}>
      <View style={styles.containar}>
      <View style={{backgroundColor:'#fff',justifyContent:'center'
      ,alignItems:'center',marginTop:50,marginBottom:30,
      borderRadius:8}}> 
         
         <Text style={{color:'#00203FFF',fontSize:35,fontFamily:'notoserif'
        ,marginTop:20,
        fontWeight:'bold'}}>" Who Are You? "</Text>
         
         
         <Image
          style={{height:230, width:300,}}
         source={{
           uri: 'https://previews.123rf.com/images/f1digitals/f1digitals2005/f1digitals200500050/147441612-vector-cartoon-illustration-doctor-is-wearing-surgical-mask-and-holding-injection-in-hand-isolated-o.jpg',
         }}
       />
        <TouchableOpacity style={styles.button} onPress={()=> navigate('AppForm')} >
              <Text style={styles.text1}>I am a User !</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigate('AdminAppForm')}>
              <Text style={styles.text1}>I am a Admin !</Text>
          </TouchableOpacity>
         </View>
         
         {/* <TouchableOpacity style={styles.button} onPress={()=> navigate('AppForm')} >
              <Text style={styles.text1}>I am a User !</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigate('AdminAppForm')}>
              <Text style={styles.text1}>I am a Admin !</Text>
          </TouchableOpacity> */}

        {/* <View style={{marginTop:7,flexDirection:'row',justifyContent:'space-between', shadowColor:'#171717',
      shadowOffset:{width:-2,height:4},
      shadowOpacity:25,
      shadowRadius:25,
      elevation:10,}}>
           <Fontisto name="smiley" size={30} color="black" />    
           <Fontisto name="smiley" size={39} color="black" />
           <Fontisto name="smiley" size={30} color="black" />
         </View>
         */}
      </View>
    
    </View>
   
    
  )
}

export default Decision;

const styles =  StyleSheet.create({
    containar:{
        justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#00A4CCFF',
         borderRadius:15,
         paddingLeft:47,
       paddingRight:47,
       marginBottom:9,
       borderColor:'#fff',
       borderWidth:2,
       shadowColor:'#171717',
       shadowOffset:{width:-2,height:4},
       shadowOpacity:25,
       shadowRadius:25,
       elevation:10,
      

    },
    containar2:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
       paddingTop:70,
       paddingBottom:70,
       paddingLeft:30,
       paddingRight:30,
       borderRadius:25,
       borderColor:'rgba(27,27,51,1)',
       borderWidth:2,
       shadowColor:'#171717',
      shadowOffset:{width:-2,height:4},
      shadowOpacity:25,
      shadowRadius:25,
      elevation:10,
      marginLeft:2,
      marginRight:2,

    },
    text:{
      color:'#fff',
      fontSize:35,
      fontWeight:'bold',
     
    },
    text1:{
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
     
    },
    button:{
      justifyContent:'center',
      alignItems:'center',
      height:55,
      width:270,
      paddingBottom:2,
        backgroundColor:'rgba(27,27,51,1)',
        marginBottom:45,
        borderRadius:12,
        shadowColor:'#171717',
        shadowOffset:{width:-2,height:4},
        shadowOpacity:25,
        shadowRadius:25,
        elevation:10,
    },
    shadowprops:{
      shadowColor:'green',
      shadowOffset:{width:4,height:4},
      shadowOpacity:1,
      shadowRadius:5,
      elevation:6,
    }

});