import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component{
   render() {
      const {header, headerText} =styles;
      
      return(
         <View  style={header}>
        <Text style={headerText}> Simple Calculator</Text>
        </View>
      );
   }
}

const styles=StyleSheet.create({
   header:{
      height:80,
      paddingTop:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF'
    },
    headerText:{
      fontSize:30,
      textAlign:'center'
  
    }
});