import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const UserProfile = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View></>
    
  );
};

export default UserProfile;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
    }
});
