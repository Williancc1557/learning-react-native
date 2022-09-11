import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {updateAccessToken, updateRefreshToken} from '../services/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAsyncStorageTokens() {
      dispatch(updateAccessToken(await AsyncStorage.getItem('accessToken')));
      dispatch(updateRefreshToken(await AsyncStorage.getItem('refreshToken')));
    }
    getAsyncStorageTokens();
  });

  const store = useSelector((state: any) => state);

  return (
    <NavigationContainer>
      {!store.user.refreshToken || store.user.refreshToken === '' ? (
        <Unauthorized />
      ) : (
        <Authorized />
      )}
    </NavigationContainer>
  );
};

const Unauthorized = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const Authorized = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
