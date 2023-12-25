import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';


const Navbar: React.FC = () => {
    return (
        <View style={tw`bg-white border-2  w-full mx-[1rem] px-[1rem] py-[2rem]`}>
            <Text style={[tw`text-[4rem] text-center  tracking-widest`, { fontFamily: 'Roboto-Black' }]}>HEADER</Text>
        </View>
    );
};

export default Navbar;
