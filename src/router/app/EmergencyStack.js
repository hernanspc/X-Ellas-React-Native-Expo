import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmergencyLines from '../../scenes/app/EmergencyLines';
import HeaderBack from '../../components/ui/Header';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColor } from '../../resources/constants/Colors';
import { L } from '../../resources/language';

const Stack = createNativeStackNavigator();

const EmergencyStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
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
            <Stack.Screen name="Emergency1" component={EmergencyLines}
                options={{
                    headerBackVisible: false,
                    headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} title={L.emergency_screen_line_emergency_header} />
                }}
            />
        </Stack.Navigator>
    )
}

export default EmergencyStack

const styles = StyleSheet.create({})