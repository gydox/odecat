import React from 'react';
import {StyleSheet,Text,View,TextInput,Image} from 'react-native';

import Loginform from './src/component/loginform';
import Mainpage from './src/component/main';
import Map from './src/component/map';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        {/* <Image source = {require('./src/img/img1.jpg')} style = {styles.logo}/>
      <Loginform/>
       */}
       <Mainpage/>
       {/* <Map/> */}
      </View>
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
    height : 100
  },
  odecatlogo :{
    flex : 1,
    alignItems : 'center',
    padding : 10,
    margin : 10
  }
})
