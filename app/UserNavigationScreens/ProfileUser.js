import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ProfileUser= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile-Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
    }
});
export default ProfileUser;