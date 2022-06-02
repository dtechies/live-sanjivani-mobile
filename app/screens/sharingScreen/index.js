import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSubCategory} from 'redux-actions';
import {Text, Screen, InputBox, Button, Header, MedicalItems} from 'components';
import {serviceListData, SharingData} from 'json';
import {size, color, IcSearch, IcDown} from 'theme';
import * as styles from './styles';

export const SharingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);
  const [selected, setSelected] = useState([]);
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);

  const [sharingData, setSharingData] = useState(SharingData);
  const [sharingDataList, setSharingDataList] = useState([]);
  const clearData = () => {
    sharingData.map((val, i) => {
      sharingData[i].selectedCard = false;
    });
    setExtra(extra + 1);
  };
  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData,
  }));
  // console.log('user data ==>', token);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getAllCategoryData = async () => {
    // setLoading(true);
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
      // toastMessage(res.message);
      // console.log('getAllCategoryData List ==>', res.data);
      // setLoading(false);
      setAllCategoryList(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const onSendPdf = async () => {
    // setLoading(true);
    const getSubCategoryDataHeader = {
      token: token,
    };
    const getSubCategoryDataResponse = await dispatch(
      getSubCategoryData(getSubCategoryDataHeader),
    );
    // console.log('getSubCategoryData header==>>', getSubCategoryDataHeader);

    const res = getSubCategoryDataResponse.payload;

    // console.log('getSubCategoryData res ==>', res);
    // setLoading(false);
    if (res.status) {
      // toastMessage(res.message);
      // console.log('getSubCategoryData List ==>', res.data);
      // setAllCategoryList(res.data);
    } else {
      // setLoading(false);
      // toastMessage(res.message);
    }
  };
  const getAllSubCategoryData = async () => {
    setLoading(true);
    console.log('is available..');
    // console.log('loginBody ==>', loginBody);
    const SubCategoryResponse = await dispatch(getAllSubCategory());
    console.log('bhavya', SubCategoryResponse);
    const res = SubCategoryResponse;
    console.log('SubCategoryResponse res ==>', res);
    if (res.status) {
      setLoading(false);
      // var a = moment(res.data.user.dob);
      // var b = moment(currentDate);

      // var years = b.diff(a, 'year');
      // b.add(years, 'years');

      // // dispatch(userData({userData: userDetail, age: years}));
      // dispatch(userData({userData: res.data.user, age: years, login: true}));
      console.log('login response data ==>', res.data);
      setSharingDataList(res.data);
      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
      // setOtpErr(res.message);
    }
  };

  useEffect(() => {
    getAllSubCategoryData();
  }, []);
  return (
    <SafeAreaView style={styles.container()}>
      <Header isColor={true} isHeading={true} title={'sharing_screen.title'} />

      <Screen withScroll>
        <View style={styles.row()}>
          {sharingDataList.map((item, index) => {
            let Icon = item.svg;
            return (
              <MedicalItems
                key={index.toString()}
                onPress={() => {
                  sharingDataList[index].selectedCard = !item.selectedCard;
                  setExtra(extra + 1);
                }}
                containerStyle={styles.listViewStyle()}
                nameFirst={item.value}
                nameSecond={item.name}
                nameThird={item.unit}
                svgCardItems={item.icon}
                isSelected={item.selectedCard}
              />
            );
          })}
        </View>
      </Screen>
      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'sharing_screen.shareItems'}
        onPress={() => {
          let data = sharingDataList.filter(val => val.selectedCard == true);
          setTimeout(() => {
            navigation.navigate('sharingDetailScreen', {
              selectedItems: data,
            });
          }, 100);
          clearData();
        }}
      />
    </SafeAreaView>
  );
};
