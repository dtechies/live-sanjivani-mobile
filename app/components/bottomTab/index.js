import React from 'react';

import {Pressable, View} from 'react-native';
import * as styles from './styles';
import {Text} from '../';
import {
  color,
  size,
  IcPlus,
  IcHome,
  IcProfile,
  IcProgress,
  IcSharing,
  IcHeartCare,
} from 'theme';
export const BottomTab = props => {
  const {navigation, state, descriptors} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const onTabBarPress = (route, i) => {
    navigation.navigate(route.name);
  };
  return (
    <View style={styles.container()}>
      {state.routes.map((r, index) => {
        var Icon;
        if (r.name === 'Today') {
          Icon = IcHeartCare;
        } else if (r.name === 'Progress') {
          Icon = IcProgress;
        } else if (r.name === 'Sharing') {
          Icon = IcSharing;
        } else if (r.name === 'Add') {
          Icon = IcPlus;
        } else if (r.name === 'Profile') {
          Icon = IcProfile;
        }
        return (
          <Pressable
            style={styles.iconClick()}
            key={index.toString()}
            onPress={() => {
              onTabBarPress(r, index);
            }}>
            <Icon
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={state.index === index ? color.white : color.darkGrey}
            />
            <Text style={styles.textLabel(state.index === index)}>
              {r.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
