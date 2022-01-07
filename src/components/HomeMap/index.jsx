//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const HomeMap = () => {
    return (
        <View style={{
            height: 300, 
            backgroundColor: '#a0abff', 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>The HomeMap</Text>
        </View>
    );
};

//make this component available to the app
export default HomeMap;
