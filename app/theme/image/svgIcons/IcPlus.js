import React from 'react';
import {Svg, Line, Rect, Path} from 'react-native-svg';

export function Plus(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      fill={props.fill}
      viewBox="0 0 18 18">
      <Path
        id="add-to-photos"
        d="M4.8,6.6H3V19.2A1.805,1.805,0,0,0,4.8,21H17.4V19.2H4.8ZM19.2,3H8.4A1.805,1.805,0,0,0,6.6,4.8V15.6a1.805,1.805,0,0,0,1.8,1.8H19.2A1.805,1.805,0,0,0,21,15.6V4.8A1.805,1.805,0,0,0,19.2,3Zm-.9,8.1H14.7v3.6H12.9V11.1H9.3V9.3h3.6V5.7h1.8V9.3h3.6Z"
        fill={props.fill}
        transform="translate(-3 -3)"
      />
    </Svg>
  );
}
