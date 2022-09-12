import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {updateTokens} from '../services/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAsyncStorageTokens() {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const accessToken = await AsyncStorage.getItem('accessToken');
      dispatch(updateTokens({refreshToken, accessToken}));
    }

    getAsyncStorageTokens();
  });

  const store = useSelector((state: any) => state);
  const {refreshToken} = store.auth.tokens;

  return (
    <NavigationContainer>
      {!refreshToken ? <Unauthorized /> : <Authorized />}
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
