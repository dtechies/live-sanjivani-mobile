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

export function Delete(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      fill={props.fill}
      viewBox="0 0 48 48">
      <Path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z" />
      <Path d="M0 0h48v48H0z" fill="none" />
    </Svg>
  );
}
