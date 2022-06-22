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

export function Icon4(props) {
  return (
    // height="48"width="29"
    <Svg
      height={props.height}
      width={props.width}
      id="Group_1639"
      viewBox="0 0 29 48"
      data-name="Group 1639">
      <Path
        id="Rectangle_593"
        d="M2.767,0H26.233A2.767,2.767,0,0,1,29,2.767V33.5A14.5,14.5,0,0,1,14.5,48h0A14.5,14.5,0,0,1,0,33.5V2.767A2.767,2.767,0,0,1,2.767,0Z"
        fill={props.fill}
        transform="translate(0 0)"
        data-name="Rectangle 593"
      />
      <Circle
        id="Ellipse_72"
        x="4.5"
        y="4.5"
        fill="#ecf1fa"
        r="4.5"
        transform="translate(10 34)"
        data-name="Ellipse 72"
      />
      <Rect
        height="18"
        id="Rectangle_594"
        width="23"
        fill="#ecf1fa"
        transform="translate(3 6)"
        data-name="Rectangle 594"
      />
    </Svg>
  );
}
