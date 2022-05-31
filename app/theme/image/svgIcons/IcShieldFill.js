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

export function ShieldFill(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 17.5 19.52">
      <G id="shield-fill-exclamation" transform="translate(-2.872 -1.125)">
        <Path
          id="Path_1164"
          d="M11.622,1.125a17.462,17.462,0,0,0-3.661.683Q6.145,2.3,4.354,2.869A1.892,1.892,0,0,0,3.048,4.41,15.761,15.761,0,0,0,6.13,16.6,14.565,14.565,0,0,0,9.275,19.59a9.06,9.06,0,0,0,1.311.763,2.7,2.7,0,0,0,1.036.293,2.7,2.7,0,0,0,1.036-.293,9.06,9.06,0,0,0,1.311-.763A14.563,14.563,0,0,0,17.115,16.6,15.765,15.765,0,0,0,20.2,4.41,1.892,1.892,0,0,0,18.89,2.869Q17.1,2.3,15.283,1.808A17.46,17.46,0,0,0,11.622,1.125Zm0,4.555A1.178,1.178,0,0,0,10.45,6.975l.455,4.564a.719.719,0,0,0,1.431,0l.455-4.564A1.178,1.178,0,0,0,11.622,5.68Zm0,7.808a1.3,1.3,0,1,0,1.3,1.3A1.3,1.3,0,0,0,11.624,13.488Z"
          fill={props.fill}
          fillRule="evenodd"
          transform="translate(0)"
          data-name="Path 1164"
        />
      </G>
    </Svg>
  );
}
