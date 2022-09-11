import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import CheckBoxWithText from '../../components/CheckBoxWithText';
import ErrorMessage from '../../components/ErrorMessage';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledInputWithEyes from '../../components/StyledInputWithEyes';
import StyledInputWithValidator from '../../components/StyledInputWithValidation';
import StyledText from '../../components/StyledText';
import StyledTitle from '../../components/StyledTitle';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyes, setEyes] = useState(false);

  useSelector((state: any) => console.log(state.user));

  return (
    <PageContainer style={styles.container}>
      <StyledTitle style={styles.title}>Sign In</StyledTitle>
      <View style={styles.form}>
        <StyledInputWithValidator
          validate={true}
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
        />
        <ErrorMessage setShow={true} style={styles.errorMessage}>
          Account does not exists!
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
