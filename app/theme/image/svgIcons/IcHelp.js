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

export function Help(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 19.5 19.5">
      <G id="help" transform="translate(-2.25 -2.25)">
        <Path
          id="Path_1157"
          d="M12,2.25A9.75,9.75,0,1,0,21.75,12,9.75,9.75,0,0,0,12,2.25Zm0,18.107A8.357,8.357,0,1,1,20.357,12,8.357,8.357,0,0,1,12,20.357Z"
          fill={props.fill}
          data-name="Path 1157"
        />
        <Path
          id="Path_1158"
          d="M18.4,25.811a1.045,1.045,0,1,1-1.045-1.02,1.045,1.045,0,0,1,1.045,1.02Z"
          fill={props.fill}
          transform="translate(-5.357 -8.587)"
          data-name="Path 1158"
        />
        <Path
          id="Path_1159"
          d="M16.553,9H15.508a3.127,3.127,0,0,0-3.134,3.134v.349h1.393v-.349a1.741,1.741,0,0,1,1.741-1.741h1.045a1.741,1.741,0,1,1,0,3.482H15.16v3.134h1.393V15.268a3.134,3.134,0,1,0,0-6.268Z"
          fill={props.fill}
          transform="translate(-3.857 -2.571)"
          data-name="Path 1159"
        />
      </G>
    </Svg>
  );
}
