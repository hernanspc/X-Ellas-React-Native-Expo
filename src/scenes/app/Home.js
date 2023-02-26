import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ViewImage from '../../components/ui/ViewImage'
import Search from '../../components/ui/Search'
import CardPost from '../../components/ui/CardPost'
import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'
import { IC_BELL, IC_FIND } from '../../assets/svg'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import MyText from '../../components/auth/MyText'

const Home = () => {
    const navigation = useNavigation();

    const DATA = [
        {
            image: 'https://picsum.photos/500/500',
            user: {
                avatar: 'https://picsum.photos/50/50',
                username: 'John Doe',
            },
            likes: 10,
            comments: 2,
        },
        {
            image: 'https://picsum.photos/500/500',
            user: {
                avatar: 'https://picsum.photos/50/50',
                username: 'John Doe',
            },
            likes: 10,
            comments: 2,
        },
        {
            image: 'https://picsum.photos/500/500',
            user: {
                avatar: 'https://picsum.photos/50/50',
                username: 'John Doe',
            },
            likes: 10,
            comments: 2,
        },
        {
            image: 'https://picsum.photos/500/500',
            user: {
                avatar: 'https://picsum.photos/50/50',
                username: 'John Doe',
            },
            likes: 10,
            comments: 2,
        }
    ];

    const onPressPost = () => {
        navigation.navigate('PostDetail')
    }

    return (
        <>
            <ViewImage>
                <View style={{ flex: 1, }}>
                    <ScrollView
                        stickyHeaderIndices={[0]}
                        style={{
                            // backgroundColor: 'red',
                        }} showsVerticalScrollIndicator={false}>

                        <View style={{
                            position: 'static',
                            width: '100%',
                            height: 100,
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            display: 'flex',
                            justifyContent: 'center',
                            boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1) inset',
                            // marginVertical: 50
                        }}>
                            <LinearGradient
                                colors={[
                                    'rgba(28, 118, 169, 1)',
                                    'rgba(28, 118, 169, 0.8)',
                                    'rgba(28, 118, 169, 0.8)',
                                    'rgba(28, 118, 169, 0.6)',
                                    'rgba(28, 118, 169, 0.5)',
                                    'rgba(28, 118, 169, 0.3)',
                                    'transparent']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                }}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'transparent',
                                    marginHorizontal: 20,
                                    marginTop: 30
                                }}>
                                <MyText style={{ fontFamily: 'Lobster-Regular', fontSize: 40 }}>Instagram</MyText>
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <TouchableOpacity
                                        style={{
                                            padding: 10,
                                            // backgroundColor: 'blue'
                                        }}
                                    >
                                        <IC_FIND />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            padding: 10,
                                            // backgroundColor: 'blue'
                                        }}
                                    >
                                        <IC_BELL />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: 15 }}>
                            <Search onChange={e => console.log('e ', e)} />
                        </View>

                        <FlashList
                            data={DATA}
                            renderItem={({ item }) => <CardPost onPressPost={onPressPost} image={item.image} user={item.user} likes={item.likes} comments={item.comments} />}
                            estimatedItemSize={200}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                </View>
            </ViewImage>
        </>

    )
}

export default Home

const styles = StyleSheet.create({});