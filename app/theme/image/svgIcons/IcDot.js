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

export function Dot(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 12 12">
      <G id="clock" transform="translate(-0.056 -0.047)">
        <Path
          id="Shape"
          d="M0,6a6,6,0,1,1,6,6A6,6,0,0,1,0,6Z"
          fill={props.fill}
          transform="translate(0.056 0.047)"
        />
        <Path
          id="Path"
          d="M.385,3.394H2.2a.385.385,0,1,0,0-.771H.771V.385A.381.381,0,0,0,.385,0,.381.381,0,0,0,0,.385V3.009a.381.381,0,0,0,.385.385Z"
          fill={props.fill}
          transform="translate(5.505 3.135)"
        />
      </G>
    </Svg>
  );
}
