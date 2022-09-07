import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CheckBoxWithText from '../../components/CheckBoxWithText';
import ErrorMessage from '../../components/ErrorMessage';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledInputWithValidator from '../../components/StyledInputWithValidation';
import StyledText from '../../components/StyledText';
import StyledTitle from '../../components/StyledTitle';
import {styles} from './styles';

const SignUp = ({navigation}: {navigation: any}) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const isValidComparation =
    password !== '' || passwordAgain !== ''
      ? password === passwordAgain
      : false;

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
    </ScrollView>
  );
};

export default SignUp;
