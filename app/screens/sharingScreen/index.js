import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategory, getSubCategoryData} from 'redux-actions';

import {Text, Screen, InputBox, Button, Toast, Loader} from 'components';
import {size, color, IcDown} from 'theme';
import * as styles from './styles';

export const SharingScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();

  const [isFocus, setIsFocus] = useState(false);
  const [selected, setSelected] = useState([]);
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [extra, setExtra] = useState(0);
  const [emailVal, setEmailVal] = useState('');
  const [loading, setLoading] = useState(false);

  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getAllCategoryData = async () => {
    setLoading(true);
    const getAllCategoryDataHeader = {
      token: token,
    };
    const getAllCategoryDataResponse = await dispatch(
      getAllCategory(getAllCategoryDataHeader),
    );
    // console.log('getAllCategoryData header ==>>', getAllCategoryDataHeader);

    const res = getAllCategoryDataResponse.payload;

    // console.log('getAllCategoryData res ==>', res);
    if (res.status) {
      toastMessage(res.message);
      // console.log('getAllCategoryData List ==>', res.data);
      setLoading(false);
      setAllCategoryList(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const onSendPdf = async () => {
    setLoading(true);
    const getSubCategoryDataHeader = {
      token: token,
    };
    const getSubCategoryDataResponse = await dispatch(
      getSubCategoryData(getSubCategoryDataHeader),
    );
    // console.log('getSubCategoryData header==>>', getSubCategoryDataHeader);

    const res = getSubCategoryDataResponse.payload;

    // console.log('getSubCategoryData res ==>', res);
    setLoading(false);
    if (res.status) {
      // toastMessage(res.message);
      // console.log('getSubCategoryData List ==>', res.data);
      // setAllCategoryList(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    getAllCategoryData();
  }, []);
  return (
    <SafeAreaView style={styles.full()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={100}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Screen style={styles.container()}>
        <Text
          style={styles.textItemToShare()}
          tx="sharing_screen.select_item_to_share"
        />
        <MultiSelect
          data={allCategoryList}
          labelField="name"
          valueField="name"
          placeholder={'Select items'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.placeHolderStyle()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(180)}
          containerStyle={styles.dropdownContainer()}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          renderRightIcon={() => (
            <IcDown
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.cornBlue}
            />
          )}
          flatListProps={{
            bounces: false,
          }}
          value={selected}
          onChange={item => {
            setSelected(item);
          }}
        />
        <Text
          style={styles.textItemToShare()}
          tx="sharing_screen.select_individual"
        />
        <InputBox
          placeholder={'Enter email'}
          value={emailVal}
          onChangeText={val => {
            setEmailVal(val);
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
          // rightIcon={
          //   <IcSearch
          //     height={size.moderateScale(20)}
          //     width={size.moderateScale(20)}
          //     fill={color.purple}
          //   />
          // }
        />
        <View style={styles.row()}>
          <Button
            onPress={() => {
              selected.length > 0 ? onSendPdf() : alert('pleaseselect Item!!');
            }}
            nameTx="sharing_screen.send_pdf"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
          <Button
            onPress={() => {
              selected.length > 0 ? onSendPdf() : alert('pleaseselect Item!!');
            }}
            nameTx="sharing_screen.download"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
        </View>
      </Screen>
    </SafeAreaView>
  );
};
