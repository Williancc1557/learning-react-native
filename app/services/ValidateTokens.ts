import AsyncStorage from '@react-native-async-storage/async-storage';

export const validateAccessToken = async (): Promise<boolean> => {
  await AsyncStorage.removeItem('accessToken');
  const token = await AsyncStorage.getItem('accessToken');

  return !!token;
};
