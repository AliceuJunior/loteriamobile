// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/routes/StackNavigator';
import { LotteryProvider } from './src/contexts/LotteryContext';

const App = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default App;
