import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    backgroundColor: Colors.app_theme,
  },
  View_header: {
    padding: 20,
  },
  View_your_balance: {
    padding: 20,
  },
  LogoSymbol: {
    height: 30,
    width: 80,
    alignSelf: 'center',
    marginTop: -28,
  },
  text_your_balance: {
    fontSize: 15,
    fontFamily: Fonts.Regular_font,
    color: Colors.white,
    fontWeight: '400',
  },
  text_your_balance_amount: {
    fontSize: 25,
    fontFamily: Fonts.Regular_font,
    color: Colors.white,
    fontWeight: '700',
  },
  SearchSymbol: {
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginTop: -35,
  },
  VisaSymbol: {
    height: 45,
    width: 35,
  },
  textList1: {
    fontSize: 11,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    fontWeight: '500',
  },
  textList2: {
    fontSize: 17,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    fontWeight: '700',
    marginBottom: 35,
    marginTop: 5,
  },
  textList3: {
    fontSize: 11,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    fontWeight: '500',
  },
  text_finance: {
    fontSize: 11,
    fontFamily: Fonts.Regular_font,
    color: Colors.white,
    fontWeight: '500',
    marginLeft: 20,
    marginBottom: 10,
    flex: 1,
  },
  textList4: {
    fontSize: 11,
    fontFamily: Fonts.Regular_font,
    color: Colors.white,
    fontWeight: '500',
    marginTop: 15,
  },
  View_bottom_Section: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#252626',
    padding: 20,
  },
  View_account: {
    backgroundColor: Colors.app_theme,
    borderRadius: 26,
    flexDirection: 'row',
    padding: 20,
    marginVertical: 15,
  },
  AccountSymbol: {
    width: 50,
    marginTop: 5,
  },
  text_acccount: {
    fontSize: 15,
    fontFamily: Fonts.Regular_font,
    color: Colors.white,
    fontWeight: '500',
  },
  text_acccount2: {
    fontSize: 12,
    fontFamily: Fonts.Regular_font,
    color: '#79767D',
    fontWeight: '400',
    marginTop: 10,
  },
  SparkSymbol: {
    width: 35,
  },
  text_start_invest: {
    fontSize: 15,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    fontWeight: '500',
  },
  text_start_invest2: {
    fontSize: 12,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    fontWeight: '500',
  },
});
