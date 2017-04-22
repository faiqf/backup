import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native':
import imgLogo from '../images/logo.png';
import MyTextInput from './MyTextInput';
import { diff } from '../utils';
import Mybutton from './MyButton';
import * as colors from '../colors'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={imgLogo} style={styles.logo} />
      <MyTextInput placeholderSaya="Username" />
      <MyTextInput placeholderSaya="Password"/>
      <Text>Hai</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: diff,
  },
  logo:{
    width: 50,
    height: 50,
    tintColor: colors.PRIMARY,
  },
});
