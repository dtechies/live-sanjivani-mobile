import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Text, Screen, TitleBox, Loader, Toast} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getHelpSupport} from 'redux-actions';

import * as styles from './styles';
export const HelpSupportScreen = () => {
  // const navigation = useNavigation();
  const toastRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [helpSupportData, setHelpSupportData] = useState();

  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getHelpSupportData = async () => {
    setLoading(true);
    const getHelpSupportHeader = {
      token: token,
    };
    // console.log('getHelpSupportHeader ==>', getHelpSupportHeader);
    const getHelpSupportResponse = await dispatch(
      getHelpSupport(getHelpSupportHeader),
    );
    const res = getHelpSupportResponse.payload;
    // console.log('getHelpSupport ==>', res);
    setLoading(false);
    if (res.status) {
      // console.log('getHelpSupport data ==>', res.data.HelpSupportData);
      toastMessage(res.message);
      setHelpSupportData(res.data.HelpSupportData);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    getHelpSupportData();
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
      <Screen style={styles.container()} showsVerticalScrollIndicator={false}>
        <TitleBox
          titleContainerStyle={styles.titleStyle()}
          titleTx={'help_screen.title'}
        />
        <View style={styles.mainView()}>
          {helpSupportData &&
            helpSupportData.map((item, index) => {
              return (
                <View>
                  <Text style={styles.textSupport()}>{item.name}</Text>
                </View>
              );
            })}
          {/* <Text style={styles.textSupport()} tx={'help_screen.support'} />
              <View style={styles.supportView()}>
                <Pressable style={styles.supportSubcategoriesView()}>
                  <Text
                    style={styles.textSupport()}
                    tx={'help_screen.help_center'}
                  />
                </Pressable>
                <Pressable style={styles.supportSubcategoriesView()}>
                  <Text
                    style={styles.textSupport()}
                    tx={'help_screen.contact_us'}
                  />
                </Pressable>
              </View>
              <View style={styles.dashView()} />
              <Text
                style={styles.textSupport()}
                tx={'help_screen.disclosures'}
              />
              <View style={styles.supportView()}>
                <Pressable style={styles.supportSubcategoriesView()}>
                  <Text
                    style={styles.textSupport()}
                    tx={'help_screen.new_terms'}
                  />
                </Pressable>
                <Pressable style={styles.supportSubcategoriesView()}>
                  <Text
                    style={styles.textSupport()}
                    tx={'help_screen.Privacy'}
                  />
                </Pressable>
                <Pressable style={styles.supportSubcategoriesView()}>
                  <Text style={styles.textSupport()} tx={'help_screen.crm'} />
                </Pressable>
                <Pressable style={styles.supportSubcategoriesView()}>
                  <Text
                    style={styles.textSupport()}
                    tx={'help_screen.licenses'}
                  />
                </Pressable>
              </View> */}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
