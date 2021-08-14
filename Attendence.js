import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Button,ImageBackground} from 'react-native';
import AppHeader from "../components/AppHeader"
import db from '../config';

export default class HomeScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressed: [],
      absentPressed: [],
    };
  }

  componentDidMount = async() => {
    var class_ref =await db.ref('/').on('value', data => {
      var all_students =  []
      var class_a = data.val();
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
    });
  };

  updateAttendence(roll_no, status) {
    var id = '';
    if (roll_no <= 5) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
  }

goToSummary = ()=>{
    this.props.navigation.navigate('AfterSubmit')
  }


render(){
  var all_students = this.state.all_students;
    
   return (
        <View>
<h1 style={{backgroundColor:"orange",   
     fontSize:50,
     position:"relative",
     bottom:35,
     textAlign:"center",
     fontFamily:"algerian"
     }}> Attendence</h1>        
     <ImageBackground source={require("../assets/10lwotsdl0uvb48.jpg")}
    style={styles.image}>

          <View>
            {all_students.map((index) => (
              <View>
                  <View>
                   <Text style = {styles.text}> Name </Text>
              <Text style = {styles.text2}>1. Rashi</Text>
              <Text style = {styles.text2}>2. Anjali</Text>
              <Text style = {styles.text2}>3. Khushi</Text>
                  
                 
                </View>
                
                  
                  <TouchableOpacity
                  style = {styles.buttonSty}
                    onPress={() => {
                      var presentPressed = this.state.presentPressed;
                      
                      this.setState({ presentPressed: presentPressed });
                      var roll_no  = index +1
                      this.updateAttendence(roll_no, 'present');
                    }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Present</Text>
                    
                    
                  </TouchableOpacity>

                  <TouchableOpacity
                  style = {styles.buttonSty}
                    onPress={() => {
                      var presentPressed = this.state.presentPressed;
                      
                      this.setState({ presentPressed: presentPressed });
                      var roll_no  = index +1
                      this.updateAttendence(roll_no, 'present');
                    }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Present</Text>
                    
                    
                  </TouchableOpacity>


                  <TouchableOpacity
                  style = {styles.buttonSty}
                    onPress={() => {
                      var presentPressed = this.state.presentPressed;
                      
                      this.setState({ presentPressed: presentPressed });
                      var roll_no = index +1
                      this.updateAttendence(roll_no, 'present');
                    }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Present</Text>
                    
                    
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                  style = {styles.buttonSty2}
    
                    
                    onPress={() => {
                      var absentPressed = this.state.absentPressed;
                      
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index+1
                      this.updateAttendence(roll_no, 'absent');
                    }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Absent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  style = {styles.buttonSty2}
    
                    
                    onPress={() => {
                      var absentPressed = this.state.absentPressed;
                      
                      this.setState({ absentPressed: absentPressed });
                      var roll_no
                      this.updateAttendence(roll_no, 'absent');
                    }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Absent</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  style = {styles.buttonSty2}
    
                    
                    onPress={() => {
                      var absentPressed = this.state.absentPressed;
                      
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index +1
                      this.updateAttendence(roll_no, 'absent');
                    }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Absent</Text>
                  </TouchableOpacity>
                </View>
             
            ))}
            <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('AfterSubmit');
              }}>
              <Text style = {styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
          </View>
          </ImageBackground>
          
        </View>
      );
    }
  }




const styles = StyleSheet.create({
buttonSty:{
  borderRadius:4,
  backgroundColor:"green",
  width:55,
  height:20,
  left:120,
  top:12,
  marginBottom:18,
  borderWidth:2
  

},
buttonSty2:{
  borderRadius:4,
  backgroundColor:"red",
  width:55,
  height:20,
  left:180,
  bottom:102,
  marginBottom:18,
  borderWidth:2

},
 image:{
   bottom:70,
    width:315,
    height:430,
    
  },
  text:{
    position:"relative",
    fontSize:30,
    left:50,
    top:100,
    fontFamily:"chiller",
    textDecorationLine:"underline",
    textDecorationStyle:"double",
    fontWeight:"bold"
  },
  text2:{
    position:"relative",
    fontSize:23,
    left:50,
    top:120,
    fontFamily:"chiller",
    marginBottom:10
  },

   submit:{
     textAlign:"center",
     color:"white",
    position:"relative",
    fontSize:23,
    backgroundColor:"orange",
    bottom:100,
    alignSelf:"center",
    fontFamily:"Showcard Gothic",
    marginBottom:10,
    borderRadius:9,
    width:90,
    height:40,
    fontWeight:"bold"
  }

});
