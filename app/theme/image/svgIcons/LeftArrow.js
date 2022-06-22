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

export function LeftArrow(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 21.578 15.169">
      <Path
        id="left-arrow"
        d="M7.038,4.9A.765.765,0,0,1,8.125,5.98L2.612,11.494H20.8a.766.766,0,0,1,.772.761.775.775,0,0,1-.772.772H2.612l5.513,5.5a.781.781,0,0,1,0,1.087.762.762,0,0,1-1.087,0L.22,12.8a.767.767,0,0,1,0-1.076Z"
        fill={props.fill}
        transform="translate(0.001 -4.676)"
      />
    </Svg>
  );
}
