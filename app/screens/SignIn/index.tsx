import React, {useState} from 'react';
import {View} from 'react-native';
import CheckBoxWithText from '../../components/CheckBoxWithText';
import ErrorMessage from '../../components/ErrorMessage';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledInputWithValidator from '../../components/StyledInputWithValidation';
import StyledText from '../../components/StyledText';
import StyledTitle from '../../components/StyledTitle';
import {maks} from '../../enums/masks';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  /* navigation.navigate('', {name: 'test'}); */
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageContainer style={styles.container}>
      <StyledTitle style={styles.title}>Sign In</StyledTitle>
      <View style={styles.form}>
        <StyledInputWithValidator
          validate={maks.email}
          placeholder="Email"
          style={styles.input}
          value={email}
          setValue={setEmail}
        />
        <StyledInput
          value={password}
          style={styles.input}
          placeholder="Password"
          onChangeText={passwordChanged => setPassword(passwordChanged)}
          secureTextEntry={true}
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
          Dont have an Account?
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
