import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>🏫  School      Attendence</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: "#fee949",
    position:"relative",
    bottom:19.8,
  },
  text:{
    padding: 19,
    
    fontSize: 30.4,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white",
    fontFamily:"algerian"
  }
});

