import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IC_GUARDINE, IC_PANICBUTTON, IC_PHONE, IC_USERMAP } from '../../assets/svg'
import ViewImage from '../../components/ui/ViewImage'
import MyText from '../../components/auth/MyText'
import { L } from '../../resources/language'
import DividerLine from '../../components/ui/DividerLine'
import { useNavigation } from '@react-navigation/native'
import * as Linking from 'expo-linking';


const Emergency = () => {
  const navigation = useNavigation();


  const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ViewImage>
      <View>
        <MyText style={{ paddingLeft: 25, }} type='title'>{L.emergency_screen_title}</MyText>

        <MyText style={{ paddingLeft: 25, }} type='body'>{L.emergency_screen_title_button1}</MyText>

        <View style={styles.paragraph}>
          <TouchableOpacity
            style={{ borderRadius: 50, marginHorizontal: 21, }}
            onPress={() => makeCall('933624394')}>
            <IC_PANICBUTTON />
          </TouchableOpacity>
          <View style={{ height: 200, width: 205 }}>
            <MyText style={{
              fontFamily: 'Roboto',
              fontSize: 16
            }}>
              {L.emergency_screen_paragraph}
            </MyText>
          </View>
        </View>

        <DividerLine style={{ marginHorizontal: 8 }} />

        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 91,
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10
          }}
          onPress={() => navigation.navigate('EmergencyStackFull', { screen: 'Emergency1' })}
        >
          <IC_PHONE style={{ margin: 10 }} />
          <MyText >{L.emergency_screen_button1}</MyText>
        </TouchableOpacity>

        <DividerLine style={{ marginHorizontal: 8 }} />
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 91,
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10
          }}
          onPress={() => { console.log('first') }}
        >
          <IC_GUARDINE style={{ margin: 10 }} />
          <MyText >{L.emergency_screen_button2}</MyText>
        </TouchableOpacity>

        <DividerLine style={{ marginHorizontal: 8 }} />
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 91,
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10
          }}
          onPress={() => { console.log('first') }}
        >
          <IC_USERMAP style={{ margin: 10 }} />
          <MyText >{L.emergency_screen_button3}</MyText>
        </TouchableOpacity>

      </View>
    </ViewImage>

  )
}

export default Emergency

const styles = StyleSheet.create({
  paragraph: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})