import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
// import { currentDrawerTab, currentTab, saveUserData } from '../redux/Actions/CommonActions';
// import { useDispatch } from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
    // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(currentTab('home'));
    // dispatch(currentDrawerTab('home'));
    setTimeout(() => {
      // const user = auth().currentUser;
      //   dispatch(saveUserData(user));
      // auth().currentUser
      //   ? navigation.dispatch(StackActions.replace('productIndex'))
      //   :
         navigation.dispatch(StackActions.replace('bottomTab'));
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#f5f5f5"}}>
      <View style={{}}>
        <Image
          source={require('../Assets/image/omniIcon.jpeg')}
          style={{height: 150, width: 155}}
        />
      </View>
      <ActivityIndicator style={{marginTop:20}} size={'large'} color={"#F96900"} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
