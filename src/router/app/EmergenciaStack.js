import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Emergency from '../../scenes/app/Emergency';

const EmergenciaNav = createNativeStackNavigator();

const EmergenciaStack = () => {
  return (
    <EmergenciaNav.Navigator >
      <EmergenciaNav.Screen options={{
        headerShown: false,
      }}
        name="Emergency" component={Emergency} />
    </EmergenciaNav.Navigator>
  )
}

export default EmergenciaStack

const styles = StyleSheet.create({})