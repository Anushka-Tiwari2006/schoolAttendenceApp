import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from "./screens/HomeScreen"
import AfterSubmit from "./screens/AfterSubmit"
import Attendence from "./screens/Attendence"
import Results from "./screens/Results"
import TimeTable from "./screens/TimeTable"


export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
 HomeScreen:HomeScreen,
 Attendence:Attendence,
 AfterSubmit:AfterSubmit,
 
 
});

const AppContainer = createAppContainer(AppNavigator);

