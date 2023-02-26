import React, { useState } from 'react';

import {
    TextInput,
    Text,
    View,
    StyleSheet,
    useColorScheme,
    TouchableOpacity,
    Image,
} from "react-native";
import MyText from "../auth/MyText";
import Colors from "../../resources/constants/Colors";

export default function MyInputPass({
    label,
    value,
    onChangeText,
    secureTextEntry,
    hiddenLabel,
    keyboardType
}) {
    const theme = useColorScheme();
    const [showPassword, setShowPassword] = useState(true)

    return (
        <View style={styles.container}>
            {!hiddenLabel && (
                <MyText style={{ fontWeight: "bold", marginBottom: 10 }} type="caption">
                    {label}
                </MyText>
            )}
            <View style={{ justifyContent: 'center', }}>
                <TextInput
                    placeholderTextColor={Colors.dark.black_color}
                    placeholder={label}
                    style={[styles.input]}
                    value={value}
                    onChangeText={(text) => onChangeText(text)}
                    secureTextEntry={showPassword ? true : false}
                    keyboardType={keyboardType}
                />
                <TouchableOpacity style={styles.textBoxButton} onPress={() => {
                    setShowPassword(!showPassword)
                }}>
                    <View style={{ padding: 25, }}>
                        {showPassword ?
                            <Image style={{ width: 18, height: 14 }} source={require('../../assets/images/auth/Pass2.png')} />
                            :
                            <Image style={{ width: 18, height: 14 }} source={require('../../assets/images/auth/Pass.png')} />
                        }
                    </View>
                </TouchableOpacity>
            </View>
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
    textBoxButton: {
        position: 'absolute',
        right: 20,
        zIndex: 100,
        width: 20,
        height: 20,
        // borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
