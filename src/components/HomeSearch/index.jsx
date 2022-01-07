//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const HomeSearch = () => {
    return (
        <View style={styles.container}>
            <Text>HomeSearch</Text>
            {/* Input Box */}
            {/* Previous Destination */}
            {/* Home Destination */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeSearch;
