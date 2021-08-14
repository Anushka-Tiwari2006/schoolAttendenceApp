import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground} from 'react-native';
import db from '../config';


class AfterSubmit extends React.Component{
 constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getTodaysDate(){
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
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('/').on('value',(data)=>{
      var class_a = data.val();
      var present_students = []
      var absent_students = []
      for(var i in class_a){
        if(class_a[i][today] === 'present'){
          present_students.push(class_a[i])
        }
        if(class_a[i][today] === 'absent'){
          absent_students.push(class_a[i])
        }
      }

      present_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
  
      absent_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        present_students : present_students,
        absent_students : absent_students
      })
    })
  };

  render() {
    return (
      <View >
      <h1 style={{backgroundColor:"orange",   
     fontSize:50,
     position:"relative",
     bottom:35,
     textAlign:"center",
     fontFamily:"algerian"
     }}> Summary</h1>   
      <ImageBackground source={require("../assets/d721a5b21847b606d8a5e0e260d3e1aa.jpg")}
      style={styles.image}>
        <View style={{ flex: 0.1 }}>
          
        </View>
        
        <View style={styles.present}>
          {
            this.state.present_students.map((student, index)=>(
                <Text style={{fontSize:18}}>{student.name}</Text>
              )
            )
          }
        </View>
        

        <View style={styles.absent}>
        </View>
        <View >
         <Text> Total: 3 students </Text>
         
          <Text>Present: {this.state.present_students.length}</Text>
          <Text>Absent: {this.state.absent_students.length}</Text>
          
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  present: {
  
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
  },
  absent :{
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
  },
  
  image:{
  bottom:70,
    width:310,
    height:520,
    left:5
    
  },

});


export default AfterSubmit;