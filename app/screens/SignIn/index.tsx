import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CheckBoxWithText from '../../components/CheckBoxWithText';
import ErrorMessage from '../../components/ErrorMessage';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledText from '../../components/StyledText';
import StyledTitle from '../../components/StyledTitle';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  /* navigation.navigate('', {name: 'test'}); */
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageContainer style={styles.container}>
      <ScrollView scrollEnabled={true}>
        <StyledTitle style={styles.title}>Sign In</StyledTitle>
        <View style={styles.form}>
          <StyledInput
            value={email}
            placeholder="Email"
            style={styles.input}
            setValue={setEmail}
          />
          <StyledInput
            value={password}
            style={styles.input}
            placeholder="Password"
            setValue={setPassword}
          />
          <CheckBoxWithText
            text="Remember Me"
            checked={checked}
            setChecked={setChecked}
          />
          <StyledButton
            title="Sign In"
            labelStyle={styles.buttonLabel}
            style={styles.button}
          />
          <ErrorMessage
            message="Account dont exists!"
            setShow={true}
            style={styles.errorMessage}
          />
        </View>
        <View style={styles.bottomContainer}>
          <StyledText>Dont have an Account?</StyledText>
          <StyledText
            onPress={() => navigation.navigate('', {})}
            style={styles.link}>
            Create new one
          </StyledText>
        </View>
      </ScrollView>
    </PageContainer>
  );
};

export default SignIn;
