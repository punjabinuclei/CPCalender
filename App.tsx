import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import ContestList from './components/ContestList';
import tw from 'twrnc';

console.log('hello world23');
const App: React.FC = () => {
  return (
    <ScrollView style={tw`bg-[#9381ff]`}>
      <View style={tw` flex flex-col justify-center items-center`}>
        <ContestList />
      </View>
    </ScrollView>

  );
};

export default App;
