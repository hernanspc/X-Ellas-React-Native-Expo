import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>ó</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
        marginHorizontal: 8
    },
    text: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 8
    }
});

export default Divider;
