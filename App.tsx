import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{textAlign: 'center'}}>Main Mage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
