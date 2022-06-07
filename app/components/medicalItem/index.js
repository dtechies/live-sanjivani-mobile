import {View, Pressable, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../';
import {color, IcSelected, size} from 'theme';
import {SvgUri, SvgXml} from 'react-native-svg';

export const MedicalItems = props => {
  const {
    containerStyle,
    onPress,
    nameFirst,
    nameSecond,
    nameFirstTx,
    nameSecondTx,
    textFirstStyle,
    textSecondStyle,
    svgCardItems,
    isSelected,
    nameThirdTx,
    nameThird,
  } = props;
  // const imageUrl = svgCardItems ? {uri: svgCardItems} : images.icLogo;
  // const [imgXml, setImgXml] = React.useState('<svg></svg>');
  // const getImgXml = async () => {
  //   const xml = await (await fetch(svgCardItems)).text();
  //   setImgXml(xml);
  //   return xml;
  // };
  // React.useEffect(() => {
  //   getImgXml();
  // }, []);

  return (
    <Pressable style={[styles.container(), containerStyle]} onPress={onPress}>
      <View style={styles.flexOne()}></View>
      <View style={styles.centerView()}>
        {/* <View style={styles.centerLeftView()}>{svgCardItems}</View> */}
        <SvgUri
          height={size.moderateScale(35)}
          width={size.moderateScale(35)}
          // color={'red'}
          uri={svgCardItems}
        />
        {/* <SvgXml
          xml={imgXml}
          // .replace(/fill="#[0-9a-f]{6}"/g, `fill="${color.turquoiseNew}"`)
          // .replace(/stroke="#[0-9a-f]{6}"/g, `stroke="${'green'}"`)

          height={size.moderateScale(35)}
          width={size.moderateScale(35)}
        /> */}
        <View style={styles.centerRightView()}>
          <View style={styles.flexDirectionStyle()}>
            <Text
              style={[styles.TextFirstTxt(), textFirstStyle]}
              text={nameFirst}
              tx={nameFirstTx}
            />
            <Text
              style={[styles.TextUnitTxt(), textFirstStyle]}
              text={' ' + nameThird ? nameThird : ''}
              tx={nameThirdTx}
            />
          </View>
          <Text
            style={[styles.TextSecondTxt(), textSecondStyle]}
            text={nameSecond}
            tx={nameSecondTx}
          />
        </View>
      </View>

      <View style={styles.flexOne()}>
        {isSelected && (
          <IcSelected height={20} width={20} fill={color.borderBlue} />
        )}
      </View>
    </Pressable>
  );
};
