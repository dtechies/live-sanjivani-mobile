import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MultiSelect} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {getAllSubCategory} from 'redux-actions';
import {
  Text,
  Screen,
  InputBox,
  Button,
  Header,
  MedicalItems,
  Toast,
  Loader,
} from 'components';
import {serviceListData, SharingData} from 'json';
import {size, color, IcSearch, IcDown} from 'theme';
import * as styles from './styles';

export const ProgressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [selected, setSelected] = useState([]);
  const [extra, setExtra] = useState(0);
  const [favItem, setFavItem] = useState([]);
  const [first, setFirst] = useState(false);
  const [loading, setLoading] = useState(false);
  const [second, setSecond] = useState(true);
  const [progressData, setProgressData] = useState([]);
  const clearData = () => {
    progressData.map((val, i) => {
      SharingData[i].selectedCard = false;
    });
    setExtra(extra + 1);
  };
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getAllSubCategoryData = async () => {
    setLoading(true);
    // console.log('loginBody ==>', loginBody);
    const SubCategoryResponse = await dispatch(getAllSubCategory());
    const res = SubCategoryResponse;
    console.log('SubCategoryResponse res ==>', res);
    if (res.status) {
      setLoading(false);
      console.log('SubCategoryResponse data .. ==>', res.data);
      // setSharingDataList(res.data);
      setProgressData(res.data);
      setExtra(extra + 1);
      // toastMessage(res.message);
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
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header
        isColor={true}
        isHeading={true}
        title={'progress_screen.progress'}
      />
      <Screen withScroll>
        <View>
          {first && (
            <View style={styles.row()}>
              <Text>bansi...</Text>
              {progressData &&
                progressData.map((item, index) => {
                  let Icon = item.svg;
                  return (
                    <MedicalItems
                      key={index + 'MI'}
                      onPress={() => {
                        setTimeout(() => {
                          navigation.navigate('progressDetailScreen', {
                            selectedItems: item,
                          });
                        }, 100);
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
          )}
          {!first && (
            <View style={styles.row()}>
              {progressData &&
                progressData.map((item, index) => {
                  let Icon = item.svg;
                  return (
                    <MedicalItems
                      key={index + 'MIlll'}
                      onPress={() => {
                        progressData[index].selectedCard = !item.selectedCard;
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
          )}
        </View>
      </Screen>
      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'progress_screen.addFav'}
        onPress={() => {
          if (first == false) {
            let data = progressData.filter(val => val.selectedCard == true);
            setProgressData(data);
            setFirst(false);
            setExtra(extra + 1);
          }
          // clearData();
        }}
      />
    </SafeAreaView>
  );
};
