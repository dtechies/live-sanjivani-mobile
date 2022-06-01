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

export function ProfileLogo(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 26.766 26.766">
      <G id="noun_User_1335326" transform="translate(206.947 -167.053)">
        <G
          id="Group_3"
          transform="translate(-206.947 167.053)"
          data-name="Group 3">
          <Path
            id="Path_4"
            d="M18.436,5.053A13.383,13.383,0,1,0,31.819,18.436,13.4,13.4,0,0,0,18.436,5.053Zm0,24.931A11.548,11.548,0,1,1,29.984,18.436,11.561,11.561,0,0,1,18.436,29.984Z"
            fill={props.fill}
            transform="translate(-5.053 -5.053)"
            data-name="Path 4"
          />
          <Path
            id="Path_5"
            d="M41.048,32.963A4.153,4.153,0,1,0,36.9,28.81,4.158,4.158,0,0,0,41.048,32.963Zm0-6.472A2.319,2.319,0,1,1,38.73,28.81,2.321,2.321,0,0,1,41.048,26.49Z"
            fill={props.fill}
            transform="translate(-27.414 -18.819)"
            data-name="Path 5"
          />
          <Path
            id="Path_6"
            d="M39.9,56.067a5.182,5.182,0,0,0-4.837-3.518.914.914,0,0,0-.606.179,4.11,4.11,0,0,1-4.969,0,.92.92,0,0,0-.605-.178A5.185,5.185,0,0,0,24.029,56.1a.917.917,0,1,0,1.714.654,3.312,3.312,0,0,1,2.944-2.351,5.931,5.931,0,0,0,6.562,0,3.3,3.3,0,0,1,2.935,2.323.918.918,0,0,0,1.711-.664Z"
            fill={props.fill}
            transform="translate(-18.337 -38.405)"
            data-name="Path 6"
          />
        </G>
      </G>
    </Svg>
  );
}
