import React from 'react';

import {Pressable, View} from 'react-native';
import * as styles from './styles';
import {Text} from '../';
import {
  color,
  size,
  IcPlus,
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
    // NOTE: for pop to top of stack which is nested inside bottom tab navigation
    navigation.reset({
      routes: [{name: route.name}],
    });

    // NOTE: normal navigation
    // navigation.navigate(route.name);
  };
  return (
    <View style={styles.container()}>
      {state.routes.map((r, index) => {
        var Icon;
        let tabName = '';
        if (r.name === 'Today') {
          Icon = IcHeartCare;
          tabName = 'btb.today';
        } else if (r.name === 'Progress') {
          Icon = IcProgress;
          tabName = 'btb.progress';
        } else if (r.name === 'Sharing') {
          Icon = IcSharing;
          tabName = 'btb.sharing';
        } else if (r.name === 'Add') {
          Icon = IcPlus;
          tabName = 'btb.add';
        } else if (r.name === 'Profile') {
          Icon = IcProfile;
          tabName = 'btb.profile';
        }
        return (
          <Pressable
            style={styles.iconClick()}
            key={index.toString()}
            onPress={() => {
              onTabBarPress(r, index);
            }}>
            <Icon
              height={size.moderateScale(28)}
              width={size.moderateScale(28)}
              fill={state.index === index ? color.white : color.darkGrey}
            />
            <Text
              tx={tabName}
              style={styles.textLabel(state.index === index)}
            />
          </Pressable>
        );
      })}
    </View>
  );
};
