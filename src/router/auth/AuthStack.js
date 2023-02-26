import { Button, StyleSheet, Text, TextInput, useColorScheme, View, StatusBar, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../../context/AuthContext';
import SignIn from '../../scenes/auth/SignIn';
import DefaultAuth from '../../scenes/auth/DefaultAuth';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColor } from '../../resources/constants/Colors'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderBack from '../../components/ui/Header';
import SignUp from '../../scenes/auth/SignUp';
import SignUpConfirm from '../../scenes/auth/SignUpConfirm';

const Stack = createNativeStackNavigator();

export default function Wrapper() {

    return (
        <AuthProvider>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </AuthProvider>
    );
}

function AuthStack() {

    const navigation = useNavigation();

    return (
        <Stack.Navigator
            initialRouteName='DefaultAuth'
            screenOptions={{
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: true,
                headerTitle: () => (
                    <LinearGradient
                        colors={[
                            gradientColor.backgroundColor1,
                            gradientColor.backgroundColor2,
                            gradientColor.backgroundColor3
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0, 0.4646, 1]}
                        style={{
                            height: '100%',
                        }}
                    />
                ),
            }}
        >
            <Stack.Screen name="DefaultAuth" component={DefaultAuth} />
            <Stack.Screen name="SignIn" component={SignIn} options={{
                headerBackVisible: false,
                headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />
            }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerBackVisible: false,
                headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} title={'Email'} />
            }} />
            <Stack.Screen name="SignUpConfirm" component={SignUpConfirm} options={{
                headerBackVisible: false,
                headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} title={'Confirme su numero'} />
            }} />

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
})