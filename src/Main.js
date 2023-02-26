import React, { useState, useEffect } from 'react'
import { StyleSheet, Linking, Platform, Text } from 'react-native'
import { store } from './app/store'
import { Provider, useSelector } from 'react-redux';
import App from './App'
import AuthStack from './router/auth/AuthStack';
import Splash from './scenes/Splash';
import "../src/resources/functions/ignoreWarnings";
import { Amplify, API, Auth, graphqlOperation, Hub } from 'aws-amplify'
import * as WebBrowser from 'expo-web-browser';
import awsConfig from './aws-exports'
import { useFonts } from 'expo-font';

async function urlOpener(url, redirectUrl) {
    const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(url, redirectUrl);
    if (type === "success" && Platform.OS === "ios") {
        WebBrowser.dismissBrowser();
        return Linking.openURL(newUrl)
    }
}

Amplify.configure({
    ...awsConfig,
    oauth: {
        ...awsConfig.oauth,
        urlOpener
    }
});

export default function Wrapper() {

    const [fontsLoaded] = useFonts({
        "Brevia-SemiBold": require("./assets/fonts/Brevia-SemiBold.otf"),
        "Roboto": require("./assets/fonts/Roboto-Regular.ttf"),
        "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <Splash />;
    }

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

function Main() {
    const user = useSelector((state) => state.user);
    console.log('⭐️user ', user);

    return user?.email ? <App /> : <AuthStack />
}
