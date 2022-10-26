import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header({ title }) {
    const image = require('../assets/splash.png');
  
    return (
         
      <View style={styles.header} >

            <Text style={styles.headerText}>{title}</Text>
            <Image style={styles.logo}
               source={image} 
            />
          </View>
       

    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'Gothic-Bold',
        
        fontSize: 20,
        color: '#151515',
       
        
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    header: {
        flex: 1,
        width: '100%',
        height: '100%', // this view should take up 100% of component given to us
        flexDirection: 'row', // main axis
        alignItems: 'center',  // cross axis ie center vertically
        justifyContent: 'space-around',
   },
   
    // icon: {
    //       width: 30,
    //       height: 30,
    //       borderRadius: 15,
    //       position: 'absolute',
    //       left: 250
    // },
     logo: {
        width: 40,
        height: 40,
        borderRadius: 20
     //    marginLeft: 30
      }
})