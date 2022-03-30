/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  BackHandler,
  YellowBox,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NAVIGATION} from '../../constant';
import {Fonts} from '../../utils/fonts';
import {Colors} from '../../utils/colors';

const Tab = createBottomTabNavigator();

///////////////////////////////////////////////////////////////

import {CustomLoader} from '../../component';
import Splash from '../../screens/Splash';
import Home from '../../screens/Home';
import {
  CartTabSymbol,
  ChatTabSymbol,
  HomeTabSymbol,
  NotificationTabSymbol,
  WalletTabSymbol,
} from '../../utils/svg';

export default DashboardRouter = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);

  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.app_theme,
          height: 60,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          return (
            <>
              <TouchableOpacity onPress={onPress} style={Styles.View_main}>
                {route.name == NAVIGATION.HOME ? (
                  <HomeTabSymbol
                    style={Styles.TabHomeSymbol}
                    fill={isFocused ? Colors.light_green : Colors.white}
                  />
                ) : route.name == NAVIGATION.CART ? (
                  <CartTabSymbol
                    style={Styles.TabHomeSymbol}
                    fill={isFocused ? Colors.light_green : Colors.white}
                  />
                ) : route.name == NAVIGATION.WALLET ? (
                  <WalletTabSymbol
                    style={Styles.TabHomeSymbol}
                    fill={isFocused ? Colors.light_green : Colors.white}
                  />
                ) : route.name == NAVIGATION.CHAT ? (
                  <ChatTabSymbol
                    style={Styles.TabHomeSymbol}
                    fill={isFocused ? Colors.light_green : Colors.white}
                  />
                ) : (
                  <NotificationTabSymbol
                    style={Styles.TabHomeSymbol}
                    fill={isFocused ? Colors.light_green : Colors.white}
                  />
                )}
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    );
  }
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name={NAVIGATION.HOME} component={Home} />
        <Tab.Screen name={NAVIGATION.CART} component={Home} />
        <Tab.Screen name={NAVIGATION.WALLET} component={Home} />
        <Tab.Screen name={NAVIGATION.CHAT} component={Home} />
        <Tab.Screen name={NAVIGATION.NOTIFICATION} component={Home} />
      </Tab.Navigator>
    </>
  );
};

const Styles = StyleSheet.create({
  View_main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabHomeSymbol: {
    height: 25,
    width: 25,
  },
});
