import React, { useState } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import { IC_HEART_POST_ACTIVE, IC_HEART_POST, IC_HEART_BROKER_ACTIVE, IC_HEART_BROKER, IC_COMMENTPOST } from '../../assets/svg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CardPost = ({ user, image, likes, comments, onPressPost }) => {
    const windowWidth = Dimensions.get('window').width;
    const windoeHeight = Dimensions.get('window').height;

    const [isLike, setIsLike] = useState(false)
    const [withoutHelp, setWithoutHelp] = useState(false)

    return (
        <View style={{ marginHorizontal: 15 }}>
            <View
                style={[styles.container, {
                    // top: windoeHeight / 6,
                    // left: windowWidth / 22,
                }]}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.profile} source={{ uri: user?.avatar }} />
                        <View style={{ paddingLeft: 8 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>
                                usuario
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>
                                Tematica 1 - Tematica 2 . 4h
                            </Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-end', flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => { }} style={{
                            // backgroundColor: 'red',
                            padding: 6
                        }}>
                            <Ionic name="ios-bookmark-outline" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={{
                            marginLeft: 10,
                            // backgroundColor: 'blue',
                            padding: 6
                        }}>
                            <Feather name="more-horizontal" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity style={{ width: '100%', height: '80%' }}
                    onPress={onPressPost}
                >
                    <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => { setIsLike(!isLike) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {isLike ? <IC_HEART_POST_ACTIVE /> : <IC_HEART_POST />}
                            <Text>{' ' + 'Te Apoyo'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setWithoutHelp(!withoutHelp) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {withoutHelp ? <IC_HEART_BROKER_ACTIVE /> : <IC_HEART_BROKER />}
                            <Text>{' ' + 'Me Duele'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IC_COMMENTPOST />
                            <Text>{' ' + 'Respuestas'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default CardPost

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 552,
        borderRadius: 15,
        zIndex: 1,
        elevation: 50,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    footer: {
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 100,
    }
})