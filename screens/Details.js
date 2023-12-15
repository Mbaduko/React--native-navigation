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
        backgroundColor: '#191919',
    },
    pyonda: {
        borderWidth:2,
        borderRadius: 20,
        backgroundColor: 'green'
    }
})