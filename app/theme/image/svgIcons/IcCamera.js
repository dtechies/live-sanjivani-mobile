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

export function Camera(props) {
  return (
    <Svg height="48" width="48" viewBox="0 0 48 48">
      <G
        id="Group_1857"
        transform="translate(-207 -134)"
        data-name="Group 1857">
        <G
          id="Rectangle_648"
          fill="#fff"
          stroke="#227fb4"
          strokeWidth="3"
          transform="translate(207 134)"
          data-name="Rectangle 648">
          <Rect height="48" width="48" rx="24" stroke="none" />
          <Rect height="45" width="45" fill="none" rx="22.5" x="1.5" y="1.5" />
        </G>
        <Path
          id="camera"
          d="M6.467,4.445,5.842,6.958H0V19.4H19.86V6.958H14.291l-.625-2.513ZM9.981,6.953A5.585,5.585,0,1,1,4.4,12.538,5.585,5.585,0,0,1,9.981,6.953ZM16.53,8.169h2.816V9.8H16.53ZM9.981,8.6a3.936,3.936,0,1,0,3.936,3.936A3.936,3.936,0,0,0,9.981,8.6Z"
          fill="#1b87b4"
          transform="translate(221.07 146.077)"
        />
      </G>
    </Svg>
  );
}
