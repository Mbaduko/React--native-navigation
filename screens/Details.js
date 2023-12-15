// Details.j
import React from "react";
import { View, TouchableOpacity, Text ,StyleSheet } from "react-native";

const Details = ({navigation}) => {
    return (
        <View style={sitile.byose}>
            <TouchableOpacity style={sitile.pyonda}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Details;


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