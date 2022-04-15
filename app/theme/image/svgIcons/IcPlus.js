import React from 'react';
import {Svg, Line, Rect} from 'react-native-svg';

export function Plus(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 50 50"
      xmlSpace="preserve">
      <Rect height="50" width="50" fill="none" />
      <Line
        fill="none"
        stroke={props.fill}
        strokeWidth="4"
        x1="9"
        x2="41"
        y1="25"
        y2="25"
      />
      <Line
        fill="none"
        stroke={props.fill}
        strokeWidth="4"
        x1="25"
        x2="25"
        y1="9"
        y2="41"
      />
    </Svg>
  );
};
