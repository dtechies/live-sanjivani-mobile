import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';

export function Icon5(props) {
  return (
    // height="44.1" width="49"
    <Svg height={props.height} width={props.width} viewBox="0 0 49 44.1">
      <Path
        id="bxs-donate-blood"
        d="M41.529,29.049,32.4,36.35H20.15V33.9h9.96A1.225,1.225,0,0,0,31.129,32l-2.176-3.263a4.889,4.889,0,0,0-4.075-2.184H5.45A2.45,2.45,0,0,0,3,29V43.7a4.9,4.9,0,0,0,4.9,4.9H31.515a7.351,7.351,0,0,0,5.533-2.51L52,29l-3.557-1.186a7.345,7.345,0,0,0-6.914,1.235Zm-5.691-2.5a7.35,7.35,0,0,0,7.35-7.35c0-6.635-7.35-14.7-7.35-14.7s-7.35,8.013-7.35,14.7A7.35,7.35,0,0,0,35.838,26.55Z"
        fill={props.fill}
        transform="translate(-3 -4.5)"
      />
    </Svg>
  );
}
