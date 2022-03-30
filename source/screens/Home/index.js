import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../utils/colors';
import Styles from './style';
import images from '../../utils/images';
import {
  AccountSymbol,
  BudgetSymbol,
  DownSymbol,
  FinanceSymbol,
  LogoSymbol,
  PlusSymbol,
  SearchSymbol,
  SparkSymbol,
  StarSymbol,
  VisaSymbol,
} from '../../utils/svg';
const Home = ({navigation, route}) => {
  const [optionList, setOptionList] = useState([
    {
      title: 'Salary',
      amount: '$ 2,230',
      passcode: '** 6917',
      colors: ['#EAEAEA', '#B2D0CE'],
      name: 'My bonuses',
      backgroundColor: '#F2FE8D',
      icon: <StarSymbol />,
    },
    {
      title: 'Savings account',
      amount: '$ 5,466',
      passcode: '** 4552',
      colors: ['#FCFFDF', '#F1FE87'],
      name: 'My budget',
      backgroundColor: '#B2D0CE',
      icon: <BudgetSymbol />,
    },
    {
      title: 'Saving',
      amount: '$ 2,230',
      passcode: '** 6917',
      colors: ['#F2EFF4', '#B8A9C6'],
      name: 'Finance analysis',
      backgroundColor: '#AA9EB7',
      icon: <FinanceSymbol />,
    },
  ]);

  const [isLoadingFinished, setIsLoadingFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingFinished(true);
    }, 1500);
  }, []);
  const renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={item.colors}
        start={{x: 0.8, y: -0.5}}
        end={{x: -0.2, y: 0.4}}
        locations={[0.0, 1]}
        style={{
          padding: 16,
          height: 170,
          width: 150,
          borderRadius: 30,
          marginRight: 15,
        }}>
        <VisaSymbol style={Styles.VisaSymbol} />
        <Text style={Styles.textList1}>{item.title}</Text>
        <Text style={Styles.textList2}>{item.amount}</Text>
        <Text style={Styles.textList3}>{item.passcode}</Text>
      </LinearGradient>
    );
  };
  const renderItem2 = ({item}) => {
    return (
      <View
        style={{
          padding: 16,
          height: 100,
          width: 100,
          borderRadius: 26,
          marginRight: 15,
          backgroundColor: '#252626',
        }}>
        <View
          style={{
            height: 32,
            width: 32,
            borderRadius: 10,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {item.icon}
        </View>
        <Text style={Styles.textList4}>{item.name}</Text>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.app_theme}} />
      <StatusBar backgroundColor={Colors.app_theme} />
      <View style={Styles.View_Main}>
        <View style={Styles.View_header}>
          <Image source={images.avatar} />
          <LogoSymbol style={Styles.LogoSymbol} />
        </View>
        <ScrollView>
          <View style={Styles.View_your_balance}>
            <Text style={Styles.text_your_balance}>Your balance</Text>
            <Text style={Styles.text_your_balance_amount}>$ 7,896</Text>
            <SearchSymbol style={Styles.SearchSymbol} />
          </View>
          <FlatList
            style={{
              marginLeft: 20,
              marginBottom: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={optionList}
            renderItem={renderItem}
          />
          <Text style={Styles.text_finance}>Finance</Text>
          <FlatList
            style={{
              marginLeft: 20,
              marginBottom: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={optionList}
            renderItem={renderItem2}
          />
          <View style={Styles.View_bottom_Section}>
            <View style={{flexDirection: 'row'}}>
              <DownSymbol />
              <Text style={Styles.text_finance}>Current loans</Text>
              <PlusSymbol />
            </View>
            <View style={Styles.View_account}>
              <AccountSymbol style={Styles.AccountSymbol} />
              <View style={{flex: 1}}>
                <Text style={Styles.text_acccount}>Account № 3874825</Text>
                <Text style={Styles.text_acccount2}>Expires 12/22/2023</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={Styles.text_acccount}>$ 78,92</Text>
                <Text style={Styles.text_acccount2}>Rate 3.5%</Text>
              </View>
            </View>

            <LinearGradient
              colors={['#EAEAEA', '#B2D0CE']}
              start={{x: 0.8, y: -0.5}}
              end={{x: -0.2, y: 0.4}}
              locations={[0.0, 1]}
              style={{
                padding: 20,
                borderRadius: 30,
                marginBottom: 20,
                flexDirection: 'row',
              }}>
              <SparkSymbol style={Styles.SparkSymbol} />
              <View style={{marginLeft: 10}}>
                <Text style={Styles.text_start_invest}>
                  Start investing now!
                </Text>
                <Text style={Styles.text_start_invest2}>
                  Protected savings and investment plans
                </Text>
              </View>
            </LinearGradient>
            <View style={{flexDirection: 'row'}}>
              <DownSymbol />
              <Text style={Styles.text_finance}>Currencies and metals</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Home;
