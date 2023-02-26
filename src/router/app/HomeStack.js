import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../scenes/app/Home';
 
const HomeStackNav = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <HomeStackNav.Navigator>
            <HomeStackNav.Screen
                options={{
                    headerShown: false,
                }}
                name="Home"
                component={Home} />
        </HomeStackNav.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})