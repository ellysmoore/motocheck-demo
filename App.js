import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Mainstack from './src/navigations/Mainstack';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Mainstack />
    </NavigationContainer>

  );
}

