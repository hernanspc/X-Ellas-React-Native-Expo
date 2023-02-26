import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gradientColor } from '../../resources/constants/Colors'
import LinearGradient from 'react-native-linear-gradient'

const ViewLinear = ({ children }) => {
    return (
        <LinearGradient
            colors={[
                gradientColor.backgroundColor1,
                gradientColor.backgroundColor2,
                gradientColor.backgroundColor3
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.4646, 1]}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    )
}

export default ViewLinear

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center', justifyContent: 'center'
    },
})