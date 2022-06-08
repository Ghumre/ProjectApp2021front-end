import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import AnimatedScrollView from '../NavigatingScreens/AnimatedScrollView';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];    

// urlToImage

const News = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.title}
      </Text>

      
          <Image style={{height: 120, width: '100%'}}
        source={{
          uri: `${item.urlToImage}`,
        }} />
       
      <Text style={styles.content}>
        {item.content}
      </Text>
      <Text style={styles.description}>
       {item.description}
      </Text>
    </View>
  );
  const [data, setdata] = useState();
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=aafeca005025499fbadd432e7e8ffe89',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setdata(result.articles))
      .catch(error => console.log('error', error));
  }, []);

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
    <AnimatedScrollView>
    <SafeAreaView style={styles.container}>
     
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
 </SafeAreaView>
</AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
   
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:8,
    borderWidth:1,
    borderColor:'black',
    shadowColor:'#171717',
    shadowOffset:{width:-2,height:4},
    shadowOpacity:25,
    shadowRadius:25,
    elevation:10,
  },
  title: {
    fontSize:25,
    marginBottom: 10,
    fontWeight:'bold',
    backgroundColor:'#FDB813',
    color:'#fff',
    paddingLeft:8,
  },
  content:{
    fontSize:13,
    marginBottom: 10,
    fontWeight:'bold',
    paddingLeft:8,
    color:'#F17022'
  },
  description:{
    color:'black',
    fontSize:20,
    marginBottom: 10,
    fontWeight:'bold',
    paddingLeft:8,
  }
});

export default News;