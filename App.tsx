import "react-native-gesture-handler";

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
    </NavigationContainer>
  );
};

export default App;
