import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import ContestList from './components/ContestList';
import tw from 'twrnc';

console.log('hello world23');
const App: React.FC = () => {
  return (
    <ScrollView>
      <View style={tw`bg-[#0F172A] flex flex-col justify-center items-center`}>
        <ContestList />
      </View>
    </ScrollView>

  );
};

export default App;
