import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { L } from '../../resources/language'

export default function MyButtonEmail({
    title,
    onPress,
}) {

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Image style={{ width: 24, height: 24 }} source={require('../../assets/images/auth/User.png')} />
            </View>
            <Text style={styles.buttonText}>{title ? title : L.signin_btn_login_email}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 8,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
        justifyContent: 'center',
        marginBottom: 20,
    },
    iconContainer: {
        marginRight: 8,
    },
    buttonText: {
        width: '90%',
        textAlign: 'center',
        color: '#000',
    },
})
