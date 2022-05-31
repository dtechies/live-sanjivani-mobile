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

export function LicenseLine(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 15.963 14.073">
      <G id="license-line" transform="translate(-2 -6)">
        <Path
          id="Path_1171"
          d="M16.966,6H3A1,1,0,0,0,2,7v9.977a1,1,0,0,0,1,1h7.483l.284-.349.464-.569-.045-.08H3V7H16.966v4.27a4.2,4.2,0,0,1,1,.9V7A1,1,0,0,0,16.966,6Z"
          fill={props.fill}
          data-name="Path 1171"
        />
        <Path
          id="Path_1172"
          d="M7,12h8.481v.8H7Z"
          fill={props.fill}
          transform="translate(-2.506 -3.007)"
          data-name="Path 1172"
        />
        <Path
          id="Path_1173"
          d="M7,16h5.487v.8H7Z"
          fill={props.fill}
          transform="translate(-2.506 -5.011)"
          data-name="Path 1173"
        />
        <Path
          id="Path_1174"
          d="M7,23h4.989v.8H7Z"
          fill={props.fill}
          transform="translate(-2.506 -8.519)"
          data-name="Path 1174"
        />
        <Path
          id="Path_1175"
          d="M24.247,17.23a3.173,3.173,0,0,0-2.195,5.487L21.085,23.9l.449,1.8,1.826-2.225a3.123,3.123,0,0,0,1.771,0L26.956,25.7l.449-1.8-.968-1.182a3.173,3.173,0,0,0-2.195-5.487Zm0,5.328a2.15,2.15,0,1,1,2.18-2.15A2.15,2.15,0,0,1,24.247,22.558Z"
          fill={props.fill}
          transform="translate(-9.546 -5.628)"
          data-name="Path 1175"
        />
      </G>
    </Svg>
  );
}
