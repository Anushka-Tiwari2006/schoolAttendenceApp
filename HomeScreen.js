import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Header,ImageBackground} from 'react-native';

import AppHeader from '../components/AppHeader';


export default class HomeScreen extends Component{
  render(){
    return(
      <View style = {styles.backgroundSty}>
      <AppHeader />
       <ImageBackground source={require("../assets/cartoon_school_children_cute_design_vector_545757.jpg")} style={styles.image}>
      <TouchableOpacity style = {styles.buttonSty}>
      <Text style={{
        textAlign:"center",
        fontSize:20,
        position:"relative",
        top:10,
        color:"yellow"
        }}> Results </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonSty}>
       <Text style={{
         textAlign:"center",
         fontSize:20,
         position:"relative",
         top:10,
         color:"yellow"
         }}
         onPress={() =>this.props.navigation.navigate("Attendence")}
         > Attendence </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonSty}>
       <Text style={{textAlign:"center",
       fontSize:20,
       position:"relative",
       top:10,
       color:"yellow"
       }}> Time-Table </Text>
      </TouchableOpacity>
    </ImageBackground>
     
      </View>
    )
  }
}
 
const styles = StyleSheet.create({

  image:{
   bottom:20,
    width:333,
    height:400 
  },
  buttonSty:{
     borderRadius:10,
    backgroundColor:"#DC143C",
    marginBottom:40,
    width:120,
    height:50,
    left:110,
    top:20,
    borderWidth:4,
    borderColor:"orange"
    
  }
});
