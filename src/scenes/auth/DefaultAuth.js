import { Dimensions, StyleSheet, Text, View, Image, useColorScheme, Alert, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Swiper from 'react-native-swiper';
import MyButton from '../../components/auth/MyButton';
import { AuthContext } from '../../context/AuthContext';
import { L } from '../../resources/language';
import Colors from '../../resources/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import ViewLinear from '../../components/ui/ViewLinear';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user';
import firebase from '../../firebase'
import database from '@react-native-firebase/database';
import { useFonts } from 'expo-font';

const DefaultAuth = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [fontsLoaded] = useFonts({
        'Lobster-Regular': require('../../assets/fonts/Lobster-Regular.ttf'),
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // await SplashScreen.hideAsync();
            console.log('spalsh')
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    const addInsert = async () => {


        // await database()
        //     .ref('/users/123')
        //     .set({
        //         name: 'Ada Lovelace',
        //         age: 31,
        //     })
        //     .then(() => console.log('Data set.'));

        // await database()
        //     .ref(`/grupo/hernan/${Date.now()}`)
        //     .set({
        //         name: 'hernan ',
        //         type: 'acuatico',
        //         description: 'simple description',
        //         pokemons: 'bolbasor',
        //         user: 'token token',
        //         time: Date(),
        //     })
        //     .then(() => {
        //         console.log('Data set.');
        //     });


        const pedidoObj = {
            tiempoentrega: 0,
            completado: false,
            total: Number(1000),
            orden: '001', // array
            creado: Date.now()
        };
        try {
            const pedido = await firebase.db.collection('hernan').add(pedidoObj);
            console.log('pedido ', pedido)
            Alert.alert('Group created correctly')
        } catch (error) {
            console.log('Erro: ', error.message)
        }

    }


    return (
        <ViewLinear>
            <View style={styles.containerPage} onLayout={onLayoutRootView}>
                <Image style={styles.logoApp}
                    source={require('../../assets/images/logo/Logo.png')}
                />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: 100,
                }} >
                    <Swiper style={styles.wrapper} loop autoplay
                        dot={Platform.OS === 'ios' ?
                            <View style={styles.iosDot} /> :
                            <View style={styles.androidDot} />
                        }
                        activeDot={Platform.OS === 'ios' ?
                            <View style={styles.iosActiveDot} /> :
                            <View style={styles.androidActiveDot} />
                        }
                    >

                        <View style={styles.slide1}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/auth/Vector1.png')}
                            />
                            <Text style={styles.text}>{L.onboard_default_authscreen_1}</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Image
                                style={styles.image2}
                                source={require('../../assets/images/auth/Vector2.png')}
                            />
                            <Text style={styles.text}>{L.onboard_default_authscreen_2}</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Image
                                style={styles.image3}
                                source={require('../../assets/images/auth/Vector3.png')}
                            />
                            <Text style={styles.text}>{L.onboard_default_authscreen_3}</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Image
                                style={styles.image4}
                                source={require('../../assets/images/auth/Vector4.png')}
                            />
                            <Text style={styles.text}>{L.onboard_default_authscreen_4}</Text>
                        </View>
                    </Swiper>

                    <View style={{ paddingHorizontal: 20, }}>
                        <MyButton
                            title={L.default_authscreen_primary_btn}
                            onPress={() => {
                                navigation.navigate('SignIn')
                            }}
                        />
                        <MyButton
                            type='secondary'
                            title={L.default_authscreen_secondary_btn}
                            onPress={
                                () => {
                                    dispatch(setUser({
                                        id: 'user001',
                                        firstName: 'hernan',
                                        lastName: 'pormachi',
                                        email: 'hernan@pormachi.com',
                                    }))
                                }
                            }
                        // onPress={addInsert}
                        />
                    </View>

                </View>
            </View>
            <StatusBar translucent backgroundColor="transparent" />
        </ViewLinear>
    )
}

export default DefaultAuth
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    logoApp: {
        width: 108,
        height: 60,
        bottom: 300,
    },
    containerPage: {
        width: windowWidth,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    iosDot: {
        backgroundColor: 'rgba(255,255,255,.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    iosActiveDot: {
        backgroundColor: '#FFF',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    androidDot: {
        backgroundColor: 'rgba(255,255,255,.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    androidActiveDot: {
        backgroundColor: '#FFF',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    image: {
        alignSelf: 'center',
        width: 166,
        height: 206.5,
        marginTop: Platform.OS === 'android' ? 24 : 0,
        marginBottom: 44
    },
    image2: {
        alignSelf: 'center',
        width: 271.93,
        height: 198.52,
        marginTop: Platform.OS === 'android' ? 24 : 0,
        marginBottom: 44
    },
    image3: {
        alignSelf: 'center',
        width: 313.08,
        height: 246.61,
        marginTop: Platform.OS === 'android' ? 24 : 0,
        marginBottom: 44
    },
    image4: {
        alignSelf: 'center',
        width: 266.01,
        height: 233.41,
        marginTop: Platform.OS === 'android' ? 24 : 0,
        marginBottom: 44
    },
    wrapper: {
        bottom: -150,
        left: null,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        fontSize: 32,
        textAlign: 'center',
    }
})