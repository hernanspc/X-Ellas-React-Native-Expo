import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../../scenes/app/User';

const UserNav = createNativeStackNavigator();

const UserStack = () => {
    return (
        <UserNav.Navigator >
               <UserNav.Screen options={{
                   headerShown: false,
               }}
                   name="User" component={User} />
           </UserNav.Navigator>
     )
}

export default UserStack

const styles = StyleSheet.create({})