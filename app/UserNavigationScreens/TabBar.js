import { View, Text, Dimensions,StyleSheet , Animated} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Tab from './Tab';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTabBar } from '../context/TabBarProvider';

const width= Dimensions.get('screen');
const TabBar = ({state, navigation}) => {
  const[selected, setSelected]=useState('Home');
    const { routes }= state ;
    const renderColor=(currentTab)=>( currentTab=== selected?'blue':'white');
    const handlePress=(activeTab, index)=>{
      if (state.index !== index) {setSelected(activeTab);
       navigation.navigate(activeTab);}

    };
    const {showTabBar}= useTabBar();
   
    const animation=useRef(new Animated.Value(0)).current;
  
    const toggleTabBar=()=>{
    if(showTabBar) {
      Animated.timing(animation,{
       toValue:0,
       duration:600,
       useNativeDriver:true,
     }).start();
    }else{
      Animated.timing(animation,{
        toValue:100,
        duration:600,
        useNativeDriver:true,
      }).start();
     }
   }
    
   
   useEffect(()=>{
     toggleTabBar();
    },[showTabBar]);

    return (
    <View style={styles.wrapper}> 
     <Animated.View style={[styles.container,{transform:[{translateY:animation}]}]}>
       {
         routes.map((route,index)=><Tab tab ={route} 
          icon={route.params.icon} 
          onPress={()=> handlePress(route.name, index)}
           color={renderColor(route.name)} 
          //  backgroundColor={renderBackColor(route.name)}
         key={route.key}/>)
       }
     </Animated.View>
    </View>
  )
};

const styles=StyleSheet.create({
  wrapper:{
    position:'absolute',
    bottom:20,
   alignItems:'center',
    justifyContent:'center',
    // paddingLeft:7,
    // paddingRight:7,
    paddingHorizontal:7,
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'rgba(27,27,51,1)',
    width:345,
    borderRadius:12,
    color:'#fff',
    elevation:4,

    
  },
});

export default TabBar;