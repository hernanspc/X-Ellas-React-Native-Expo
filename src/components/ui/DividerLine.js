import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DividerLine = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
        // marginHorizontal: 8
    },
});

export default DividerLine;
