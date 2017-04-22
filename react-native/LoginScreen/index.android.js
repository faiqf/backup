import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import imgLogo from '../images/iconlogin.png';
import MyTextInput from './MyTextInput';
import { diff } from '../utils';

class Aplogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={imgLogo} style={styles.logo}/>
        <MyTextInput />
        <MyTextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent : 'center',
    marginTop:diff
  },
  logo: {
    width : 50 ,
    height: 50
  }
})

export default Aplogin;
