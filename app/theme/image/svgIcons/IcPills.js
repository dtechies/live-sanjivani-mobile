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

export function Pills(props) {
  return (
    <Svg
      height={props.height}
      width={props.height}
      fill={props.fill}
      viewBox="0 0 40.747 43.88">
      <Path
        id="pills"
        d="M32.707,21.055a12.443,12.443,0,0,0-6.268,1.7V13.219a10.969,10.969,0,1,0-21.939,0V35.158a10.968,10.968,0,0,0,19.253,7.19,12.532,12.532,0,1,0,8.954-21.294Zm0,3.134a9.411,9.411,0,0,1,9.262,7.835H23.445A9.411,9.411,0,0,1,32.707,24.189ZM7.634,13.219a7.835,7.835,0,1,1,15.671,0v9.4H7.634Zm7.835,29.774a7.845,7.845,0,0,1-7.835-7.835v-9.4h15.3A12.47,12.47,0,0,0,21.8,39.751,7.819,7.819,0,0,1,15.469,42.994Zm17.238,0a9.411,9.411,0,0,1-9.262-7.835H41.967a9.411,9.411,0,0,1-9.26,7.835Z"
        fill={props.fill}
        transform="translate(-4.5 -2.25)"
      />
    </Svg>
  );
}
