import React, {useState} from 'react';
import {View} from 'react-native';
import PageContainer from '../../components/PageContainer';
import StyledInput from '../../components/StyledInput';
import StyledTitle from '../../components/StyledTitle';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  /* navigation.navigate('', {name: 'test'}); */
  const [email, setEmail] = useState('');
  return (
    <PageContainer style={styles.container}>
      <StyledTitle style={styles.title}>Sign In</StyledTitle>
      <View style={styles.form}>
        <StyledInput value={email} placeholder="Email" setValue={setEmail} />
      </View>
    </PageContainer>
  );
};

export default SignIn;
