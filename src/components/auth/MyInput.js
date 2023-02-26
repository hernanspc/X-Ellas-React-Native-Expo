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

export default function MyInput({
    label,
    value,
    onChangeText,
    secureTextEntry,
    hiddenLabel,
    keyboardType
}) {
    const theme = useColorScheme();
    return (
        <View style={styles.container}>
            {!hiddenLabel && (
                <MyText style={{ fontWeight: "bold", marginBottom: 10 }} type="caption">
                    {label}
                </MyText>
            )}
            <TextInput
                placeholderTextColor={Colors.dark.black_color}
                placeholder={label}
                style={[styles.input]}
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
        marginBottom: 20,
        backgroundColor: Colors.dark.simple_white,
        borderRadius: 15,
    },
    input: {
        fontSize: 16,
        width: "100%",
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white'
    },


});
