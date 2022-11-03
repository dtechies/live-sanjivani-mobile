import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const CustomStatusBar = ({backgroundColor, ...props}) => {
  return <StatusBar backgroundColor={backgroundColor} {...props} />;
};
