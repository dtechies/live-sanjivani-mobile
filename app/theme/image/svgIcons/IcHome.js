import React from 'react';
import {Svg, Path} from 'react-native-svg';

export function Home(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      id="Editable-line"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve">
      <Path
        id="XMLID_1_"
        d="  M27,29H5V17H3.235c-1.138,0-1.669-1.419-0.812-2.168L14.131,3.745c1.048-0.993,2.689-0.993,3.737,0l11.707,11.087  C30.433,15.58,29.902,17,28.763,17H27V29z"
        fill={props.fill}
        stroke="none"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        id="XMLID_2_"
        d="  M20,29h-8v-6c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4V29z"
        fill={props.fill}
        stroke="none"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
