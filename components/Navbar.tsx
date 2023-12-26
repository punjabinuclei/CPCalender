import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Iconify } from 'react-native-iconify';
import tw from 'twrnc';



const Navbar: React.FC = () => {

    const handleButtonPress = () => {
        console.log("Button Pressed")
    }

    return (
        <View style={tw`bg-[#F9B3D1]   w-full mx-[1rem] px-[1rem] py-[2rem]`}>
            <View style={styles.container}>
                <Iconify icon="mingcute:code-fill" color="#C62E65" width="44" height="44" />
                <Text style={[tw`text-[1.8rem] text-center  tracking-tight text-[#C62E65]`, { fontFamily: 'Roboto-Black' }]}>HACK</Text>
                <TouchableOpacity onPress={handleButtonPress}><Iconify icon="ei:navicon" color="#C62E65" width="44" height="44" /></TouchableOpacity>
            </View>
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


export default Navbar;
