import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getAllSubCategory} from 'redux-actions';
import {
  Text,
  Screen,
  Button,
  Header,
  MedicalItems,
  Toast,
  Loader,
} from 'components';
import {SharingData} from 'json';

import * as styles from './styles';

export const SharingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);

  const [sharingData, setSharingData] = useState(SharingData);
  const [sharingDataErr, setSharingDataErr] = useState('');
  const [sharingDataList, setSharingDataList] = useState([]);
  const clearData = () => {
    sharingData.map((val, i) => {
      sharingData[i].selectedCard = false;
    });
    setExtra(extra + 1);
  };
  // const {token} = useSelector(state => ({
  //   token: state.userDataReducer.userDataResponse.userData,
  // }));
  // console.log('user data ==>', token);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const validation = () => {
    let data = sharingDataList.filter(val => val.selectedCard == true);
    // console.log(data.length, 'length...');
    if (data.length == 0) {
      setSharingDataErr('Please Select at least 1 Field');
    } else {
      setTimeout(() => {
        navigation.navigate('sharingDetailScreen', {
          selectedItems: data,
        });
      }, 100);
      clearData();
    }
  };

  const onSendPdf = async () => {
    const getSubCategoryDataHeader = {
      token: token,
    };
    const getSubCategoryDataResponse = await dispatch(
      getSubCategoryData(getSubCategoryDataHeader),
    );
    const res = getSubCategoryDataResponse.payload;
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
    const SubCategoryResponse = await dispatch(getAllSubCategory());
    const res = SubCategoryResponse;
    // console.log('SubCategoryResponse res ==>', res);
    if (res.status) {
      setLoading(false);
      // console.log('login response data ==>', res.data);
      setSharingDataList(res.data);
      // toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    getAllSubCategoryData();
  }, []);
  return (
    <SafeAreaView style={styles.container()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header isColor={true} isHeading={true} title={'sharing_screen.title'} />

      <Screen withScroll>
        <View style={styles.row()}>
          {sharingDataList.map((item, index) => {
            return (
              <MedicalItems
                key={index.toString()}
                onPress={() => {
                  setSharingDataErr('');
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
        {sharingDataErr ? (
          <Text style={styles.errorText()}>{sharingDataErr}</Text>
        ) : null}
      </Screen>
      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'sharing_screen.shareItems'}
        onPress={() => {
          validation();
        }}
      />
    </SafeAreaView>
  );
};
