import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

function App(): JSX.Element {
  return (
    <View style={tw`flex justify-center items-center bg-black h-full w-full`}>
      <Text style={tw`text-white text-4xl`}>Hello World</Text>
    </View>
  );
}

export default App;
