import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const CustomStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};
