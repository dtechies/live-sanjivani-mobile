import React from 'react';
import {Web} from './image/svgIcons/IcWeb';
import {Tick} from './image/svgIcons/IcTick';
import {Plus} from './image/svgIcons/IcPlus';
import {Search} from './image/svgIcons/IcSearch';
import {Home} from './image/svgIcons/IcHome';
import {Profile} from './image/svgIcons/IcProfile';
import {Progress} from './image/svgIcons/IcProgress';
import {Sharing} from './image/svgIcons/IcSharing';
import {ArrowNext} from './image/svgIcons/IcArrowNext';

export const IcWeb = props => (
  <Web height={props.height} width={props.width} fill={props.fill} />
);
export const IcTick = props => (
  <Tick height={props.height} width={props.width} fill={props.fill} />
);

export const IcSearch = props => (
  <Search height={props.height} width={props.width} fill={props.fill} />
);

export const IcPlus = props => (
  <Plus height={props.height} width={props.width} fill={props.fill} />
);
export const IcHome = props => (
  <Home height={props.height} width={props.width} fill={props.fill} />
);
export const IcProfile = props => (
  <Profile height={props.height} width={props.width} fill={props.fill} />
);
export const IcProgress = props => (
  <Progress height={props.height} width={props.width} fill={props.fill} />
);
export const IcSharing = props => (
  <Sharing height={props.height} width={props.width} fill={props.fill} />
);
export const IcArrowNext = props => (
  <ArrowNext height={props.height} width={props.width} fill={props.fill} />
);
