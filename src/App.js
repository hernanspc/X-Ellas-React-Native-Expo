import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStack from './router/app/AppStack'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostDetail from './scenes/post/PostDetail'
import EmergencyStack from './router/app/EmergencyStack'

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="AppStack"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="AppStack" component={AppStack} />
                <Stack.Screen name="PostDetail" component={PostDetail} />
                <Stack.Screen name="EmergencyStackFull" component={EmergencyStack} />
            </Stack.Navigator>
            {/* <AppStack /> */}
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})