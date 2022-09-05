import React, {useState} from 'react';
import {View} from 'react-native';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import StyledCheckBox from '../../components/StyledCheckBox';
import StyledInput from '../../components/StyledInput';
import StyledTitle from '../../components/StyledTitle';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  /* navigation.navigate('', {name: 'test'}); */
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <PageContainer style={styles.container}>
      <StyledTitle style={styles.title}>Sign In</StyledTitle>
      <View style={styles.form}>
        <StyledInput value={email} placeholder="Email" setValue={setEmail} />
        <StyledButton title="Sign In" />
        <StyledCheckBox checked={checked} setChecked={setChecked} />
      </View>
    </PageContainer>
  );
};

export default SignIn;
