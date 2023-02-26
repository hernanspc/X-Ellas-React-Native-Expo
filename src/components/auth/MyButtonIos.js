import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IC_Apple } from '../../assets/svg'
import { L } from '../../resources/language'

export default function MyButtonIos({
    title,
    onPress,
}) {

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.iconContainer}>
                <IC_Apple style={{ width: 32, height: 32 }} />
            </View>
            <Text style={styles.buttonText}>{title ? title : L.signin_btn_login_ios}</Text>
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
