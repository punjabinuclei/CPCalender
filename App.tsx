import React from 'react';
import { ScrollView, View } from 'react-native';

import { useEffect } from 'react';
import { Notifications } from 'react-native-notifications';
import tw from 'twrnc';
import ContestList from './components/ContestList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Registered } from 'react-native-notifications';


console.log('hello world23');

const App: React.FC = () => {

  return (
    <ScrollView style={tw`bg-[#161716]`}>
      <View style={tw` flex flex-col justify-center items-center`}>
        <Navbar />
        <ContestList />
        <Footer />
      </View>
    </ScrollView>

  );
};

export default App;
