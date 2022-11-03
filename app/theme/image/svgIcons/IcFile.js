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
export function File(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      fill={props.fill}
      viewBox="0 0 17.5 20.417">
      <Path
        id="file"
        d="M11.666,5.833V.456a2.384,2.384,0,0,1,.41.319l4.648,4.648a2.422,2.422,0,0,1,.319.41H11.666ZM10.208,6.2A1.09,1.09,0,0,0,11.3,7.292h6.2V19.323a1.09,1.09,0,0,1-1.094,1.094H1.094A1.054,1.054,0,0,1,.319,20.1,1.058,1.058,0,0,1,0,19.323V1.094A1.054,1.054,0,0,1,.319.319,1.058,1.058,0,0,1,1.094,0h9.114Z"
        fill={props.fill}
      />
    </Svg>
  );
}
