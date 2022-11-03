import React from 'react';
import {Svg, G, Path, Rect} from 'react-native-svg';

export function Calender(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 21 19.94">
      <G
        id="Group_95954"
        transform="translate(-8456 273.238)"
        data-name="Group 95954">
        <G
          id="Rectangle_18644"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(8456 -272)"
          data-name="Rectangle 18644">
          <Rect height="18.701" width="21" stroke="none" />
          <Rect height="16.701" width="19" fill="none" x="1" y="1" />
        </G>
        <Path
          id="Path_198933"
          d="M8457.128-266.12h18.585"
          fill="none"
          stroke={props.fill}
          strokeWidth="2"
          transform="translate(0 -0.495)"
          data-name="Path 198933"
        />
        <Path
          id="Path_198934"
          d="M8462.114-271.754v-2.451"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(0 1.967)"
          data-name="Path 198934"
        />
        <Path
          id="Path_198935"
          d="M8462.114-271.754v-2.451"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(9 1.967)"
          data-name="Path 198935"
        />
        <Path
          id="Path_198936"
          d="M8461.76-260.435l1.742,1.742,4.211-4.211"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(1.764 0.255)"
          data-name="Path 198936"
        />
      </G>
    </Svg>
  );
}
