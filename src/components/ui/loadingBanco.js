import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

const loadingBanco = () => {
    return (
        <View style={{ height: 400, width: 400 }}>
            <AnimatedLottieView
                // style={{
                //     position: 'absolute',
                //     zIndex: 1,
                //     left: 0,
                //     right: 0,
                //     top: 0,
                //     bottom: 0,
                // }}
                loop={true}
                autoPlay
                imageAssetsFolder={'lottie/loading/images'}
                // source={require('../../assets/lottie/loading.json')}
                source={require('../../../confetti.json')}
            />
        </View>
    )
}

export default loadingBanco

const styles = StyleSheet.create({})