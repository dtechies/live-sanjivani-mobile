import React from 'react';
import {Web} from './image/svgIcons/IcWeb';
import {Tick} from './image/svgIcons/IcTick';

export const IcWeb = props => (
  <Web height={props.height} width={props.width} fill={props.fill} />
);
export const IcTick = props => (
  <Tick height={props.height} width={props.width} fill={props.fill} />
);
