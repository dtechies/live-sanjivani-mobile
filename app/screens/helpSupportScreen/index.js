import React, {useRef, useState, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Screen, Header, Toast, Loader} from 'components';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';
import {size} from 'theme';
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
    let res = {status: false, message: 'Connection Error...!'};
    if (helpResponse) {
      res = helpResponse;
    }
    if (res.status) {
      // console.log('helpResponse data ==>', res);
      setLoading(false);
      // toastMessage(res.message);
      let data = res.data.HelpSupportData;
      let support = data.filter(val => {
        return val.type == 'Support';
      });
      setHelpSupport(support);
      let disclosures = data.filter(val => {
        return val.type == 'Disclosures';
      });
      setHelpDisclosures(disclosures);
      setExtra(extra + 1);
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
            {helpSupport.length != 0 ? (
              helpSupport.map((val, i) => {
                return (
                  <Pressable
                    style={styles.supportSubcategoriesView()}
                    key={i + 'helpSupport'}
                    onPress={() => {
                      navigation.navigate('helpSupportDetailsScreen', {
                        title: val.name,
                        description: val.description,
                      });
                    }}>
                    <SvgUri
                      height={size.moderateScale(20)}
                      width={size.moderateScale(20)}
                      uri={val.icon}
                    />
                    <Text style={styles.textSupport()} text={val.name} />
                  </Pressable>
                );
              })
            ) : (
              <Text style={styles.noData()}>No Data Found.</Text>
            )}
          </View>
          <View style={styles.dashView()} />
          <Text
            style={styles.textMainHeader()}
            tx={'help_screen.disclosures'}
          />
          <View style={styles.supportView()}>
            {helpDisclosures.length != 0 ? (
              helpDisclosures.map((val, i) => {
                return (
                  <Pressable
                    style={styles.supportSubcategoriesView()}
                    key={i + 'helpDisclosures'}
                    onPress={() => {
                      navigation.navigate('helpSupportDetailsScreen', {
                        title: val.name,
                        description: val.description,
                      });
                    }}>
                    <SvgUri
                      height={size.moderateScale(20)}
                      width={size.moderateScale(20)}
                      uri={val.icon}
                    />
                    <Text style={styles.textSupport()} text={val.name} />
                  </Pressable>
                );
              })
            ) : (
              <Text style={styles.noData()}>No Data Found.</Text>
            )}
          </View>
        </View>
      </Screen>
    </SafeAreaView>
  );
};
