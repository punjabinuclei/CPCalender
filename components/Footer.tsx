import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import { clsx } from 'clsx';


const Footer: React.FC = () => {
    return (
        <View style={tw`bg-white border-2  w-full mx-[1rem] px-[1rem] py-[2rem]`}>
            <Text style={[tw`text-6xl text-center font-bold tracking-widest`, { fontFamily: 'Roboto-Black' }]}>FOOTER</Text>
        </View>
    );
};

export default Footer;
