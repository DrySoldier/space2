import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated, Easing, ImageBackground } from 'react-native';
import { images } from '../../constants/images';
import styles from './styles';

const Home = ({ navigation }) => {
  const buttonDegree = useRef(new Animated.Value(0)).current;
  const astroDegree = useRef(new Animated.Value(0)).current;
  const astroPosition = useRef(new Animated.Value(0)).current;

  const spin = buttonDegree.interpolate({
    inputRange: [0, 1],
    outputRange: ['-10deg', '10deg'],
  });

  const oppositeSpin = buttonDegree.interpolate({
    inputRange: [0, 1],
    outputRange: ['10deg', '-10deg'],
  });

  const astro360 = astroDegree.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const xPosition = astroPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 500],
  });

  const startButtonRotateAnimation = () => {
    const randomDegree = Math.random();

    Animated.timing(buttonDegree, {
      toValue: randomDegree,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => startButtonRotateAnimation());
  };

  const startAstroRotateAnimation = () => {
    astroDegree.setValue(0);

    Animated.timing(astroDegree, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => startAstroRotateAnimation());
  };

  const startAstroPositionAnimation = () => {
    astroPosition.setValue(0);

    Animated.timing(astroPosition, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => startAstroPositionAnimation());
  };

  useEffect(() => {
    startButtonRotateAnimation();
    startAstroRotateAnimation();
    startAstroPositionAnimation();
  }, []);

  return (
    <ImageBackground source={images.space} style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SPACE CLIMB</Text>
        <Text style={styles.subtitle}>(title pending)</Text>
      </View>
      <Animated.Image
        style={{ ...styles.astro, transform: [{ rotate: astro360 }, { translateX: xPosition }] }}
        source={images['astro-right-2']}
      />
      <View style={styles.buttonContainer}>
        <Animated.View style={{ transform: [{ rotate: spin }], paddingLeft: 125 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Game')}>
            <ImageBackground
              style={styles.button}
              resizeMode="stretch"
              source={images.spaceProbe}
            >
              <Text style={styles.buttonText}>PLAY</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ rotate: oppositeSpin }] }}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <ImageBackground
              style={styles.button}
              resizeMode="stretch"
              source={images.spaceProbe}
            >
              <Text style={styles.buttonText}>SETTINGS</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={{ flex: 1 }} />
    </ImageBackground>
  );
};

export default Home;
