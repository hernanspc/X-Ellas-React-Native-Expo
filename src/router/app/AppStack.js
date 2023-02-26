import React, { useEffect } from 'react';
import { Button, Image, Modal, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { gradientColor } from '../../resources/constants/Colors';
import Create from '../../scenes/app/Create';
import HomeStack from './HomeStack';
import SpecialistStack from './SpecialistStack';
import EmergenciaStack from './EmergenciaStack';
import UserStack from './UserStack';
import { IC_CREATE, IC_HOME, IC_HOME_ACTIVE, IC_SECURITY, IC_SECURITYACTIVE, IC_SPECIALIST, IC_SPECIALIST_ACTIVE } from '../../assets/svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen({ navigation }) {

    useEffect(() => {
        navigation.navigate('MyModal')
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Open Modal"
            />
        </View>
    );
}

function ModalScreen() {
    const navigation = useNavigation();

    function returnToHome() {
        navigation.navigate('HomeStackScreen', { screen: 'Home' });
    }

    return (
        // <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={returnToHome}>
                    <MaterialIcons name="close" color="#fff" size={22} />
                </TouchableOpacity>
                <Text style={styles.title}>Choose a sticker modal</Text>
            </View>
        </View>
        // </Modal>
    );
}

const Tab = createBottomTabNavigator();

function AppStack() {
    return (
        <>
            <Tab.Navigator
                initialRouteName='HomeStackScreen'
                screenOptions={{
                    headerShown: false,
                    headerTransparent: true,

                    tabBarStyle: {
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    headerStyle: { backgroundColor: "#1e1e1e" },
                    headerTitleStyle: { color: "white" },

                    tabBarBackground: () => (
                        <View style={{ flex: 1, }}>
                            <LinearGradient
                                colors={[
                                    gradientColor.backgroundColor1,
                                    gradientColor.backgroundColor2,
                                    gradientColor.backgroundColor3
                                ]}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0, 0.2, 1]}
                                style={{ height: 100, width: '100%' }}
                            />
                        </View>
                    ),
                }}
                tabBarOptions={{
                    showLabel: false,
                }}
            >
                <Tab.Screen
                    name="HomeStackScreen"
                    component={HomeStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', }, Platform.OS === 'ios' ? { top: 4 } : null]}>
                                    {!focused ? <IC_HOME /> : <IC_HOME_ACTIVE />}
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="SpecialistStackScreen" component={SpecialistStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', }, Platform.OS === 'ios' ? { top: 4 } : null]}>
                                    {!focused ? <IC_SPECIALIST /> : <IC_SPECIALIST_ACTIVE />}
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="CreateBarStackScreen" component={Create}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', }, Platform.OS === 'ios' ? { top: 4 } : null]}>
                                    <IC_CREATE />
                                </View>
                            );
                        },
                        tabBarStyle: { display: "none" }
                    }}
                />
                <Tab.Screen name="EmergencyStackScreen" component={EmergenciaStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', }, Platform.OS === 'ios' ? { top: 4 } : null]}>
                                    {!focused ? <IC_SECURITY /> : <IC_SECURITYACTIVE />}
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="UserStackScreen" component={UserStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', }, Platform.OS === 'ios' ? { top: 4 } : null]}>
                                    <Ionicons name={!focused ? "ios-person-circle-outline" : "ios-person-circle"} size={42} color={'white'} />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
            <StatusBar translucent backgroundColor="transparent" />
        </>


    );
}

export default AppStack;
const styles = StyleSheet.create({
    modalContent: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1C76A9',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        // backgroundColor: '#464C55',
        backgroundColor: '#1C76A9',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
});