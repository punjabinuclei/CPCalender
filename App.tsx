import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import ContestList from './components/ContestList';
import Navbar from './components/Navbar';
import tw from 'twrnc';
import Footer from './components/Footer';

console.log('hello world23');
const App: React.FC = () => {
  return (
    <ScrollView style={tw`bg-[#F9B3D1]`}>
      <View style={tw` flex flex-col justify-center items-center`}>
        <Navbar />
        <ContestList />
        <Footer />
      </View>
    </ScrollView>

  );
};

export default App;
