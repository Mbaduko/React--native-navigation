    // Home.js
    import React from "react";
    import { View, Text, TouchableOpacity,StyleSheet } from "react-native";

    const Home = ({navigation}) => {
        return (
            <View style={sitile.byose}>
                <TouchableOpacity
                    style={sitile.pyonda}
                    onPress={() => navigation.navigate('Details')}
                >
                <Text>Go to Details</Text>
                </TouchableOpacity>
            </View>
        );    
    }
    export default Home;

    const sitile = StyleSheet.create({
        byose : {
            flex :1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#191919',
        },
        pyonda: {
            borderWidth:2,
            borderRadius: 20,
            backgroundColor: 'green'
        }
    })