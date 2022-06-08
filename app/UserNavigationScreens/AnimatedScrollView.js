import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useTabBar } from '../context/TabBarProvider';


let offsetY=0;
const AnimatedScrollView = ({children}) => {
    const {setShowTabBar}=useTabBar();
  return (
    <ScrollView showsVerticalScrollIndicator={false}  onScroll={({nativeEvent})=>{
        const newOffset= nativeEvent.contentOffset.y;
        const distance= offsetY < newOffset? setShowTabBar(false):setShowTabBar(true);
        offsetY=newOffset
    }}>
        {children}
    </ScrollView>
  )
}

export default AnimatedScrollView;

const styles = StyleSheet.create({});