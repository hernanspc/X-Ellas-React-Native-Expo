import React from 'react';
import {
    TextInput,
    Text,
    View,
    StyleSheet,
    useColorScheme,
} from "react-native";
import MyText from "../auth/MyText";
import Colors from "../../resources/constants/Colors";

export default function InputTransparent({
    label,
    value,
    onChangeText,
    secureTextEntry,
    hiddenLabel,
    keyboardType,
    type = "body",
    autoFocus,
}) {

    return (
        <View style={styles.container}>
            <TextInput
                autoFocus={autoFocus}
                placeholderTextColor={Colors.dark.black_color}
                placeholder={label}
                style={[styles[type], styles.input]}
                value={value}
                // onChangeText={onChangeText}
                onChangeText={(text) => onChangeText(text.toLowerCase())}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderColor: 'transparent',
    },
    input: {
        width: "100%",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: Colors.dark.simple_white
    },
    body: {
        fontSize: 18
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },


});
