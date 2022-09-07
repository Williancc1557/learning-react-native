import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import React, {useEffect, useState} from 'react';
import SignUp from '../screens/SignUp';
import {validateAccessToken} from '../services/ValidateTokens';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function getAuthorization() {
      setAuthorized(await validateAccessToken());
    }

    getAuthorization();
  });

  return authorized ? <Authorized /> : <Unauthorized />;
};

const Unauthorized = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Authorized = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
