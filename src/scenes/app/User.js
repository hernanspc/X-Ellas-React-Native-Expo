import { Button, SafeAreaView, StyleSheet, Text, View as DefaultView } from 'react-native'
import React from 'react'
import ViewImage from '../../components/ui/ViewImage'
import { Auth } from 'aws-amplify'
import { useDispatch } from 'react-redux'
import { resetUser } from '../../features/user'
import { View } from '../../components/themed/Themed'

const User = () => {
  const dispatch = useDispatch();

  async function handleSignOut() {
    try {
      await Auth.signOut();
      dispatch(resetUser());
    } catch (e) {
      console.log(e);
    }
  }

  return (

    <ViewImage>

      <View style={{ flex: 1, paddingHorizontal: 0 }}>


        <Text>User</Text>

        <Button title='Salir del App ' onPress={handleSignOut} />
      </View>

    </ViewImage>

  )
}

export default User

const styles = StyleSheet.create({})