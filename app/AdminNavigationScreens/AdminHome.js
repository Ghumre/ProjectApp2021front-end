import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar, 
  Button,
  Image,
  ScrollView

} from 'react-native';
import AnimatedScrollView from '../NavigatingScreens/AnimatedScrollView';
import ImageUpload from '../component/ImageUpload';
const AdminHome= () => {
  const [covidtracking, setcovidtracking] = useState();

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://covid19.mathdro.id/api/countries/india', requestOptions)
      .then(response => response.json())
      .then(result => setcovidtracking(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
   <SafeAreaView style={styles.container}>
     <AnimatedScrollView>

       <View style={{marginBottom:5,backgroundColor:'#fff',
       paddingTop:10, flexDirection:'row' , justifyContent:"center",
        alignItems:"center" ,}}>

          <View style={{borderRadius:8, flexDirection:'row',paddingLeft:31
        ,justifyContent:'center',alignItems:'center',shadowColor:'#171717',
        shadowOffset:{width:-2,height:4},
        shadowOpacity:25,
        shadowRadius:25,
        elevation:10, }}>
          
          <Image
         style={{height:240, width:100, marginTop:18,marginBottom:7  }}
        source={{
          uri: 'https://thumbs.dreamstime.com/b/vector-cartoon-funny-little-boy-white-background-isolated-129801438.jpg',
        }}
      />

       <ImageUpload style={{backgroundColor:'#fff'}} /></View>
        


       
       </View>
       <View style={{alignItems:"center"}}>
       <Text style={{fontWeight:'bold',alignItems:'center',justifyContent:'center',
       fontSize:25,color:'black',margin:9, alignItems:'center'}}>Live Corona Cases</Text>
      </View>
     
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',}}>
              <View style={styles.cardContainer}>
        <Text style={styles.text1}>Confirmed</Text>
        <Text style={styles.text2}>
               {covidtracking?.confirmed?.value}
          </Text>

        </View>
         <View style={styles.cardContainer}>
          <Text style={styles.text1}>Recovered</Text>
          <Text style={styles.text2}>
            9515218
               </Text>
        </View>
        <View
          style={styles.cardContainer}>
            <Text style={styles.text1}>   Deaths  </Text>
          <Text style={styles.text2}>
            {covidtracking?.deaths?.value}
          </Text>
        </View>
      </View> 
           <ScrollView>
         <View style={{justifyContent:'center',
          alignItems:'center' , 
          backgroundColor:'blue',
         
          paddingBottom:20}}>

         <Image
         style={{height:400, width:300, 
          marginTop:50 ,borderRadius:8,
          shadowColor:'#171717',
          shadowOffset:{width:-2,height:4},
          shadowOpacity:25,
          shadowRadius:25,
          elevation:10,  }}
        source={{
          uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v871batch2-sasi-poster-07_1_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=71a0233c787755c3a22507dcfc410959',
        }}
      />


         <Image
         style={{height:400, 
          width:300, marginTop:50,
        borderRadius:8  }}
        source={{
          uri: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/Tips-to-prevent-coronavirus-transmission-1-scaled.jpg?w=1155&h=5376',
        }}
      />

    


           

         </View>
         </ScrollView>

     </AnimatedScrollView>
   </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
   backgroundColor:'#fff',
  },
    text1:{
        fontWeight:'bold',
        fontSize:20,
        color:'#F17022',
     backgroundColor:'#62C2CC',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:29,
       
    },
    text2:{
        fontSize:17,
        fontWeight:'bold',
        
    },
    cardContainer:{
      backgroundColor: "#fff",
      width: '33%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:8,
borderWidth:1,
borderColor: '#FDB813',
shadowColor:'#171717',
shadowOffset:{width:-2,height:4},
shadowOpacity:55,
shadowRadius:25,
elevation:10,
paddingTop:5,
paddingBottom:5
    },
});
export default AdminHome;