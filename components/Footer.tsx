import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';


const Footer: React.FC = () => {
    return (
        <View style={tw`bg-white border-2  w-full mx-[1rem] px-[1rem] py-[2rem]`}>
            <Text style={tw`text-[4rem] text-center font-bold tracking-widest`}>FOOTER</Text>
        </View>
    );
};

export default Footer;
