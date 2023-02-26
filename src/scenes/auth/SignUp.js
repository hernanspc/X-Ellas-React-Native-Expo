import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ViewLinear from '../../components/ui/ViewLinear';
import MyButton from '../../components/auth/MyButton';
import { L } from '../../resources/language';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MyText from '../../components/auth/MyText';
import MyInput from '../../components/auth/MyInput';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import MyInputPass from '../../components/auth/MyInputPass';

const SignUp = ({ navigation }) => {
  const {
    email,
    setEmail,
    handleSignUp,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword
  } = React.useContext(AuthContext);

  const proccessSignUp = () => {
    handleSignUp();
    navigation.navigate('SignUpConfirm');
  }

  return (
    <ViewLinear>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 17, }} contentContainerStyle={{ paddingVertical: 90 }}>

        <MyText style={{ marginVertical: 20 }}>{L.signup_title}</MyText>

        <MyInput hiddenLabel label={L.signup_label_inputemail} value={email} onChangeText={setEmail} />

        <MyInputPass secureTextEntry hiddenLabel label={'Password'} value={password} onChangeText={setPassword} />

        <MyInputPass hiddenLabel label={L.signin_label_inputpass} value={confirmPassword} onChangeText={setConfirmPassword} />



        <MyButton
          title={L.signin_btn_continue}
          onPress={proccessSignUp}
        />

      </KeyboardAwareScrollView>

    </ViewLinear>
  )
}

export default SignUp

const styles = StyleSheet.create({})