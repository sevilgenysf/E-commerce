import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#ff4500"
    strokeWidth={2}
    fillRule={'evenodd'}
    strokeLinecap="round"
    strokeLinejoin="round"></Svg>
);

export default SvgComponent;
