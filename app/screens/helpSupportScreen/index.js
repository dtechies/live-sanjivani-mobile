import React, {useRef, useState, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Screen, Header, Toast, Loader} from 'components';
import {useNavigation} from '@react-navigation/native';
import {
  size,
  color,
  IcHelp,
  IcCustomer,
  IcFile,
  IcLicenseLine,
  IcMdContacts,
  IcShieldFill,
} from 'theme';
import {useDispatch} from 'react-redux';
import {getHelpSupport} from 'redux-actions';
import * as styles from './styles';

export const HelpSupportScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [helpSupport, setHelpSupport] = useState([]);
  const [helpDisclosures, setHelpDisclosures] = useState([]);
  const [extra, setExtra] = useState(0);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const onHelpSupport = async () => {
    setLoading(true);
    const helpResponse = await dispatch(getHelpSupport());
    const res = helpResponse;
    if (res.status) {
      console.log('helpResponse data ==>', res);
      setLoading(false);
      toastMessage(res.message);
      let data = res.data.HelpSupportData;
      let support = data.filter(val => {
        return val.type == 'Support';
      });
      // console.log('support ==>', support);
      setHelpSupport(support);
      let disclosures = data.filter(val => {
        return val.type == 'Discolours';
      });
      setHelpDisclosures(disclosures);
      // console.log('disclosures ==>', disclosures);
      // setHelpSupport(res.data.HelpSupportData);
      setExtra(extra + 1);
      // setTimeout(() => {
      //   navigation.navigate('bottomStackNavigation', {screen: 'Today'});
      // }, 150);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    onHelpSupport();
  }, []);

  return (
    <SafeAreaView style={styles.full()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'help_screen.title'}
      />
      <Screen style={styles.container()} showsVerticalScrollIndicator={false}>
        <View style={styles.mainView()}>
          <Text style={styles.textMainHeader()} tx={'help_screen.support'} />
          <View style={styles.supportView()}>
            {helpSupport &&
              helpSupport.map(val => {
                return (
                  <Pressable
                    style={styles.supportSubcategoriesView()}
                    onPress={() => {
                      navigation.navigate('helpSupportDetailsScreen', {
                        title: val.name,
                        description: val.description,
                      });
                    }}>
                    <IcHelp
                      height={size.moderateScale(20)}
                      width={size.moderateScale(20)}
                      fill={color.blue}
                    />
                    <Text style={styles.textSupport()} text={val.name} />
                  </Pressable>
                );
              })}
            {/* <Pressable style={styles.supportSubcategoriesView()}>
              <IcMdContacts
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text
                style={styles.textSupport()}
                tx={'help_screen.contact_us'}
              />
            </Pressable> */}
          </View>
          <View style={styles.dashView()} />
          <Text
            style={styles.textMainHeader()}
            tx={'help_screen.disclosures'}
          />
          <View style={styles.supportView()}>
            {helpDisclosures &&
              helpDisclosures.map(val => {
                return (
                  <Pressable
                    style={styles.supportSubcategoriesView()}
                    onPress={() => {
                      navigation.navigate('helpSupportDetailsScreen', {
                        title: val.name,
                        description: val.description,
                      });
                    }}>
                    <IcHelp
                      height={size.moderateScale(20)}
                      width={size.moderateScale(20)}
                      fill={color.blue}
                    />
                    <Text style={styles.textSupport()} text={val.name} />
                  </Pressable>
                );
              })}
            {/* <Pressable style={styles.supportSubcategoriesView()}>
              <IcFile
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.new_terms'} />
            </Pressable> */}
            {/* <Pressable style={styles.supportSubcategoriesView()}>
              <IcShieldFill
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.Privacy'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcCustomer
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.crm'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <IcLicenseLine
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
              <Text style={styles.textSupport()} tx={'help_screen.licenses'} />
            </Pressable> */}
          </View>
        </View>
      </Screen>
    </SafeAreaView>
  );
};
