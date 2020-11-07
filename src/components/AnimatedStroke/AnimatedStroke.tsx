import React, {useRef, useState} from 'react';
import Animated, {Easing, useAnimatedProps} from 'react-native-reanimated';
import {Path} from 'react-native-svg';

interface Props {
  d: string;
  progress: Animated.SharedValue<number>;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);
const colors = ['#FFC27A', '#7EDAB9', '#45A6E5', '#FE8777'];

const AnimatedStroke = ({d, progress}: Props) => {
  // colors.length - 1 because length doesn't count from 0 so it'd be 4. When we use it we want to call the length from 0 to 3, so 4 elements.
  // So it doesn't exceed the number of elements in the array. With 4 there are 5 options (0-4) with 3 there are 4 options (0-3).
  const stroke = colors[Math.round(Math.random() * (colors.length - 1))];
  const [length, setLength] = useState(0);
  const ref = useRef<typeof AnimatedPath>(null);
  const animatedBGProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.61, 1, 0.88, 1)(progress.value),
    fillOpacity: progress.value,
  }));
  const animatedProps = useAnimatedProps(() => ({
    // Easing functions specify the rate of change of a parameter over time.
    // Calculating the slope, with a method of Easing, like .bezier, you define the chart.
    strokeDashoffset:
      length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value),
  }));
  return (
    <>
      <AnimatedPath
        animatedProps={animatedBGProps}
        d={d}
        stroke={stroke}
        strokeWidth={3}
        fill="black"
        strokeDasharray={length}
      />
      <AnimatedPath
        animatedProps={animatedProps}
        // TODO: Test + 80 on multiple devices. It's namely a random number.
        onLayout={() => setLength(ref.current.getTotalLength() + 80)}
        ref={ref}
        d={d}
        stroke="white"
        strokeWidth={3}
        strokeDasharray={length}
      />
    </>
  );
};

export default AnimatedStroke;
