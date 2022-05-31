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

export function HeartCare(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      fill={props.fill}
      // stroke="red"
      viewBox="0 0 21.899 21.466">
      <G id="health-care" transform="translate(0 -4.501)">
        <Path
          id="Path_1035"
          d="M247.709,158.5h-2.888v3.321H241.5v2.888h3.321v3.321h2.888v-3.321h3.321v-2.888h-3.321Z"
          fill={props.fill}
          transform="translate(-229.877 -146.585)"
          data-name="Path 1035"
        />
        <Path
          id="Path_1036"
          d="M10.18,13.79H13.5V10.469h5.776V13.79h1.675a6.038,6.038,0,0,0-10-6.76,6.037,6.037,0,1,0-9.588,7.329L10.95,25.967,13.5,22.879V19.566H10.18Z"
          fill={props.fill}
          data-name="Path 1036"
        />
      </G>
    </Svg>
  );
}
