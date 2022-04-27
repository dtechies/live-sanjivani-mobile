import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUserFavoriteList,
  addUserFavorite,
  getAllSubCategory,
} from 'redux-actions';

import {Text, Button, Screen, InputBox, Toast, Loader} from 'components';
import {size, IcHeart, color, IcTick, IcPlus} from 'theme';
import {categoriesData} from 'json';
import * as styles from './styles';

export const ProgressScreen = props => {
  const navigation = useNavigation();
  const modalRef = useRef();
  const subCategoriesModalRef = useRef();
  const toastRef = useRef();
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const [categoriesValue, setCategoriesValue] = useState('');
  const [categoriesValueError, setCategoriesValueError] = useState('');
  const [extra, setExtra] = useState(0);
  const [data, setData] = useState([]);
  const [fav, setFav] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [loading, setLoading] = useState(false);
  const [subCategoryData, setSubCategoryData] = useState({});
  const [allSubCategoryData, setAllSubCategoryData] = useState([]);
  const [filteredSubCategory, setFilteredSubCategory] = useState([]);

  const {token, userId} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
    userId: state.userDataReducer.userDataResponse.userData.id,
  }));

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getUserFavoriteListData = async () => {
    setLoading(true);
    const getUserFavoriteListHeader = {
      token: token,
    };
    const getUserFavoriteListResponse = await dispatch(
      getUserFavoriteList(getUserFavoriteListHeader),
    );
    // console.log('getUserFavoriteListData ==>', getUserFavoriteListHeader);
    const res = getUserFavoriteListResponse.payload;
    // console.log('getUserFavoriteListData res ==>', res);
    if (res.status) {
      // console.log('getUserFavoriteListData list ==>', res.data.subCategoryData);
      setFavoriteList(res.data.subCategoryData);

      // toastMessage(res.message);

      // setReminderOption(res.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const getAllSubCategoryList = async () => {
    setLoading(true);
    const getAllSubCategoryHeader = {
      token: token,
    };
    const getAllSubCategoryResponse = await dispatch(
      getAllSubCategory(getAllSubCategoryHeader),
    );
    // console.log('getAllSubCategoryList header ==>', getAllSubCategoryHeader);
    const res = getAllSubCategoryResponse.payload;
    // console.log('getAllSubCategoryList res ==>', res);
    if (res.status) {
      // console.log('getAllSubCategoryList list ==>', res.data);
      setAllSubCategoryData(res.data);
      toastMessage(res.message);
      setLoading(false);
    } else {
      toastMessage(res.message);
      setLoading(false);
    }
  };

  const onModalAddPress = async () => {
    modalRef.current.close();
    setLoading(true);

    const addUserFavoriteBody = {
      user_id: userId,
      subcategory_id: subCategoryData.id,
      value: categoriesValue,
      is_selected: fav,
    };

    const addUserFavoriteHeader = {
      token: token,
    };
    // console.log('addUserFavorite Body ==>', addUserFavoriteBody);
    // console.log('addUserFavorite Header ==>', addUserFavoriteHeader);

    const addUserFavoriteResponse = await dispatch(
      addUserFavorite(addUserFavoriteBody, addUserFavoriteHeader),
    );

    const res = addUserFavoriteResponse.payload;
    // console.log('addUserFavorite Res ==>', res);
    setLoading(false);

    if (res.status) {
      getUserFavoriteListData();
      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const customValidation = (val, type) => {
    let testCase;
    switch (type) {
      case 'integer':
        testCase = /^[0-9]+$/;
        return testCase.test(val);
      case 'float':
        testCase = /^(?:[0-9]\d{0,4}|0)\..\d$/;
        return testCase.test(val);
      default:
        break;
    }
  };
  const getCurrentTime = givenTime => {
    // console.log('A Time picked: ', givenTime);
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let day = givenTime.getDate();
    let month = givenTime.getMonth() + 1;
    let year = givenTime.getFullYear();

    let newDate = day + '-' + month + '-' + year;
    let newDateTime =
      newDate + ' ' + givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    return newDateTime;
  };
  const demo = () => {
    const subCateGoryFilter = allSubCategoryData.filter(
      elem => !favoriteList.find(({id}) => elem.id === id),
    );
    setFilteredSubCategory(subCateGoryFilter);
  };
  const initialFunction = async () => {
    if (props.route.params) {
      console.log(
        ' props.route.params.subCategory',
        props.route.params.subCategory,
      );
      setSubCategoryData(props.route.params.subCategory);
      setTimeout(() => {
        modalRef.current.open();
      }, 300);
    } else {
      // setShowAll(true);
    }
    // getAllSubCategoryList();
    getAllSubCategoryList();
    await getUserFavoriteListData();
    setSelectedTime(getCurrentTime(new Date()));
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      initialFunction();
    });

    return unsubscribe;
  }, [navigation]);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    data: [0.4, 0.6, 0.8, 0.2],
  };
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    // color: (opacity = 1) => `rgba(255, 255, 240, ${opacity})`,
    color: (opacity = 1) => `rgba(79, 174, 83,${opacity})`,
    labelColor: (opacity = 1) => `rgba(54, 116, 242, ${opacity})`,
    style: {
      borderRadius: 50,
      marginRight: 50,
    },
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const checkRegex = (val, type) => {
    setCategoriesValue(val);
    if (customValidation(val, type) === false) {
      setCategoriesValueError(`Only ${type}`);
      setCategoriesValue(val);
    } else {
      setCategoriesValueError('');
      setCategoriesValue(val);
    }
  };
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

      <View style={styles.full()}>
        <Screen
          showsVerticalScrollIndicator={false}
          bounces={false}
          // contentContainerStyle={!showAll && styles.containContainerStyle()}
          style={styles.container()}>
          <View>
            {favoriteList &&
              favoriteList.map((item, index) => {
                return (
                  <Pressable
                    key={index.toString()}
                    onPress={() => {
                      setData(item);
                      setSubCategoryData(item);
                      setCategoriesValueError('');
                      setCategoriesValue(item.user_favorites[0].value);
                      setFav(true);
                      setSelectedTime(getCurrentTime(new Date()));
                      modalRef.current.open();
                    }}
                    style={styles.categoriesListContainer()}>
                    <View style={styles.row()}>
                      {item.icon && (
                        <IcHeart
                          height={size.moderateScale(20)}
                          width={size.moderateScale(20)}
                          fill={color.red}
                        />
                      )}
                      <Text style={styles.textCategoryTitle()}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.row()}>
                      <Text style={styles.textCategoryTitle()}>
                        {item.user_favorites[0].value}
                      </Text>
                      <Text style={styles.textCategoryTitle()}>
                        {item.unit}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            {!showAll && (
              <Button
                onPress={() => {
                  demo();
                  setTimeout(() => {
                    subCategoriesModalRef.current.open();
                  }, 150);
                }}
                buttonStyle={styles.showAllButton()}
                nameTx={'progress_screen.show_all'}
              />
            )}
          </View>
        </Screen>
        <Portal>
          <Modalize
            ref={subCategoriesModalRef}
            adjustToContentHeight={true}
            handlePosition={'inside'}
            scrollViewProps={{
              showsVerticalScrollIndicator: false,
              contentContainerStyle: styles.modalContentContainerStyle(),
              keyboardShouldPersistTaps: 'handled',
            }}
            modalStyle={styles.modalStyle()}
            handleStyle={styles.dragStyle()}>
            <View>
              {filteredSubCategory &&
                filteredSubCategory.map((item, index) => {
                  return (
                    <Pressable
                      key={index.toString()}
                      onPress={() => {
                        setData(item);
                        setSubCategoryData(item);
                        setCategoriesValueError('');
                        setCategoriesValue('');
                        setFav(false);
                        setSelectedTime(getCurrentTime(new Date()));
                        subCategoriesModalRef.current.close();
                        setTimeout(() => {
                          modalRef.current.open();
                        }, 200);
                      }}
                      style={styles.categoriesListContainer()}>
                      <View style={styles.row()}>
                        {item.icon && (
                          <IcHeart
                            height={size.moderateScale(20)}
                            width={size.moderateScale(20)}
                            fill={color.red}
                          />
                        )}
                        <Text style={styles.textCategoryTitle()}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={styles.row()}>
                        {/* <Text style={styles.textCategoryTitle()}>
                        {item.count}
                      </Text> */}
                        <Text style={styles.textCategoryTitle()}>
                          {item.unit}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
            </View>
          </Modalize>
          <Modalize
            ref={modalRef}
            adjustToContentHeight={true}
            handlePosition={'inside'}
            scrollViewProps={{
              showsVerticalScrollIndicator: false,
              contentContainerStyle: styles.modalContentContainerStyle(),
              keyboardShouldPersistTaps: 'handled',
              // keyboardDismissMode: 'on-drag',
            }}
            modalStyle={styles.modalStyle()}
            handleStyle={styles.dragStyle()}>
            <View>
              {subCategoryData && (
                <>
                  <Text style={styles.modalTitleText()}>
                    {subCategoryData.name}
                  </Text>
                  <View style={styles.inputRowView()}>
                    <InputBox
                      titleStyle={styles.textInputTitle()}
                      placeholder={subCategoryData.title}
                      value={categoriesValue}
                      keyboardType={'decimal-pad'}
                      onChangeText={value => {
                        checkRegex(value, data.type);
                        setExtra(extra + 1);
                      }}
                      inputStyle={[styles.labelFieldText()]}
                      mainContainerStyle={styles.inputMainContainer()}
                    />

                    <Text style={[styles.textCategoryTitle()]}>
                      {subCategoryData.unit}
                    </Text>
                  </View>
                </>
              )}
              {categoriesValueError ? (
                <Text style={styles.textError()}>{categoriesValueError}</Text>
              ) : null}
              <Pressable onPress={() => setShowTime(!showTime)}>
                <Text style={styles.textTime()}>{selectedTime}</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setFav(!fav);
                }}
                style={styles.addFavoriteView()}>
                <View style={styles.tickIconView()}>
                  <IcTick
                    height={size.moderateScale(12)}
                    width={size.moderateScale(12)}
                    fill={fav ? color.purple : color.transparent}
                  />
                </View>
                <Text
                  style={styles.textAddToFavorite()}
                  tx={'progress_screen.add_to_favorite'}
                />
              </Pressable>
              <Text
                style={styles.textHistoricalTitle()}
                tx={'progress_screen.historical_data'}
              />

              <ProgressChart
                data={chartData}
                width={size.deviceWidth}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
              />
              <ScrollView
                horizontal={true}
                contentOffset={{x: 10000, y: 0}} // i needed the scrolling to start from the end not the start
                showsHorizontalScrollIndicator={false} // to hide scroll bar
              >
                {/* <LineChart
                  data={{
                    labels: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'June',
                      'July',
                      'Aug',
                    ],
                    datasets: [
                      {
                        data: [50, 60, 15, 30, 80, 90, 50, 75],
                      },
                    ],
                  }}
                  width={size.deviceWidth}
                  height={size.moderateScale(250)}
                  // yAxisLabel="$"
                  // yAxisSuffix={data.unit}
                  yAxisInterval={1}
                  chartConfig={chartConfig}
                  // bezier
                /> */}
              </ScrollView>
              <Button
                onPress={() => {
                  categoriesValue && categoriesValueError === ''
                    ? onModalAddPress()
                    : categoriesValue === '' && alert('Please enter value');
                }}
                nameTx="progress_screen.add"
                buttonStyle={styles.addButtonStyle()}
                buttonText={styles.textAddButton()}
                leftIcon={
                  <IcPlus
                    height={size.moderateScale(20)}
                    width={size.moderateScale(20)}
                    fill={color.black}
                  />
                }
              />
            </View>
            {showTime && (
              <DateTimePickerModal
                isVisible={showTime}
                mode="datetime"
                locale="en_GB"
                // minimumDate={new Date()}
                onConfirm={val => {
                  setSelectedTime(getCurrentTime(val));
                  setShowTime(false);
                }}
                onCancel={() => {
                  setShowTime(false);
                  setExtra(extra + 1);
                }}
              />
            )}
          </Modalize>
        </Portal>
      </View>
    </SafeAreaView>
  );
};
