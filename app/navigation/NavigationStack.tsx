import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import {useDispatch, useSelector} from 'react-redux';
import {
  rememberAccount,
  updateAccess,
  updateTokens,
} from '../services/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createAccessToken, isValidAccessToken} from '../services/api/auth';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const dispatch = useDispatch();

  React.useMemo(() => {
    (async () => {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const accessToken = await AsyncStorage.getItem('accessToken');

      await AsyncStorage.setItem('accessToken', accessToken!);
      dispatch(updateTokens({refreshToken, accessToken}));

      if (refreshToken) {
        dispatch(updateAccess(true));
      }
    })();
  }, [dispatch]);

  const store = useSelector((state: any) => state);
  const authorization = store.auth.access;

  return (
    <NavigationContainer>
      {!authorization ? <Unauthorized /> : <Authorized />}
    </NavigationContainer>
  );
};

const Unauthorized = () => {
  const dispatch = useDispatch();

  React.useMemo(() => {
    (async () => {
      const emailComplet = await AsyncStorage.getItem('emailComplet');
      const passwordComplet = await AsyncStorage.getItem('passwordComplet');
      const enabledComplet = await AsyncStorage.getItem('enabledComplet');

      dispatch(
        rememberAccount({
          email: emailComplet,
          password: passwordComplet,
          enabled: Boolean(enabledComplet),
        }),
      );
    })();
  }, [dispatch]);

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
  const dispatch = useDispatch();

  const {refreshToken, accessToken} = useSelector(
    (state: any) => state.auth.tokens,
  );

  useMemo(() => {
    (async () => {
      if (!(await isValidAccessToken({accessToken: accessToken!}))) {
        const {body, statusCode} = await createAccessToken({
          refreshToken,
        });

        if (statusCode !== 200) {
          return dispatch(updateAccess(false));
        }

        await AsyncStorage.setItem('accessToken', body.accessToken);
      }

      dispatch(updateAccess(true));
    })();
  }, [dispatch, accessToken, refreshToken]);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
