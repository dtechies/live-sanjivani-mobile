import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategory, getSubCategoryData} from 'redux-actions';
import {Text, Screen, InputBox, Button, Header, MedicalItems} from 'components';
import {serviceListData, SharingData} from 'json';
import {size, color, IcSearch, IcDown} from 'theme';
import * as styles from './styles';

export const SharingScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();

  const [isFocus, setIsFocus] = useState(false);
  const [selected, setSelected] = useState([]);
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [extra, setExtra] = useState(0);
  const [sharingData, setSharingData] = useState(SharingData);
  const clearData = () => {
    sharingData.map((val, i) => {
      sharingData[i].selectedCard = false;
    });
    setExtra(extra + 1);
  };
  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData,
  }));
  console.log('user data ==>', token);

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
  useEffect(() => {
    getAllCategoryData();
  }, []);
  return (
    <SafeAreaView style={styles.container()}>
      <Header isColor={true} isHeading={true} title={'sharing_screen.title'} />

      <Screen withScroll>
        <View style={styles.row()}>
          {sharingData.map((item, index) => {
            let Icon = item.svg;
            return (
              <MedicalItems
                key={index.toString()}
                onPress={() => {
                  sharingData[index].selectedCard = !item.selectedCard;
                  setExtra(extra + 1);
                }}
                containerStyle={styles.listViewStyle()}
                nameFirst={item.value}
                nameSecond={item.name}
                nameThird={item.unit}
                svgCardItems={<Icon />}
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
          let data = sharingData.filter(val => val.selectedCard == true);
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
