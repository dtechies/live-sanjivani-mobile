import React from 'react';
import {Web} from './image/svgIcons/IcWeb';
import {Tick} from './image/svgIcons/IcTick';
import {Plus} from './image/svgIcons/IcPlus';
import {Search} from './image/svgIcons/IcSearch';

export const IcWeb = props => (
  <Web height={props.height} width={props.width} fill={props.fill} />
);
export const IcTick = props => (
  <Tick height={props.height} width={props.width} fill={props.fill} />
);

export const IcPlus = props => (
  <Plus height={props.height} width={props.width} fill={props.fill} />
);

export const IcSearch = props => (
  <Search height={props.height} width={props.width} fill={props.fill} />
);
