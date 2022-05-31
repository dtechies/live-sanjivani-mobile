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

export function Selected(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 16 16">
      <G
        id="Group_1625"
        transform="translate(-168 -160)"
        data-name="Group 1625">
        <Circle
          id="Ellipse_70"
          x="8"
          y="8"
          fill={props.fill}
          r="8"
          transform="translate(168 160)"
          data-name="Ellipse 70"
        />
        <Path
          id="Path_1108"
          d="M-1646.813,6300.07l2.506,3.611,7.811-5.9"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="1"
          transform="translate(1817.654 -6132.734)"
          data-name="Path 1108"
        />
      </G>
    </Svg>
  );
}
