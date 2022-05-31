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

export function SearchVal(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 20.77 20.769">
      <Path
        id="Path_1133"
        d="M23.217,23.216a1.3,1.3,0,0,1,1.837,0l5,5a1.3,1.3,0,0,1-1.835,1.837l-5-5a1.3,1.3,0,0,1,0-1.837Z"
        fill={props.fill}
        fillRule="evenodd"
        transform="translate(-9.662 -9.661)"
        data-name="Path 1133"
      />
      <Path
        id="Path_1134"
        d="M8.437,15.577A7.139,7.139,0,1,0,1.3,8.437,7.139,7.139,0,0,0,8.437,15.577Zm8.437-7.139A8.437,8.437,0,1,1,8.437,0,8.437,8.437,0,0,1,16.875,8.437Z"
        fill={props.fill}
        fillRule="evenodd"
        data-name="Path 1134"
      />
    </Svg>
  );
}
