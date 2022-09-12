import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CheckBoxWithText from '../../components/CheckBoxWithText';
import ErrorMessage from '../../components/ErrorMessage';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledInputWithEyes from '../../components/StyledInputWithEyes';
import StyledText from '../../components/StyledText';
import StyledTitle from '../../components/StyledTitle';
import {signIn} from '../../services/api/auth';
import {rememberAccount, updateTokens} from '../../services/authSlice';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  const autoComplete = useSelector((state: any) => state.auth.rememberAccount);
  const [checked, setChecked] = useState(autoComplete.enabled);
  const [email, setEmail] = useState(autoComplete.email || '');
  const [password, setPassword] = useState(autoComplete.password || '');
  const [eyes, setEyes] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (nameError: string) => {
    setErrorMessage(nameError);
  };

  const checkFields = () => {
    for (const field of [email, password]) {
      if (field === '') {
        return false;
      }
    }
    return true;
  };

  const dispatch = useDispatch();

  const submit = async () => {
    if (!checkFields()) {
      return showError('Please, complete all fields');
    }

    const {body, statusCode} = await signIn({
      email,
      password,
    });

    console.log(body);

    if (statusCode === 400) {
      return showError("We don't can find this account");
    }

    if (statusCode === 500) {
      return showError('Internal server error');
    }

    dispatch(
      updateTokens({
        refreshToken: body.refreshToken,
      }),
    );

    await AsyncStorage.setItem('refreshToken', body.refreshToken);
    if (checked) {
      dispatch(
        rememberAccount({
          email,
          password,
          enabled: checked,
        }),
      );

      await AsyncStorage.multiSet([
        ['emailComplet', email],
        ['passwordComplet', password],
        ['enabledComplet', String(checked)],
      ]);
    } else {
      await AsyncStorage.multiRemove(['emailComplet', 'passwordComplet']);
      dispatch(rememberAccount({email: null, password: null, enabled: false}));
    }
  };

  return (
    <PageContainer style={styles.container}>
      <StyledTitle style={styles.title}>Sign In</StyledTitle>
      <View style={styles.form}>
        <StyledInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={emailChanged => setEmail(emailChanged)}
        />
        <StyledInputWithEyes
          value={password}
          style={styles.input}
          placeholder="Password Again"
          onChangeText={passwordChanged => {
            setPassword(passwordChanged);
          }}
          secureTextEntry={true}
          eyes={eyes}
          setEyes={setEyes}
        />
        <CheckBoxWithText
          checked={checked}
          setChecked={setChecked}
          style={styles.checkBox}>
          Remember Me
        </CheckBoxWithText>
        <StyledButton
          title="Sign In"
          labelStyle={styles.buttonLabel}
          style={styles.button}
          onpress={() => submit()}
        />
        <ErrorMessage setShow={true} style={styles.errorMessage}>
          {errorMessage}
        </ErrorMessage>
      </View>
      <View style={styles.bottomContainer}>
        <StyledText style={styles.haveAccountText}>
          Dont have an Account?{' '}
        </StyledText>
        <StyledText
          onPress={() => navigation.navigate('SignUp', {})}
          style={styles.link}>
          Create new one
        </StyledText>
      </View>
    </PageContainer>
  );
};

export default SignIn;
