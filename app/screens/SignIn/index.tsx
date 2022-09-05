import React from 'react';
import {View} from 'react-native';
import PageContainer from '../../components/PageContainer';
import {styles} from './styles';

const SignIn = ({navigation}: {navigation: any}) => {
  /* navigation.navigate('', {name: 'test'}); */
  return (
    <PageContainer style={styles.container}>
      <View style={styles.form} />
    </PageContainer>
  );
};

export default SignIn;
