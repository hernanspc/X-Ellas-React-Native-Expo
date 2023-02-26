import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ViewLinear from '../../components/ui/ViewLinear'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyText from '../../components/auth/MyText'
import { L } from '../../resources/language'
import DividerLine from '../../components/ui/DividerLine'
import ButtonTouch from '../../components/emergency/ButtonTouch'
import { tintColors } from '../../resources/constants/Colors'
import InputTransparent from '../../components/emergency/InputTransparent'

const EmergencyLines = () => {

    const [isType, setIsType] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [number, setNumber] = useState('933624394')

    const handleButtonDefined = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsType(false)
        }, 500)
    }

    return (
        <ViewLinear>
            <KeyboardAwareScrollView style={{ paddingHorizontal: 17, }} contentContainerStyle={{ paddingVertical: 90 }}>
                <View>
                    <MyText style={{ marginVertical: 20 }} >{L.emergency_screen_line_emergency}</MyText>
                    <DividerLine style={{ marginVertical: 26 }} />


                    <InputTransparent autoFocus type='title' value={number} onChangeText={text => {
                        setNumber(text);
                        setIsType(true);
                    }} />


                    <ButtonTouch style={styles.wrapperButton}
                        type={!isType ? 'primary' : 'secondary'}
                        title={!isType ? L.emergency_screen_line_info_number : L.emergency_screen_line_defined_number}
                        onPress={handleButtonDefined}
                        loading={isLoading}
                    />
                </View>
            </KeyboardAwareScrollView>
        </ViewLinear>
    )
}

export default EmergencyLines

const styles = StyleSheet.create({
    wrapperButton: {
        borderColor: tintColors.border_gray,
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,

    }
})