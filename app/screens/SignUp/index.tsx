import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import CheckBoxWithText from '../../components/CheckBoxWithText';
import ErrorMessage from '../../components/ErrorMessage';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledInputWithValidator from '../../components/StyledInputWithValidation';
import StyledText from '../../components/StyledText';
import StyledTitle from '../../components/StyledTitle';
import {saveUser} from '../../services/api/auth';
import {updateTokens} from '../../services/userSlice';
import {styles} from './styles';

const SignUp = ({navigation}: {navigation: any}) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const showError = (nameError: string) => {
    setErrorMessage(nameError);
  };

  const checkFields = () => {
    for (const field of [checked, name, email, password]) {
      if (field === '') {
        return false;
      }
    }
    return true;
  };

  const isValidComparation =
    password !== '' || passwordAgain !== ''
      ? password === passwordAgain
      : false;

  const isDisabledSubmitButton =
    password !== passwordAgain || !checked || password === '';

  const submit = async () => {
    if (!checkFields()) {
      return showError('Please, complete all inputs');
    }

    const {body, statusCode} = await saveUser({
      email,
      name,
      password,
    });

    if (statusCode === 409) {
      return showError('Account already exists');
    }

    if (statusCode === 400) {
      return showError("We can't create this account");
    }

    if (statusCode === 500) {
      return showError('Internal server error');
    }

    await AsyncStorage.multiSet([
      ['accessToken', body.accessToken],
      ['refreshToken', body.refreshToken],
    ]);

    dispatch(
      updateTokens({
        refreshToken: body.accessToken,
        accessToken: body.refreshToken,
      }),
    );
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <PageContainer style={styles.container}>
        <StyledTitle style={styles.title}>Sign Up</StyledTitle>
        <View style={styles.form}>
          <StyledInputWithValidator
            value={name}
            placeholder="Name"
            style={styles.input}
            onChangeText={nameChanged => setName(nameChanged)}
            validate={true}
          />
          <StyledInput
            placeholder="Email"
            value={email}
            onChangeText={emailChanged => setEmail(emailChanged)}
            style={styles.input}
          />
          <StyledInput
            value={password}
            style={styles.input}
            placeholder="Password"
            onChangeText={passwordChanged => {
              setPassword(passwordChanged);
            }}
            secureTextEntry={true}
          />
          <StyledInputWithValidator
            value={passwordAgain}
            validate={isValidComparation}
            style={styles.input}
            placeholder="Password Again"
            onChangeText={passwordAgainChanged => {
              setPasswordAgain(passwordAgainChanged);
            }}
            secureTextEntry={true}
          />
          <CheckBoxWithText
            checked={checked}
            setChecked={setChecked}
            style={styles.checkBox}>
            By signin up you accept the{' '}
            <StyledText style={styles.link}>Terms of Willian</StyledText>
          </CheckBoxWithText>
          <StyledButton
            title="Sign Up"
            labelStyle={styles.buttonLabel}
            style={[
              styles.button,
              // eslint-disable-next-line react-native/no-inline-styles
              isDisabledSubmitButton ? {backgroundColor: '#3b6048'} : {},
            ]}
            disabled={isDisabledSubmitButton}
            onpress={() => submit()}
          />
          <ErrorMessage setShow={true} style={styles.errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </View>
        <View style={styles.bottomContainer}>
          <StyledText style={styles.haveAccountText}>
            Already have an Account?{' '}
          </StyledText>
          <StyledText
            onPress={() => navigation.navigate('SignIn', {})}
            style={styles.link}>
            Sign In
          </StyledText>
        </View>
      </PageContainer>
    </ScrollView>
  );
};

export default SignUp;
