import React from 'react';
import { Text, StyleSheet, useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../resources/constants/Colors';

const ButtonUnderline = ({ title, onPress }) => {

    const theme = useColorScheme();

    return (
        <TouchableOpacity onPress={onPress} style={styles.button} >
            <Text style={[styles.text, { color: Colors[theme].specialistUnderlineButton }]}>{title}</Text>
        </TouchableOpacity>
    )
};
export default ButtonUnderline;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        marginBottom: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 14,
        textDecorationLine: 'underline',
        lineHeight: 16
    },
});

