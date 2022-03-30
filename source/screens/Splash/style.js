import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.app_theme,
  },
  LogoSymbol: {
    height: 100,
    width: 80,
  },
});
