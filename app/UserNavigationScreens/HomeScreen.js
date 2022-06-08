import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar, Button
} from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
import ImageUpload from '../component/ImageUpload';
const Home= () => {
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
       paddingTop:10}}>
       <ImageUpload />
       </View>
       <Text style={{fontWeight:'bold',alignItems:'center',justifyContent:'center',
       fontSize:18,color:'black',marginTop:2,marginBottom:2}}>Tracking Corona Cases</Text>
      
       
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
            {covidtracking?.recovered?.value}
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
        color:'black',
     backgroundColor:'pink',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:29,
       
    },
    text2:{
        fontSize:17,
        fontWeight:'bold',
        
    },
    cardContainer:{
      backgroundColor: '#fff',
      width: '33%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:8,
borderWidth:1,
borderColor:'black',
shadowColor:'#171717',
shadowOffset:{width:-2,height:4},
shadowOpacity:55,
shadowRadius:25,
elevation:10,
paddingTop:5,
paddingBottom:5
    },
});
export default Home;