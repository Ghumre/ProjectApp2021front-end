import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { StackActions } from '@react-navigation/native';

import client from '../Api/client';
import { StackActions } from '@react-navigation/native';


const ImageUpload = () => {
  const [profileImage, setProfileImage] = useState('');
  const [progress, setProgress] = useState(0);
  // const { token } = props.route.params;

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

 
      const res = await client.post('/upload-profile', formData, {
        headers: {
          Accept: 'application/json',
         'Content-Type': 'multipart/form-data',
          // authorization: `JWT ${token}`  
        },
      });

    // if (res.data.success) {
    //   props.navigation.dispatch(StackActions.replace('UserProfile'));   
    //   }
     
    // console.log(res.data);

    // } catch (error) {
    //   console.log(error.message);
    // }
  };
     
  return (
    <View style={styles.container}>
      <View style={{borderColor:'black',borderWidth:1,
      borderRadius: 188 / 2,}}>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
          {
          profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Text style={styles.uploadBtn}>Select Profile Image</Text>
          )}
   </TouchableOpacity>
       {/* <Text style={styles.skip}>Skip</Text>
        {profileImage ? (
          <Text
            onPress={uploadProfileImage}
            style={[
              styles.skip,
              { backgroundColor: 'green', color: 'white', borderRadius: 8 },
            ]}
          >
            Upload
          </Text>
        ) : null} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'#171717',
       shadowOffset:{width:-2,height:4},
       shadowOpacity:25,
       shadowRadius:25,
       elevation:10,
  },
  uploadBtnContainer: {
    height: 150,
    width: 150,
    borderRadius: 187 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    overflow: 'hidden',
    borderStyle:'dashed',
    paddingHorizontal:2,
    
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default ImageUpload;