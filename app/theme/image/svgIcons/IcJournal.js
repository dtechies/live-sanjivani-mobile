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

export function Journal(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      fill={props.fill}
      viewBox="0 0 37.439 40.319">
      <G id="journal-text" transform="translate(-2.25 -2.25)">
        <Path
          id="Path_1176"
          d="M10.26,2.25H33.3a5.76,5.76,0,0,1,5.76,5.76v28.8a5.76,5.76,0,0,1-5.76,5.76H10.26a5.76,5.76,0,0,1-5.76-5.76H7.38a2.88,2.88,0,0,0,2.88,2.88H33.3a2.88,2.88,0,0,0,2.88-2.88V8.01A2.88,2.88,0,0,0,33.3,5.13H10.26A2.88,2.88,0,0,0,7.38,8.01H4.5A5.76,5.76,0,0,1,10.26,2.25Z"
          fill={props.fill}
          transform="translate(0.63 0)"
          data-name="Path 1176"
        />
        <Path
          id="Path_1177"
          d="M5.13,11.88V10.44a1.44,1.44,0,0,1,2.88,0v1.44H9.45a1.44,1.44,0,1,1,0,2.88H3.69a1.44,1.44,0,0,1,0-2.88Zm0,8.64V19.08a1.44,1.44,0,1,1,2.88,0v1.44H9.45a1.44,1.44,0,1,1,0,2.88H3.69a1.44,1.44,0,1,1,0-2.88Zm0,8.64V27.72a1.44,1.44,0,1,1,2.88,0v1.44H9.45a1.44,1.44,0,1,1,0,2.88H3.69a1.44,1.44,0,1,1,0-2.88Z"
          fill={props.fill}
          transform="translate(0 1.89)"
          data-name="Path 1177"
        />
        <Path
          id="Path_1178"
          d="M11.25,27.72a1.44,1.44,0,0,1,1.44-1.44h5.76a1.44,1.44,0,0,1,0,2.88H12.69A1.44,1.44,0,0,1,11.25,27.72Zm0-5.76a1.44,1.44,0,0,1,1.44-1.44h14.4a1.44,1.44,0,1,1,0,2.88H12.69A1.44,1.44,0,0,1,11.25,21.96Zm0-5.76a1.44,1.44,0,0,1,1.44-1.44h14.4a1.44,1.44,0,1,1,0,2.88H12.69A1.44,1.44,0,0,1,11.25,16.2Zm0-5.76A1.44,1.44,0,0,1,12.69,9h14.4a1.44,1.44,0,1,1,0,2.88H12.69A1.44,1.44,0,0,1,11.25,10.44Z"
          fill={props.fill}
          fillRule="evenodd"
          transform="translate(2.52 1.89)"
          data-name="Path 1178"
        />
      </G>
    </Svg>
  );
}
