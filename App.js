import { Button, Linking, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Amplify, API, Auth, graphqlOperation, Hub } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import awsConfig from './src/aws-exports'
import { Authenticator } from 'aws-amplify-react-native';
import * as WebBrowser from 'expo-web-browser';

async function urlOpener(url, redirectUrl) {
  const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(url, redirectUrl);
  if (type === "success" && Platform.OS === "ios") {
    WebBrowser.dismissBrowser();
    return Linking.openURL(newUrl)
  }
}

Amplify.configure({
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    urlOpener
  }
});

const App = () => {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          handleSignInWithProvider();
          console.log('se inicio session con provider: ',)
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => {
        console.log('currentUser ', currentUser)
        setUser(currentUser)
      })
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);

  async function handleSignInWithProvider() {
    try {
      setIsLogin(true)
      const { attributes } = await Auth.currentAuthenticatedUser();
      console.log('pre attributes: ', attributes)

      if (attributes.identities?.length > 0) {
        const { data } = await API.graphql(graphqlOperation(getUser, { id: attributes.sub }))
        if (data.getUser) {
          setIsLogin(true);
          // dispatchEvent(
          //   setUser
          // )
          console.log('este user ya existe')
        } else {
          setIsLogin(false);
          return;
        }
      } else {
        console.log('user not found');
        console.log('attributes: ', attributes)
        const userToSave = {
          id: attributes.sub,
          firstName: attributes.email.slice(0, attributes.email.indexOf('@')),
          lastName: "",
          profilePicture: attributes?.profilePicture,
          email: attributes.email.toLowerCase(),
          status: null,
          latitude: null,
          longitude: null
        }
        try {
          console.log('Inser to bd ', userToSave)
          //inser into bd
        } catch (error) {
          console.log(error)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <SafeAreaView>
      <Text>Access</Text>
      <Button title='Open Hosted UI' onPress={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })} />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})