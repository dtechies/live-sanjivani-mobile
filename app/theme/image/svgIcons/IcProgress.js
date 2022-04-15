import React from 'react';
import {Svg, Line, Path} from 'react-native-svg';

export function Progress(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve">
      <Path
        d="  M105,109V25c0-2.2091389-1.790863-4-4-4H85c-2.209137,0-4,1.7908611-4,4v84"
        fill={props.fill}
        stroke="none"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <Path
        d="  M73,109V53c0-2.2091408-1.790863-4-4-4H53c-2.2091408,0-4,1.7908592-4,4v56"
        fill={props.fill}
        stroke="none"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <Path
        d="  M41,109V81c0-2.209137-1.7908592-4-4-4H21c-2.2091389,0-4,1.790863-4,4v28"
        fill={props.fill}
        stroke="none"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <Line
        fill={props.fill}
        stroke="none"
        strokeLinecap="round"
        strokeWidth="4"
        x1="9"
        x2="113"
        y1="109"
        y2="109"
      />
    </Svg>
  );
}
