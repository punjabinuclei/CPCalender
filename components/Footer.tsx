import React from 'react';
import { Text, TouchableOpacity, View , StyleSheet} from 'react-native';
import { Iconify } from 'react-native-iconify';
import tw from 'twrnc';



const Footer: React.FC = () => {

    const handleButtonPress = () => {
        console.log("Button Pressed")
    }

    return (
        <View style={[tw`bg-[#F9B3D1]  w-full mx-[1rem] px-[1rem] py-[2rem]`,styles.container]}>
            <Text style={[tw`text-2xl text-center font-bold tracking-widest text-[#C62E65]`, { fontFamily: 'Roboto-Black' }]}>FOOTER</Text>
            <TouchableOpacity onPress={handleButtonPress}><Iconify icon="mingcute:code-fill" color="#C62E65" width="44" height="44" /></TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});



export default Footer;
