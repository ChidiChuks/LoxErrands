import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const CovidMessage = () => {
  return (
    <>
    <View style={styles.container}>
        <Text style={styles.title}>Travel only if necessary</Text>
        <Text style={styles.text}>Keep in mind that this method is blocking and might incur performance penalties. Subsequent calls will use cache however.</Text>
        <Text style={styles.learnMore}>Learn more</Text>
    </View>
    </>
  );
}

export default CovidMessage;