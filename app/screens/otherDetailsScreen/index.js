import React, {useState, useRef, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getAllCategoryAndSubCategory} from 'redux-actions';
import {Text, Header, Screen, Toast, Loader} from 'components';
import {SvgUri} from 'react-native-svg';
import * as styles from './styles';
import {size} from 'theme';

export const OtherDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [extra, setExtra] = useState(0);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const GetOthersDetails = async () => {
    setLoading(true);
    const allCatResponse = await dispatch(getAllCategoryAndSubCategory());
    let res = allCatResponse;
    console.log('allCatResponse_NEW ==>', res);

    if (res != undefined) {
      setLoading(false);
      // setExtra(extra + 1);
    }
    if (res.status) {
      setLoading(false);
      const othersData = res.data.categoryData.filter(i => i.name === 'Others');
      console.log('addedSubCat ==>', othersData);
      if (othersData.length > 0) {
        const addedSubCat = othersData[0].subcategories.filter(
          j => j.nested_subcategories.length > 0,
        );
        console.log('addedSubCat ==>', addedSubCat);
        setData(addedSubCat);
        setExtra(extra + 1);
      }
      setExtra(extra + 1);
      // setAllCategory(res.data.categoryData);
    } else {
      setLoading(false);
      // setAllCategory([]);
      // toastMessage('Invalid data...');
    }
  };

  useEffect(() => {
    GetOthersDetails();
  }, []);

  const GetElementFields = dataString => {
    console.log(
      'dataString',
      dataString.substring(1, dataString.length - 1).split(','),
    );
    return dataString
      .substring(1, dataString.length - 1)
      .split(',')
      .map(stringItem => {
        console.log('SSUUU', stringItem.split(':')[0]);
        return (
          <View style={styles.itemRow()}>
            <Text style={styles.itemListTxt()}>
              {stringItem
                .split(':')[0]
                .replaceAll('"', '')
                .replaceAll("'", '') + ' : '}
            </Text>
            <Text style={styles.itemValueTxt()}>
              {stringItem.split(':')[1].replaceAll('"', '').replaceAll("'", '')}
            </Text>
          </View>
        );
      });
  };

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
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'otherDetails.title'}
      />
      <Screen withScroll>
        <View style={styles.mainContainer()}>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <View
                  style={styles.mainRow(data.length === index + 1)}
                  key={'data' + index}>
                  <View style={styles.itemHeader()}>
                    <SvgUri
                      height={size.moderateScale(30)}
                      width={size.moderateScale(30)}
                      uri={item.icon}
                    />
                    <Text style={styles.headingTxt()}>{item.name}</Text>
                  </View>
                  {GetElementFields(item.nested_subcategories[0].value)}
                </View>
              );
            })
          ) : (
            <View style={styles.emptyData()}>
              <Text style={styles.errTxt()}>{'No Data Found'}</Text>
            </View>
          )}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
