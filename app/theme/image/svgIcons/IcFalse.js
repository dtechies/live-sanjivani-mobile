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

export function FalseSvg(props) {
  return (
    <Svg height="12" width="12" viewBox="0 0 12 12">
      <G
        id="Group_1778"
        transform="translate(-31 -56.774)"
        data-name="Group 1778">
        <G id="Group_1780" data-name="Group 1780">
          <G id="clock" transform="translate(30.944 56.727)">
            <Path
              id="Shape"
              d="M0,6a6,6,0,1,1,6,6A6,6,0,0,1,0,6Z"
              fill="#f82020"
              transform="translate(0.056 0.047)"
            />
          </G>
          <Path
            id="plus-line"
            d="M10,7.4H7.8V5.2a.2.2,0,1,0-.4,0V7.4H5.2a.2.2,0,0,0-.2.2.182.182,0,0,0,.2.188H7.4v2.214a.2.2,0,1,0,.4,0V7.8H10a.2.2,0,1,0,0-.4Z"
            fill="#fff"
            transform="translate(26.248 62.773) rotate(-45)"
          />
        </G>
      </G>
    </Svg>
  );
}
