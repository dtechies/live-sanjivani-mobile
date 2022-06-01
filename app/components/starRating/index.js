import React from 'react';
import {View, Text} from 'react-native';
import * as styles from './styles';

import {IcStarBlank, IcStarFill} from 'theme';
import {size, color, IcSearch} from 'theme';

export const StarRating = props => {
  return (
    <View style={styles.container()}>
      {[...Array(5)].map((val, i) => {
        return (
          <View style={styles.singleStar()} key={i + 'star'}>
            {props.rate >= i + 1 ? (
              <IcStarFill
                height={
                  props.isSelected
                    ? size.moderateScale(14)
                    : size.moderateScale(9)
                }
                width={
                  props.isSelected
                    ? size.moderateScale(14)
                    : size.moderateScale(9)
                }
                fill={color.starColor}
              />
            ) : (
              <IcStarBlank
                height={
                  props.isSelected
                    ? size.moderateScale(14)
                    : size.moderateScale(9)
                }
                width={
                  props.isSelected
                    ? size.moderateScale(14)
                    : size.moderateScale(9)
                }
                fill={color.starColor}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};
