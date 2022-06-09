import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {addOtherData} from 'redux-actions';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  Loader,
  Text,
  Button,
  Screen,
  InputBox,
  Header,
  Toast,
} from 'components';
import {
  size,
  color,
  images,
  IcHeartNew,
  IcOtherIcon1,
  IcOtherIcon2,
  IcOtherIcon3,
  IcOtherIcon4,
  IcOtherIcon5,
  IcOtherIcon6,
} from 'theme';
import * as styles from './styles';
import {menstruation, startOfCycle, protection} from 'json';

export const OtherScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [extra, setExtra] = useState(0);

  const [title, setTitle] = useState('Others');
  const [subCategory, setSubCategory] = useState([]);

  const [selDate, setSelDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDateErr, setSelectedDateErr] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [element, setElement] = useState('');
  const [elementErr, setElementErr] = useState('');
  const [drink, setDrink] = useState('');
  const [drinkErr, setDrinkErr] = useState('');
  const [reaction, setReaction] = useState('');
  const [reactionErr, setReactionErr] = useState('');
  const [severity, setSeverity] = useState('');
  const [severityErr, setSeverityErr] = useState('');
  const [thisArray, setThisArray] = useState([]);
  const [nestedCat, setVestedCat] = useState([]);

  const [toothbrushing, setToothbrushing] = useState('');
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [toothbrushingErr, setToothbrushingErr] = useState('');
  const [measurementDefault, setMeasurementDefault] = useState({
    label: 'No Flow',
    value: 'No Flow',
  });
  const [startOfCycleDefault, setStartOfCycleDefault] = useState({
    label: 'Yes',
    value: 'Yes',
  });
  const [protectionDefault, setProtectionDefault] = useState({
    label: 'Protection Used',
    value: 'Protection Used',
  });
  const [languageDefault, setLanguageDefault] = useState({
    label: '',
    value: '',
  });
  const protection = [
    {label: 'Protection Used', value: 'Protection Used'},
    {label: 'Protection Not Used', value: 'Protection Not Used'},
  ];
  const {userData} = useSelector(state => ({
    userData: state.userDataReducer.userDataResponse.userData,
  }));
  useEffect(() => {
    if (props.route.params) {
      // console.log('props.route.params ==> ', props.route.params);
      setTitle(props.route.params.title);
      setSubCategory(props.route.params.sub);
      setExtra(extra + 1);
      // console.log('userData ==> ', userData);
    }
  }, []);

  const [doseValue, setDoseValue] = useState('');
  const [doseValueErr, setDoseValueErr] = useState('');
  const [protectionVal, setProtectionVal] = useState(null);
  const [startOfCycleVal, setStartOfCycleVal] = useState('');
  const [startOfCycleValErr, setStartOfCycleValErr] = useState('');
  const [save, setSave] = useState(true);
  const getCurrentDate = givenDate => {
    let day = givenDate.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = givenDate.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let year = givenDate.getFullYear();
    let newDate = day + '/' + month + '/' + year;
    setSelectedDate(newDate);
    setSelectedDateErr('');
    setExtra(extra + 1);
    // setShowDate(false);
  };
  const toastRef = useRef();

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const validation = () => {
    // selectedDateErr == '' &&
    //           elementErr == '' &&
    //           reactionErr == '' &&
    //           severityErr == '' &&
    //           doseValueErr == '' &&
    //           startOfCycleValErr == ''
    //             ? saveData()
    // if (thisArray.length != 0) {
    //   let arrayVAAAAL = [];
    //   subCategory.map(val => {
    //     arrayVAAAAL = thisArray.filter(v => {
    //       return (v.nm = val.other_subcategories.name);
    //     });
    //   });

    // ,,,,,,,,
    // let datttt = [];
    // subCategory.map(val => {
    //   val.other_subcategories.map(v => {
    //     console.log('val HHHHHHHH', v.name);
    //     let datttt = thisArray.filter(item => {
    //       return item.nm == v.name;
    //     });
    //   });
    //   datttt = [];
    // });
    // thisArray.map(val => {
    //   console.log('val OOOOOOOO', val.nm);
    // });
    // console.log('subcategory VALI =>', subCategory);
    // console.log('thisArray  VALI=>', thisArray);
    // console.log('arrayVAAAAL  VALI=>', arrayVAAAAL);
    // }
    // ............abs
    // if (
    //   element !== '' ||
    //   severity !== '' ||
    //   reaction !== '' ||
    //   selectedDate !== ''
    // ) {
    //   if (reaction == '') {
    //     setReactionErr('Please Enter Reaction Details');
    //   } else {
    //     setReactionErr('');
    //   }
    //   if (element == '') {
    //     setElementErr('Please Enter Element Details');
    //   } else {
    //     setElementErr('');
    //   }
    //   if (severity == '') {
    //     setSeverityErr('Please Enter severity Details');
    //   } else {
    //     setSeverityErr('');
    //   }
    //   if (selectedDate == '') {
    //     setSelectedDateErr('Please Select Date');
    //   } else {
    //     setSelectedDateErr('');
    //   }
    // } else {
    //   setReactionErr('');
    //   setSeverityErr('');
    //   setSelectedDateErr('');
    // }

    // if (doseValue !== '' || startOfCycleVal !== '') {
    //   if (startOfCycleVal == '') {
    //     setStartOfCycleValErr('Please Select start of Cycle Details');
    //   } else {
    //     setStartOfCycleValErr('');
    //   }
    //   if (doseValue == '') {
    //     setDoseValueErr('Please Select Flow Details');
    //   } else {
    //     setDoseValueErr('');
    //   }
    // }
    addData();
  };

  const addData = async () => {
    // setLoading(true);
    let bodyArray = [];
    // bodyArray.push({
    //   subcategory_id:item.id,
    //   user_id: userData.id,
    // })
    let id = 0;
    let obj = {};
    thisArray.map(item => {
      if (id == 0) {
        id = item.id;
      } else {
        if (id == item.id) {
          obj[item.nm] = item.value;
        }
      }
    });
    console.log('THIS', thisArray);
    const getOtherBody = [
      {
        subcategory_id: 12,
        user_id: userData.id,
        value:
          "{'element': 'test1','reaction': 'test2','severity': 'test3','onset': 'test4'}",
      },
      {
        subcategory_id: 13,
        user_id: 49,
        value: "{'drink': 'test1'}",
      },
    ];
    // const getOtherDataResponse = await dispatch(addOtherData(getOtherBody));
    // const res = getOtherDataResponse.payload;
    // if (res.status) {
    //   console.log('response data ==>', res.data);
    //   setLoading(false);
    //   toastMessage(res.message);
    // } else {
    //   setLoading(false);
    //   toastMessage(res.message);
    // }
  };
  const saveData = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={true}
        isLogoCenter={false}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        text={title}
      />
      {/* {console.log('subCategory DEMOOOOO==> ', thisArray)} */}
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        {subCategory &&
          subCategory.map((value, i) => {
            return (
              <View
                style={styles.headingFirst(i == 0 ? 1 : 0)}
                key={i + 'subCategory'}>
                <View style={styles.headOne()}>
                  <SvgUri
                    height={size.moderateScale(25)}
                    width={size.moderateScale(25)}
                    uri={value.icon}
                  />
                  <Text style={styles.headingTxt()}>{value.name}</Text>
                </View>
                {value.other_subcategories.length != 0 &&
                  value.other_subcategories.map((val, index) => {
                    let isDropDown = false;
                    let dropDownValue = [];
                    let dropDownSelectedVal = {label: 'val1', value: 'val1'};
                    let defaultDropDown = {label: '', value: ''};
                    if (val.unit.startsWith('[')) {
                      const txt = val.unit;
                      let obj = txt.slice(1, txt.length - 1);
                      let obj1 = obj.split(',');
                      obj1.map(val1 => {
                        val1 = val1.slice(1, val1.length - 1);
                        dropDownValue.push({label: val1, value: val1});
                      });
                      // console.log('val', dropDownValue[0]);
                      isDropDown = true;
                    }
                    return (
                      <View
                        style={styles.itemListMain()}
                        key={index + 'other_subcategories'}>
                        <Text style={styles.itemListTxt(1)}>{val.name}</Text>
                        {!isDropDown ? (
                          <InputBox
                            placeholder={`Enter ${val.name}`}
                            inputStyle={styles.inputStyle()}
                            mainContainerStyle={styles.inputMainContainer()}
                            placeholderTextColor={color.grayTxt}
                            isShadow={true}
                            containerStyle={styles.containerStyle()}
                            onChangeText={v => {
                              let indexK = -1;
                              let name = val.name;
                              if (thisArray.length == 0) {
                                thisArray.push({
                                  id: val.id,
                                  nm: val.name,
                                  value: v,
                                });
                              } else {
                                thisArray.map((j, k) => {
                                  if (j.nm === val.name) {
                                    indexK = k;
                                  }
                                });
                                if (indexK == -1) {
                                  thisArray.push({
                                    id: val.id,
                                    nm: val.name,
                                    value: v,
                                  });
                                } else {
                                  thisArray[indexK].value = v;
                                }
                              }
                              setThisArray(thisArray);
                              console.log('thisArray', thisArray);
                              // setIsError('');
                              setExtra(extra + 1);
                            }}
                          />
                        ) : (
                          <Dropdown
                            // defaultValue={defaultDropDown}
                            data={dropDownValue}
                            labelField="label"
                            valueField="value"
                            placeholder={'nn'}
                            dropdownPosition={'bottom'}
                            style={styles.dropdown()}
                            placeholderStyle={styles.labelFieldText()}
                            selectedTextStyle={styles.selectedOptionTextStyle()}
                            maxHeight={size.moderateScale(56)}
                            containerStyle={styles.dropdownContainer()}
                            // value={'151'}
                            flatListProps={{
                              bounces: false,
                            }}
                            onChange={item => {
                              let indexK = -1;
                              let name = val.unit;
                              let v = item.value;
                              if (thisArray.length == 0) {
                                thisArray.push({
                                  nm: val.unit,
                                  value: v,
                                });
                              } else {
                                thisArray.map((j, k) => {
                                  if (j.nm === val.unit) {
                                    indexK = k;
                                  }
                                });
                                if (indexK == -1) {
                                  thisArray.push({
                                    nm: val.unit,
                                    value: v,
                                  });
                                } else {
                                  thisArray[indexK].value = v;
                                }
                              }
                              setThisArray(thisArray);
                              console.log('thisArray', thisArray);
                              // setIsError('');
                              setExtra(extra + 1);
                            }}
                            renderItem={item => {
                              return (
                                <View>
                                  <Text
                                    text={item.value}
                                    style={styles.InsideLabelFieldText()}
                                  />
                                  <View style={styles.separator()} />
                                </View>
                              );
                            }}
                          />
                          // <View>
                          //   {dropDownValue.length > 0 &&
                          //     dropDownValue.map(item => {
                          //       return (
                          //         <Pressable
                          //           style={styles.searchedValueList()}
                          //           onPress={() => {
                          //             setSearchVal(item.doctor_name);
                          //             setAddressOne(item.doctor_address);
                          //             setExtra(extra + 1);
                          //             // setSpeciality(item.speciality);
                          //             setSearchValErr('');
                          //             setDoctorFilteredName([]);
                          //             // Keyboard.dismiss;
                          //           }}>
                          //           <Text style={styles.inputTxt()}>
                          //             {item.doctor_name}
                          //           </Text>
                          //         </Pressable>
                          //       );
                          //     })}
                          // </View>
                        )}
                      </View>
                    );
                  })}
              </View>
            );
          })}
        <View style={styles.btnContainer()}>
          <Button
            buttonStyle={styles.btnContinue()}
            buttonText={styles.btnContinueTxt()}
            nameTx={'addDetails_Screen.save'}
            onPress={() => {
              validation();
            }}
          />
        </View>
      </Screen>
    </SafeAreaView>
  );
};
