import react, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
import imgloading from '../images/loading.gif'
import { width, height, totalSize } from 'react-native-dimension';
import * as colors from '../colors';

class MyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloading: false,
    }
    this.manipulasiOpacity = new Animated.value(0);
    this.tombolAnimasi = new Animated.Value(0);
    this.onpencet = this.onencet.bind(this);
  }

 onpencet() {
   Animated.timing(
     this.tombolAnimasi,
     {
       tovalue: 1,
       duration: 2000,
     },
   ).start(() => this.tombolAnimasi.setValue(0));
   Animated.timing(
     this.tombolAnimasi,
     {
       tovalue: 1,
       duration: 2000,
     },
   ).start();

   this.setState({
     isloading:true,
   });

   setTimeout(()=> {
    this.setstate({ isloading:false });
  }, 2000);
  }

  render() {
    const ubahwidth = this.tombolAnimasi.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [width(90), width(50), width(70)],
    });

    const ubahOpacity = this.tombolAnimasi.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1,0,1],
    })

    return(
      <Animated.View style={{ width:ubahwidth, opacity:ubahOpacity }}>
       <TouchableOpacity onPress{() => alert('mantap')
                         style={styles.tombolku}
       >
       {
        this.state.isloading ?
        <Image source={imgloading} style={style.loadingGif}/>
        :
        <Text><Login</Text>
       }
       </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = Stylesheet.create({
  tombolku: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.PRIMARY,
    width: width(90);
    height: height(10),
  },
  loadingGif: {
    width: height(7.5);
    height: height(7.5);
  },
});

export default MyButton;
