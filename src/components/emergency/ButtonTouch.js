import React from 'react';
import {
    Text,
    TouchableOpacity,
    useColorScheme,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import Colors from "../../resources/constants/Colors";


export default function ButtonTouch({
    title,
    onPress,
    type = "primary",
    style,
    loading,
    ...otherProps
}) {
    const theme = useColorScheme();

    const buttonStyle =
        theme === "light" && type === "primary"
            ? styles.primaryLight
            :
            theme === "dark" && type === "primary"
                ? styles.primaryLight
                :
                theme === "light" && type === "secondary"
                    ? styles.secondaryLight
                    :
                    theme === "dark" && type === "secondary"
                        ? styles.secondaryLight
                        :
                        null;

    const textStyle =
        theme === "light" && type === "primary"
            ? Colors.light.textPrimaryButton
            :
            theme === "dark" && type === "primary"
                ? Colors.light.textPrimaryButton
                :
                theme === "light" && type === "secondary"
                    ? Colors[theme].textPrimaryButton
                    :
                    theme === "dark" && type === "secondary"
                        ? Colors[theme].textPrimaryButton
                        : null

    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, style]}
            onPress={onPress}
            {...otherProps}
        >
            {loading ?
                <ActivityIndicator size={'small'} color='white' />
                :
                <Text style={[type === 'primary' ? styles.buttonText : styles.buttonTextSecond, { color: textStyle }]}>{title}</Text>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 21,
    },
    buttonTextSecond: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 21,
    },
    button: {
        width: "100%",
        height: 45,
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    primaryLight: {
        backgroundColor: Colors.light.emergency_line,
    },
    primaryDark: {
        backgroundColor: Colors.light.emergency_line,
    },

    secondaryLight: {
        backgroundColor: Colors.light.primary_button,
    }
});
