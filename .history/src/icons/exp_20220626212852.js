import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}>
    <Path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
  </Svg>
);

export default SvgComponent;
