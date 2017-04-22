import {
  Platform,
  Dimension,
} from 'react-native';

export const diff = (Platform.os === 'ios') ? 20 : 0;
export const width = Dimension.get('window').width;
export const height = Dimension.get('window').height;
