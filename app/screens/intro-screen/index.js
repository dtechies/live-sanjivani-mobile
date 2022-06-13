import React, {useState, useRef} from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {color, size} from 'theme';
import {images, IcIntro1, IcIntro2, IcIntro3, IcSplashColor} from 'theme';
import {Button, Text} from 'components';
import styles from './styles';
import {useDoubleBackPressExit} from 'utils';
import {ChangeLanguage} from '../../components';

export const IntroScreen = () => {
  const scrollRef = useRef(null);
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const route = useRoute();
  // console.log('route', route.name);
  const loginPress = () => {
    if (active < 2) {
      setActive(active + 1);
      {
        scrollRef.current.scrollTo({
          x: size.deviceWidth * (active + 1),
          y: 0,
          animated: true,
        });
      }
    } else {
      navigation.navigate('loginScreen');
    }
  };

  const onChange = ({nativeEvent}) => {
    const active = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setActive(active);
  };
  useDoubleBackPressExit();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          onMomentumScrollEnd={onChange}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}>
          {[...Array(3)].map((i, val) => {
            return (
              <View key={val.toString()} style={styles.welcomeTextView}>
                <View style={styles.headingMain}>
                  <IcSplashColor />
                  <Text
                    style={styles.welcomeTextMain}
                    tx="intro_Screen.mainTitle"
                  />
                  <Text style={styles.welcomeText} tx="intro_Screen.subTitle" />
                  <Text
                    style={styles.welcomeTextSub}
                    tx={
                      val == 0
                        ? 'intro_Screen.getMedicine'
                        : val == 1
                        ? 'intro_Screen.getAppointment'
                        : 'intro_Screen.Discuss'
                    }
                  />
                </View>
                {val == 0 ? (
                  <View>
                    <Image
                      source={images.icBack}
                      style={styles.logoBack}
                      height={450}
                      resizeMode="stretch"
                    />
                    <View style={styles.introImg}>
                      <Image
                        resizeMode="contain"
                        source={images.imgOnBoardingOne}
                        style={{
                          height: size.moderateScale(260),
                          width: size.moderateScale(245),
                        }}
                      />
                      {/* <IcIntro1
                        height={size.moderateScale(150)}
                        width={size.moderateScale(235)}
                      /> */}
                    </View>
                  </View>
                ) : val == 1 ? (
                  <View style={styles.imageSec}>
                    <IcIntro2
                      height={size.moderateScale(260)}
                      width={size.moderateScale(275)}
                    />
                  </View>
                ) : (
                  <View style={styles.imageThird}>
                    <IcIntro3
                      height={size.moderateScale(300)}
                      width={size.moderateScale(245)}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            buttonStyle={styles.buttonStyle}
            buttonText={styles.buttonText}
            nameTx="intro_Screen.skip"
            onPress={() => {
              navigation.navigate('loginScreen');
            }}
          />
          <View style={styles.dotsView}>
            {[...Array(3)].map((i, k) => (
              <View key={k.toString()} style={styles.footerDot}>
                <View
                  style={[
                    styles.dotSelected,
                    {
                      backgroundColor:
                        k === active ? color.blue : color.lightBlue,
                    },
                  ]}
                />
              </View>
            ))}
          </View>

          <Button
            buttonStyle={styles.buttonStyle}
            buttonText={styles.buttonText}
            nameTx="intro_Screen.next"
            onPress={loginPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
