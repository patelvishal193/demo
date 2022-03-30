import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {Colors} from '../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../constant';
import {LogoSymbol} from '../../utils/svg';
const Splash = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setTimeout(() => {
      navigation.replace(NAVIGATION.DASHBOARD_ROUTER);
    }, 1000);
  }, []);
  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.app_theme}} />
      <StatusBar backgroundColor={Colors.app_theme} />
      <View style={Styles.View_Main}>
        <LogoSymbol style={Styles.LogoSymbol} />
      </View>
    </>
  );
};
export default Splash;
