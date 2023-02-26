import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import Colors from '../resources/constants/Colors'

const Splash = () => {
    const theme = useColorScheme();
    return (
        <View style={[styles.container, { backgroundColor: Colors[theme].blue_1212, }]} >
            <View style={styles.footer}>
                <ActivityIndicator color={Colors.white} size={'large'} />
            </View>
        </View>
    )
}

export default Splash


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        padding: 40,
    },
});