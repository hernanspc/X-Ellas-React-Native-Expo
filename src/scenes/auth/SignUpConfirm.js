import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react';
import ViewLinear from '../../components/ui/ViewLinear';
import MyText from '../../components/auth/MyText';
import { L } from '../../resources/language';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../context/AuthContext';
import MyInput from '../../components/auth/MyInput';
import MyButton from '../../components/auth/MyButton';

const SignUpConfirm = () => {
  const [code, setCode] = useState('');
  const {
    verificationCode, setVerificationCode, handleConfirmSignUp
  } = React.useContext(AuthContext);

  return (
    <ViewLinear>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 18, }} contentContainerStyle={{ paddingVertical: 90 }}>
        <MyText style={{ marginVertical: 20 }}>{L.signup_confirm}</MyText>
        <MyInput hiddenLabel label={'codigo'} onChangeText={setVerificationCode} />

        <MyButton
          title={L.signin_btn_continue}
          onPress={handleConfirmSignUp}
        />

      </KeyboardAwareScrollView>
    </ViewLinear>
  )
}

export default SignUpConfirm

const styles = StyleSheet.create({

});
