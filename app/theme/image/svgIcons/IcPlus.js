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

export const Plus = props => {
  return (
    <Svg
      height="30"
      width="23"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 50 50"
      xmlSpace="preserve">
      <Rect height="50" width="50" fill="none" />
      <Line
        fill="none"
        stroke="black"
        strokeWidth="4"
        x1="9"
        x2="41"
        y1="25"
        y2="25"
      />
      <Line
        fill="none"
        stroke="black"
        strokeWidth="4"
        x1="25"
        x2="25"
        y1="9"
        y2="41"
      />
    </Svg>
  );
};
