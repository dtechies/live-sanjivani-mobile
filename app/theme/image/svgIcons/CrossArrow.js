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

export function CrossArrow(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 11.99 11.99">
      <Path
        id="Path_412"
        d="M32.646,973.623a1.032,1.032,0,0,0-1.46,0l-4.233,4.233-4.233-4.233a1.032,1.032,0,1,0-1.46,1.46l4.233,4.233-4.233,4.233a1.032,1.032,0,1,0,1.46,1.46l4.233-4.233,4.233,4.233a1.032,1.032,0,0,0,1.46-1.46l-4.233-4.233,4.233-4.233A1.032,1.032,0,0,0,32.646,973.623Z"
        fill={props.fill}
        transform="translate(-20.958 -973.321)"
        data-name="Path 412"
      />
    </Svg>
  );
}
