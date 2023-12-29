import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Iconify } from 'react-native-iconify';
import tw from 'twrnc';



const Navbar: React.FC = () => {

    const handleButtonPress = () => {
        console.log("Button Pressed")
    }

    return (
        <View style={tw`bg-[#424769] w-full mx-[1rem] px-[1rem] py-[2rem]`}>
            <View style={styles.container}>
                <Iconify icon="mingcute:code-fill" color="#f9b17a" width="44" height="44" />
                <Text style={[tw`text-[2.9rem] text-center  tracking-tight text-[#f9b17a]`, { fontFamily: 'Roboto-Black' }]}>HACK</Text>
                <TouchableOpacity onPress={handleButtonPress}><Iconify icon="ei:navicon" color="#f9b17a" width="44" height="44" /></TouchableOpacity>
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
