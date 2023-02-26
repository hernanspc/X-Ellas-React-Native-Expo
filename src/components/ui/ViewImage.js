import React from 'react'
import { ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';

const ViewImage = ({ children }) => {
    const statusBarHeight = Constants.statusBarHeight;

    console.log('a) Platform.OS: ', Platform.OS, ' | ', StatusBar.currentHeight)
    console.log('b) Platform.OS: ', Platform.OS, ' | ', statusBarHeight)
    return (
        <ImageBackground
            source={require('../../assets/images/background/back_fondo.png')}
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : statusBarHeight,
            }}
        >
            {children}
        </ImageBackground>
    )
}

export default ViewImage

const styles = StyleSheet.create({})