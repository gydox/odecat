import React from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';

export default class Loginform extends React.Component {
  render() {
    return (
        <View style = {styles.loginformcontainer}>
            <TextInput underlineColorAndroid = 'transparent' placeholder = 'Email' style = {styles.textinput}/>
            <TextInput underlineColorAndroid = 'transparent' placeholder = 'Password' style = {styles.textinput}/>

            <TouchableOpacity style = {styles.loginbtn}>
                <Text>
                    Log in
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.loginbtn}>
                <Text>
                    Register
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.loginbtn}>
                <Text>
                    Forget password
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    loginformcontainer : {
        alignItems : 'center'
    },
    textinput : {
        color : '#fff',
        alignSelf : 'stretch',
        padding : 12,
        marginBottom : 10,
        backgroundColor : 'rgba(0,0,0,0.5)',
        borderColor : '#ffe',
        borderWidth : 0.6
    },
    loginbtn : {
        backgroundColor : '#ecf0f1',
        alignSelf : 'stretch',
        alignItems : 'center',
        padding : 14,
        marginTop : 10
    }
})

