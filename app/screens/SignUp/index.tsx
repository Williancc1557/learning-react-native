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

const SignUp = ({navigation}: {navigation: any}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  return (
    <PageContainer style={styles.container}>
      <StyledTitle style={styles.title}>Sign Up</StyledTitle>
      <View style={styles.form}>
        <StyledInputWithValidator
          value={email}
          placeholder="Email"
          style={styles.input}
          setValue={setEmail}
          validate={maks.email}
        />
        <StyledInput
          value={password}
          style={styles.input}
          placeholder="Password"
          onChangeText={changedValue => setPassword(changedValue)}
          secureTextEntry={true}
        />

        <StyledInput
          value={passwordAgain}
          style={styles.input}
          placeholder="Password Again"
          onChangeText={changedValue => setPasswordAgain(changedValue)}
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
          style={styles.button}
        />
        <ErrorMessage setShow={true} style={styles.errorMessage}>
          Account already exists!
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
  );
};

export default SignUp;
