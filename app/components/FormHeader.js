import React from 'react';
import {View,StyleSheet,Text, Animated} from 'react-native';



const FormHeader= ({leftHeading,
    rightHeading,
    leftHeaderTranslateX=40,
    rightHeaderTranslateY=-20,
    rightHeaderOpacity=0,})=>{
    return ( 
        <>
  <View style={styles.container}>

     <Animated.Text style={[styles.header,{transform:[{translateX:leftHeaderTranslateX}]}]}>{leftHeading}</Animated.Text>
     <Animated.Text style={[styles.header,{opacity:rightHeaderOpacity,transform:[{translateY:rightHeaderTranslateY}]}]}>{rightHeading}</Animated.Text>
     <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}></Text>
   </View>
   </>
   );
}


const styles = StyleSheet.create({
    container: {
        
            flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',alignItems:'center'
    },
    header:{
        fontSize:50,fontWeight:'bold',
        color:'black',
        shadowColor:'gray',
        shadowOpacity:100,
        shadowRadius:30,
    },

  });
  

  export default FormHeader;