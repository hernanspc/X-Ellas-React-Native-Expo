import React from 'react'
import { Pressable, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { IC_Back } from '../../assets/svg'

const HeaderBack = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <IC_Back style={{ padding: 15 }} />
            {title ? <Text style={styles.title} >{title}</Text> : null}
        </TouchableOpacity>
    )
}

export default HeaderBack

const styles = StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize: 24,
        //  fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
})