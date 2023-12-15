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
            backgroundColor: '#0f0f0f',
        },
        pyonda: {
            borderWidth:2,
            borderRadius: 20,
            padding: 8,
            backgroundColor: 'rgba(46,139,87,0.7)'
        }
    })