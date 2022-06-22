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

export function Step(props) {
  return (
    <Svg height="24.484" width="24.484" viewBox="0 0 24.484 24.484">
      <G
        id="Group_1857"
        transform="translate(-227.254 -430.71)"
        data-name="Group 1857">
        <Path
          id="chart-stepper"
          d="M12.743,19.739v-7h7v-7h7V4H17.99v7h-7v7H4V2.25H2.25V24.985A1.75,1.75,0,0,0,4,26.734H26.734V24.985H4V19.739Z"
          fill="#3acfd5"
          transform="translate(225.004 428.46)"
        />
        <Path
          id="directions-walk"
          d="M5.226,2.776a1.354,1.354,0,0,1-1-.408,1.339,1.339,0,0,1-.408-.98A1.334,1.334,0,0,1,4.23.408a1.419,1.419,0,0,1,1.992,0,1.334,1.334,0,0,1,.408.98,1.338,1.338,0,0,1-.408.98A1.355,1.355,0,0,1,5.226,2.776ZM2.646,5.161.686,14.992h1.47L3.429,9.407l1.437,1.4v4.181h1.4V9.766L4.8,8.362l.425-2.091A4.838,4.838,0,0,0,9.048,8V6.63A3.369,3.369,0,0,1,7.3,6.156,3.307,3.307,0,0,1,6.075,4.932L5.357,3.822a1.368,1.368,0,0,0-1.176-.686,1.657,1.657,0,0,0-.277.033,1.657,1.657,0,0,1-.277.033L0,4.736V8H1.4V5.651l1.241-.49Z"
          fill="#3acfd5"
          transform="translate(229.321 431.31)"
        />
      </G>
    </Svg>
  );
}
