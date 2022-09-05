/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import NavigationStack from './navigation/NavigationStack';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationStack />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
