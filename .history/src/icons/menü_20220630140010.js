import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    stroke="#343434"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-align-justify"
    viewBox="0 0 30 30"
    {...props}>
    <Path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
  </Svg>
);

export default SvgComponent;
