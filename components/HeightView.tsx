import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { moderateScale as ms } from '../constants';

const HeightView = ({ callback }: { callback: () => void }) => {
  const heightValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightValue, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start(callback);
  }, []);

  return <Animated.View style={{ transform: [{ scaleY: heightValue }], height: ms(200) }} />;
};

export default HeightView;
