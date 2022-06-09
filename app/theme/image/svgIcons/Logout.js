import React from 'react';
import {Svg, G, Path} from 'react-native-svg';

export function Logout(props) {
  return (
    <Svg
      height={props.height}
      style={{enableBackground: 'new 0 0 512 512'}}
      width={props.width}
      version="1.1"
      viewBox="0 0 512 512"
      x="0"
      y="0"
      xmlSpace="preserve">
      <G>
        <G fillRule="evenodd">
          <Path
            d="m256 0c-141.2 0-256 114.8-256 256s114.8 256 256 256 256-114.8 256-256-114.8-256-256-256z"
            fill={props.fill}
            data-original="#f34235"
          />
          <Path
            d="m366 274.5c0 60.7-49.4 110-110 110-60.7 0-110-49.4-110-110 0-37.4 18.7-71.9 50.1-92.2 7.4-4.8 17.3-2.7 22.1 4.7s2.7 17.3-4.7 22.1c-22.3 14.4-35.5 38.9-35.5 65.4 0 43 35 78 78 78s78-35 78-78c0-26.5-13.3-51-35.5-65.4-7.4-4.8-9.5-14.7-4.7-22.1s14.7-9.5 22.1-4.7c31.4 20.3 50.1 54.8 50.1 92.2zm-126-57.1v-73.9c0-8.8 7.2-16 16-16s16 7.2 16 16v73.9c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
            fill={props.stroke}
            data-original={props.stroke}
          />
        </G>
      </G>
    </Svg>
  );
}
