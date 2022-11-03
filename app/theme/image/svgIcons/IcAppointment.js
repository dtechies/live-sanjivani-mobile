import React from 'react';
import {Svg, Circle, G, Path, Rect} from 'react-native-svg';

export function Appointment(props) {
  return (
    <Svg
      height={props.height}
      style={{enableBackground: 'new 0 0 512 512'}}
      width={props.width}
      version="1.1"
      viewBox="0 0 60 60"
      x="0"
      y="0"
      xmlSpace="preserve">
      <G>
        <Path
          d="m59 13v34a4 4 0 0 1 -4 4h-50a4 4 0 0 1 -4-4v-34l1-1h56z"
          fill="#e1efff"
          data-original="#e1efff"
        />
        <Path
          d="m59 9v4h-58v-4a4 4 0 0 1 4-4h50a4 4 0 0 1 4 4z"
          fill="#071584"
          data-original="#d14a7b"
        />
        <G fill="#e1efff">
          <Rect
            height="8"
            width="4"
            fill="#e1efff"
            rx="2"
            x="8"
            y="1"
            data-original="#e1efff"
          />
          <Rect
            height="8"
            width="4"
            fill="#e1efff"
            rx="2"
            x="18"
            y="1"
            data-original="#e1efff"
          />
          <Rect
            height="8"
            width="4"
            fill="#e1efff"
            rx="2"
            x="28"
            y="1"
            data-original="#e1efff"
          />
          <Rect
            height="8"
            width="4"
            fill="#e1efff"
            rx="2"
            x="38"
            y="1"
            data-original="#e1efff"
          />
          <Rect
            height="8"
            width="4"
            fill="#e1efff"
            rx="2"
            x="48"
            y="1"
            data-original="#e1efff"
          />
        </G>
        <Path
          d="m14 53a1 1 0 0 1 -.554-.168c-4.012-2.675-4.446-7.767-4.446-9.832 0-8.719 8.143-13.654 8.489-13.859a1 1 0 0 1 1.023 1.718c-.075.041-7.512 4.575-7.512 12.141 0 1.743.347 6.029 3.555 8.168a1 1 0 0 1 -.555 1.832z"
          fill="#7a93a0"
          data-original="#7a93a0"
        />
        <Path
          d="m49.761 46.31a.971.971 0 0 1 -.2-.021 1 1 0 0 1 -.781-1.179 10.619 10.619 0 0 0 .22-2.11c0-7.566-7.437-12.1-7.512-12.141a1 1 0 0 1 1.023-1.718c.346.205 8.489 5.14 8.489 13.859a12.613 12.613 0 0 1 -.261 2.509 1 1 0 0 1 -.978.801z"
          fill="#7a93a0"
          data-original="#7a93a0"
        />
        <Circle x="30" y="31" fill="#071584" r="13" data-original="#d14a7b" />
        <Path
          d="m37 29h-5v-5a1 1 0 0 0 -1-1h-2a1 1 0 0 0 -1 1v5h-5a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-2a1 1 0 0 0 -1-1z"
          fill="#ffffff"
          data-original="#ffffff"
        />
        <Circle x="17" y="54" fill="#6c8493" r="5" data-original="#6c8493" />
        <Path
          d="m46.162 60a1.982 1.982 0 0 1 -1.234-.429l-.785-.618a1 1 0 1 1 1.236-1.572l.785.618 3.754-4.915a5 5 0 1 0 -7.846-6.2l-3.753 4.916.777.632a1 1 0 1 1 -1.239 1.568l-.785-.619a2 2 0 0 1 -.334-2.808l3.754-4.917a7 7 0 1 1 11.008 8.654l-3.753 4.916a1.993 1.993 0 0 1 -1.345.76 2.124 2.124 0 0 1 -.24.014z"
          fill="#6c8493"
          data-original="#6c8493"
        />
      </G>
    </Svg>
  );
}
