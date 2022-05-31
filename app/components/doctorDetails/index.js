import React from 'react';
import {View, Image, Pressable} from 'react-native';
import * as styles from './styles';

import {images, IcArrowNext, IcMoreDetails} from 'theme';
import {size, color, IcSearch, fontSize} from 'theme';
import {Text, StarRating} from 'components';

export const DocDetails = props => {
  return (
    <View style={styles.container(props.isSelected)}>
      <Image
        style={{
          height: props.isSelected
            ? size.moderateScale(110)
            : size.moderateScale(69),
          width: props.isSelected
            ? size.moderateScale(110)
            : size.moderateScale(69),
        }}
        source={props.item.image}
      />
      <View style={styles.textMain()}>
        <Text style={styles.docName(props.isSelected)}>{props.item.name}</Text>
        <Text style={styles.docDetails(props.isSelected, true)}>
          {props.item.profession}
        </Text>
        <Text style={styles.docDetails(props.isSelected, false)}>
          {props.item.address}
        </Text>
        <View style={styles.ratingMain()}>
          <StarRating rate={props.item.rate} isSelected={props.isSelected} />
          <Text style={styles.docDetails()}>({props.item.total})</Text>
        </View>
      </View>
      <View style={styles.moreDetails()}>
        <Pressable
          onPress={() => {
            console.log('click more Details....');
          }}>
          <IcMoreDetails />
        </Pressable>
      </View>
    </View>
  );
};
