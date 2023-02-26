import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Specialist from '../../scenes/app/Specialist';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SpecialistNav = createNativeStackNavigator();

const SpecialistStack = () => {
    return (
        <SpecialistNav.Navigator >
            <SpecialistNav.Screen options={{
                headerShown: false,
            }}
                name="Specialist" component={Specialist} />
        </SpecialistNav.Navigator>
    )
}

export default SpecialistStack

const styles = StyleSheet.create({})