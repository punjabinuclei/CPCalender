import React from 'react';
import { Text, TouchableOpacity, View , StyleSheet} from 'react-native';
import { Iconify } from 'react-native-iconify';
import tw from 'twrnc';



const Footer: React.FC = () => {

    const handleButtonPress = () => {
        console.log("Button Pressed")
    }

    return (
        <View style={[tw`bg-[#424769] w-full mx-[1rem] mt-[2rem] px-[1rem] py-[2rem]`,styles.container]}>
            <Text style={[tw`text-[2rem] text-center  tracking-widest text-[#f9b17a]`, { fontFamily: 'Roboto-Black' }]}>HACK</Text>
            <TouchableOpacity onPress={handleButtonPress}><Iconify icon="mingcute:code-fill" color="#f9b17a" width="44" height="44" /></TouchableOpacity>
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
