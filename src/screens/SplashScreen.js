import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
// import auth from '@react-native-firebase/auth';
// import { currentDrawerTab, currentTab, saveUserData } from '../redux/Actions/CommonActions';
// import { useDispatch } from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true);
  const [isInternetReachable, setIsInternetReachable] = useState(true);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      console.log('Is internet reachable?', state.isInternetReachable);
      setIsConnected(state.isConnected);
      setIsInternetReachable(state.isInternetReachable);
    });

    // Initial check
    NetInfo.fetch().then(state => {
      console.log(state, 'statestate');
      setIsConnected(state.isConnected);
      setIsInternetReachable(state.isInternetReachable);
    });

    // Dispatch actions and navigate after 3 seconds
    const timer = setTimeout(() => {
      // dispatch(currentTab('home'));
      // dispatch(currentDrawerTab('home'));
      // const user = auth().currentUser;
      // dispatch(saveUserData(user));
      // user ? navigation.dispatch(StackActions.replace('productIndex')) :
      navigation.dispatch(StackActions.replace('bottomTab'));
    }, 3000);

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      {!isConnected || !isInternetReachable ? (
        <View style={styles.networkError}>
          <Text style={styles.networkErrorText}>No Internet Connection</Text>
        </View>
      ) : null}
      <View style={styles.content}>
        <Image
          source={require('../Assets/image/omniIcon.jpeg')}
          style={styles.image}
        />
        <ActivityIndicator
          style={styles.indicator}
          size={'large'}
          color={'#F96900'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  networkError: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  networkErrorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 155,
  },
  indicator: {
    marginTop: 20,
  },
});

export default SplashScreen;
