import React from "react";
import {View,TouchableWithoutFeedback,Text,StyleSheet,Animated} from 'react-native';

const FormSelectorButton=({title,backgroundColor,style,onPress})=>{
    return(
        <TouchableWithoutFeedback onPress={onPress}>
             <Animated.View style={[styles.Button,style,{backgroundColor}]}>
               <Text style={styles.title}>{title}</Text>
             </Animated.View>
             
         </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button:{
        height:45,width:'50%',backgroundColor:'#1b1b33',
            justifyContent:'center',alignItems:'center'
    },
    title:{color:'white',fontSize:22},
  });
  
export default FormSelectorButton;