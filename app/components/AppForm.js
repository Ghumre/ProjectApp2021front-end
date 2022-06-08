import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase, View,Dimensions ,Animated} from 'react-native';
import FormHeader from './FormHeader';
import FormSelectorButton from './FormSelectorButton';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import axios from 'axios';
import ImageUpload from './ImageUpload';

const {width}= Dimensions.get('window'); 

export default function AppForm ({navigation,route}) {
  const animation=useRef(new Animated.Value(0)).current;

  const scrollView=useRef();
const fetchApi=async()=>{
 try{
   const res= await axios.get('http://192.168.43.85:8000/');
 console.log(res.data);
}
 catch(error){
    console.log(error.message);
 }
};

useEffect(()=>{
    fetchApi();
},[])


  const rightHeaderOpacity= animation.interpolate({
    inputRange:[0,width],
    outputRange:[1,0],
  });

  const leftHeaderTranslateX= animation.interpolate({
    inputRange:[0,width],
    outputRange:[1,40],
  });

  const rightHeaderTranslateY= animation.interpolate({
    inputRange:[0,width],
    outputRange:[1,-20],
  });

  const loginColorInterpolate= animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,1)','rgba(27,27,51,0.4)'],
  });

  const signUpColorInterpolate= animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,0.4)','rgba(27,27,51,1)'],
  });

//  const ScrollView=ScrollView.current.scrollToEnd();
  return ( 
       <View style={{ flex:1, paddingTop:120,}}>
         <View style={{height:80}}>
          <FormHeader leftHeading='Welcome ' rightHeading='Back'
           rightHeaderOpacity={rightHeaderOpacity}
           leftHeaderTranslateX={leftHeaderTranslateX}
           rightHeaderTranslateY={rightHeaderTranslateY}/>
         </View>
         <View style={{flexDirection:'row',paddingHorizontal:20, marginBottom:20}} >
          <FormSelectorButton style={styles.borderLeft} 
          onPress={() => scrollView.current.scrollTo({x:0})} 
          backgroundColor={loginColorInterpolate} title={'Login'}/>

          <FormSelectorButton  
          style={styles.borderRight} 
          onPress={()=>scrollView.current.scrollTo({x:width})} 
          backgroundColor={signUpColorInterpolate} title={'Sign Up'}/>
         </View>
                 
         <ScrollView   
         ref={scrollView}
         horizontal pagingEnabled showsHorizontalScrollIndicator={false} 
         scrollEventThrottle={16}
         onScroll={Animated.event([{nativeEvent:{contentOffset:{x: animation}}}],
          {useNativeDriver:false})}  
         >
           <LoginForm navigation={navigation}/>
           <SignUpForm navigation={navigation}/>
         </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
  },
  borderRight:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
  }
});
