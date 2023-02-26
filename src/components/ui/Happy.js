import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
  Animated,
  Easing,
  StyleProp,
} from 'react-native';
import Colors from '../../resources/constants/Colors';
import AnimatedLottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  animation: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    position: 'absolute',
    paddingTop: 50,
    paddingBottom: 40,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  subtitleText: {

    fontSize: 18,
    lineHeight: 19,
    textAlign: 'center',
    color: Colors.accentDark,
  },
  titleText: {

    fontSize: 32,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default class Happy extends React.Component {
  static defaultProps = {
    title: 'happy',
    loop: true,
    type: 'default',
  };

  state = {
    fade: new Animated.Value(0),
    fadeSubtitle: new Animated.Value(0),
  };

  animation = null;

  componentDidMount() {
    this.start();
  }

  start = () => {
    Animated.timing(this.state.fade, {
      toValue: 1,
      delay: 800,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      this.animation && this.animation.play();

      Animated.timing(this.state.fadeSubtitle, {
        toValue: 1,
        delay: 200,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    });
  };

  render() {
    const {
      type,
      style,
      contentStyle,
      title,
      titleStyle,
      subtitleStyle,
      subtitle,
      loop,
      children,
    } = this.props;
    const { fade, fadeSubtitle } = this.state;
    let source;
    switch (type) {
      case 'fullscreen':
        source = require('../../assets/lottie/confetti.json');
        break;

      default:
        source = require('../../assets/lottie/confetti.json');
        break;
    }
    return (
      <View style={[style]}>
        <AnimatedLottieView
          style={styles.animation}
          ref={animation => {
            this.animation = animation;
          }}
          loop={loop}
          imageAssetsFolder={'lottie/happy/images'}
          source={source}
        />
        {children}
        <View style={[styles.content, contentStyle]}>
          {!!title && (
            <Animated.View style={{ opacity: fade }}>
              <Text style={[styles.titleText, titleStyle]}>{title}</Text>
            </Animated.View>
          )}
          {!!subtitle && (
            <Animated.View style={{ opacity: fadeSubtitle }}>
              <Text style={[styles.subtitleText, subtitleStyle]}>
                {subtitle}
              </Text>
            </Animated.View>
          )}
        </View>
      </View>
    );
  }
}
