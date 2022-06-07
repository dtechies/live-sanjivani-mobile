import React from 'react';
import {View, Image, Pressable} from 'react-native';
import * as styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

import {IcHeartNew} from 'theme';
import {
  images,
  IcArrowNext,
  IcLeftArrow,
  IcCrossArrow,
  IcProfileLogo,
  IcLeftShort,
  IcCamera,
} from 'theme';
import {color, size} from 'theme';

import {Text} from 'components';

export const Header = props => {
  let colArray = props.isColor
    ? [color.headerColor, color.headerBorder]
    : props.isBlue
    ? [color.headerBlue, color.headerBlue]
    : [color.themeBack, color.themeBack];
  return (
    // <View>
    <LinearGradient
      colors={colArray}
      style={styles.containerMain(
        props.isLogoCenter ? 2 : props.isLogo ? 1 : 0,
      )}>
      <View
        style={styles.backMain(
          props.isLongArrowLeft ? 3 : props.isProfile ? 1 : 0,
        )}>
        <View style={styles.profileInfoMain()}>
          <Pressable onPress={props.leftOnPress} style={styles.leftIconDes()}>
            {props.isLeftArrow && (
              <IcLeftShort
                width={size.moderateScale(10)}
                height={size.moderateScale(18)}
                fill={props.isColor || props.isBlue ? color.white : color.black}
              />
            )}
            {props.isLongArrowLeft && (
              <IcLeftArrow
                width={size.moderateScale(21)}
                height={size.moderateScale(15)}
                fill={props.isColor || props.isBlue ? color.white : color.blue}
              />
            )}
          </Pressable>

          {props.isHeading && !props.isBlue && (
            <View
              style={styles.profileInfo(
                !props.isLongArrowLeft && !props.isLeftArrow && props.isColor
                  ? 4
                  : props.isColor
                  ? 3
                  : 0,
              )}>
              <Text
                style={styles.profileName(props.isColor ? 1 : 3)}
                tx={props.title}
                text={props.text}
              />
            </View>
          )}
        </View>
        {props.isHeading && props.isBlue && (
          <View style={styles.profileInfo(props.isColor ? 3 : 0)}>
            <Text
              style={styles.profileName(props.isColor ? 1 : 3)}
              tx={props.title ? props.title : ' Medication Reminder'}
              text={props.text}
            />
          </View>
        )}
        {props.isProfile && (
          <Pressable
            onPress={() => {
              // console.log('Profile Icon Clicked...');
            }}>
            <IcProfileLogo
              width={size.moderateScale(26)}
              height={size.moderateScale(26)}
              fill={props.isColor || props.isBlue ? color.white : color.black}
            />
          </Pressable>
        )}
        {props.isClose && (
          <Pressable
            onPress={() => {
              // console.log('Profile Icon Clicked...');
            }}>
            <IcCrossArrow
              width={size.moderateScale(11)}
              height={size.moderateScale(11)}
              fill={props.isColor || props.isBlue ? color.white : color.blue}
            />
          </Pressable>
        )}
      </View>
      {(props.isLogo || props.isLogoCenter) && (
        <View
          style={styles.profileInfoMain(
            props.isLogoCenter ? 2 : props.isLongArrowLeft ? 3 : 1,
          )}>
          <View
            style={styles.imgMain(
              props.isCamera ? 3 : props.isLogoCenter ? 1 : 2,
            )}>
            {console.log('Header image ==> ', props.source.uri)}
            <Image
              source={
                props.source.uri == '' ? images.icPersonLogo : props.source
              }
              style={styles.imgSize(1)}
            />
          </View>
          {props.isCamera && (
            <View
              style={{
                marginTop: size.moderateScale(-45),
                marginLeft: size.moderateScale(75),
              }}>
              <Pressable onPress={props.iconPress}>
                <IcCamera />
              </Pressable>
            </View>
          )}
          <View
            style={
              props.isEditDetails
                ? styles.propInfo()
                : styles.profileInfo1(props.isLogoCenter ? 2 : 1)
            }>
            <Text
              style={styles.profileName(props.isColor || props.isBlue ? 1 : 3)}>
              {props.name ? props.name : ''}
            </Text>
            <Text
              style={
                props.isCamera
                  ? styles.profileName(props.isColor || props.isBlue ? 1 : 3)
                  : styles.profileDetails(props.isColor || props.isBlue ? 1 : 3)
              }>
              {props.secName ? props.secName : ''}
            </Text>
            {/* {!props.isCamera && (
                <Text
                  style={styles.profileDetails(
                    props.isColor || props.isBlue ? 1 : 3,
                  )}>
                  Pune, MH
                </Text>
              )} */}
          </View>
        </View>
      )}
    </LinearGradient>
    // </View>
  );
};
