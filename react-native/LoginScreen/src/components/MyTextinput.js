import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension'; // npm react-native-dimension dwi
import { width } from '../utils';

class MyTextInput extends Component {
  render(){
    return (
      <View>
      <TextInput
      placeholder={this.props.placeholderSaya}
      underlineColorAndroid="transparent"
      style={styles.Inputku}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Inputku: {
    height: 50,
    width: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    borderColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
export default MyTextInput;
