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

export function BtnPlus(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 66 66">
      <Defs />
      <G
        id="Group_1786"
        transform="translate(-307 -748)"
        data-name="Group 1786">
        <G transform="matrix(1, 0, 0, 1, 307, 748)">
          <Circle
            id="Ellipse_78-2"
            x="24"
            y="24"
            fill="#077dcb"
            r="24"
            transform="translate(9 6)"
            data-name="Ellipse 78"
          />
        </G>
        <Path
          id="plus"
          d="M19.5,19.5V30a1.5,1.5,0,0,1-3,0V19.5H6a1.5,1.5,0,0,1,0-3H16.5V6a1.5,1.5,0,0,1,3,0V16.5H30a1.5,1.5,0,0,1,0,3Z"
          fill="#fff"
          fillRule="evenodd"
          transform="translate(322.5 760.5)"
        />
      </G>
    </Svg>
  );
}
