import React from 'react';
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import Loginform from './loginform';
export default class Mainpage extends React.Component {
  render() {
    return (
      <ScrollView>
      <TouchableOpacity style = {styles.logo} onPress = { () => <Loginform/>}>
      <Image source = {require('../img/img3.jpeg')} style = {styles.container}/>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.container}>
      <Image source = {require('../img/img4.jpeg')} style = {styles.fooddisplay}/>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.container}>
      <Image source = {require('../img/img4.jpeg')} style = {styles.fooddisplay}/>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.container}>
      <Image source = {require('../img/img4.jpeg')} style = {styles.fooddisplay}/>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.container}>
      <Text>
        pay
      </Text>
      </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent :'center',
    alignSelf:'stretch',
    width : null,
    padding : 20,
  },
  logocontainer :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  logo :{
    width : 100,
    height : 100,
    alignItems : 'center',
    justifyContent : 'center',
    padding : 20,
  },
  fooddisplay:{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  odecatlogo :{
    flex : 1,
    alignItems : 'center',
    padding : 10,
    margin : 10
  }
})