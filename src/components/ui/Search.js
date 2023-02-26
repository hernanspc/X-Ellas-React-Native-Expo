import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { IC_Magnifying } from '../../assets/svg';

const Search = ({ value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, isFocused && styles.containerFocused]}>
            <IC_Magnifying style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholderTextColor="#000"
                value={value}
                onChangeText={onChange}
                placeholder="¿Que necesitás hoy?"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

export default Search

const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        padding: 8,
        marginBottom: 25
    },
    containerFocused: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#000000'
    },
});