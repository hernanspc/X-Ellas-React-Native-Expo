import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ViewLinear from '../../components/ui/ViewLinear';
import { L } from '../../resources/language';
import MyButton from '../../components/auth/MyButton';
import MyButtonGoogle from '../../components/auth/MyButtonGoogle';
import ButtonUnderline from '../../components/auth/ButtonUnderline';
import MyButtonIos from '../../components/auth/MyButtonIos';
import MyButtonEmail from '../../components/auth/MyButtonEmail';
import Divider from '../../components/ui/Divider';
import MyInput from '../../components/auth/MyInput';
import { AuthContext } from '../../context/AuthContext';
import MyInputPass from '../../components/auth/MyInputPass';
import MyText from '../../components/auth/MyText';
import { Amplify, API, Auth, graphqlOperation, Hub } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

const SignIn = ({ navigation }) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn
    } = React.useContext(AuthContext);

    return (
        <ViewLinear>
            <KeyboardAwareScrollView style={{ paddingHorizontal: 17, }} contentContainerStyle={{ paddingVertical: 90 }}>
                <View>

                    <MyText style={{ textAlign: 'center', marginVertical: 20 }} >{L.signin_title}</MyText>

                    <MyInput hiddenLabel label={L.signin_label_inputemail} value={email} onChangeText={setEmail} />

                    <MyInputPass hiddenLabel label={L.signin_label_inputpass} value={password} onChangeText={setPassword} />

                    <ButtonUnderline title={L.signin_reminderpassword} onPress={() =>
                        console.log('first')
                    }
                    />

                    <MyButton
                        title={L.signin_btn_continue}
                        onPress={handleSignIn}
                    />

                    <Divider />

                    <MyButtonGoogle
                        onPress={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
                    />

                    {Platform.OS === 'ios' ?
                        <MyButtonIos
                            onPress={() => console.log('ios')}
                        /> : null
                    }

                    <MyButtonEmail
                        onPress={() => navigation.navigate('SignUp')}
                    />


                </View>
            </KeyboardAwareScrollView>
        </ViewLinear>
    )
}

export default SignIn

const styles = StyleSheet.create({})