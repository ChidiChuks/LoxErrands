//import libraries
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// personal importations
import HomeMap from '../../components/HomeMap';

// create a component
const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap />

            {/* Covid Message */}
            {/* Bottom Component*/}
        </View>
    );
};

//make this component available to the app
export default HomeScreen;
