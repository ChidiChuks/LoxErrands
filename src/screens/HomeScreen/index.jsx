//import libraries
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// personal importations
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

// create a component
const HomeScreen = (props) => {
    return (
        <View>
        
            <HomeMap />

            {/* Covid Message */}
            <CovidMessage />
            {/* Bottom Component*/}
            <HomeSearch />

        </View>
    );
};

//make this component available to the app
export default HomeScreen;
