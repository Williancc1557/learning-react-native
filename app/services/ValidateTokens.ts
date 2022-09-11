import AsyncStorage from '@react-native-async-storage/async-storage';

export const validateAccessToken = async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem('accessToken');

  return !!token;
};
