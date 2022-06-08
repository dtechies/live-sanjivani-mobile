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

export function TrueSvg(props) {
  return (
    <Svg height="12" width="12" viewBox="0 0 12 12">
      <G
        id="Group_1777"
        transform="translate(-30.556 -56.887)"
        data-name="Group 1777">
        <G id="clock" transform="translate(30.5 56.84)">
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
        <Path
          id="Path_1130"
          d="M32.638,63.2l1.48,2.643,6.448-4.281"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="1"
          transform="translate(-0.045 -0.814)"
          data-name="Path 1130"
        />
      </G>
    </Svg>
  );
}
