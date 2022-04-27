import React from 'react';
import {Svg, G, Path, Rect} from 'react-native-svg';

export function Pencil(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 4.954 7.377">
      <G
        id="Group_97815"
        transform="translate(-11508.401 5733.911) rotate(30)"
        data-name="Group 97815">
        <Path
          id="Polygon_8"
          d="M.6,0l.6,1.2H0Z"
          fill={props.fill}
          transform="translate(7104.204 -10714.045) rotate(-180)"
          data-name="Polygon 8"
        />
        <Rect
          height="4.212"
          id="Rectangle_19160"
          width="1.204"
          fill={props.fill}
          transform="translate(7103 -10720.063)"
          data-name="Rectangle 19160"
        />
        <Rect
          height="1.204"
          id="Rectangle_19161"
          width="1.204"
          fill={props.fill}
          transform="translate(7103 -10721.868)"
          data-name="Rectangle 19161"
        />
      </G>
    </Svg>
  );
}
