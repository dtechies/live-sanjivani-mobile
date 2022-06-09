import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Loader, Text, Button, Screen, InputBox, Header} from 'components';
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

  const validation = () => {
    if (
      element !== '' ||
      severity !== '' ||
      reaction !== '' ||
      selectedDate !== ''
    ) {
      if (reaction == '') {
        setReactionErr('Please Enter Reaction Details');
      } else {
        setReactionErr('');
      }
      if (element == '') {
        setElementErr('Please Enter Element Details');
      } else {
        setElementErr('');
      }
      if (severity == '') {
        setSeverityErr('Please Enter severity Details');
      } else {
        setSeverityErr('');
      }
      if (selectedDate == '') {
        setSelectedDateErr('Please Select Date');
      } else {
        setSelectedDateErr('');
      }
    } else {
      setReactionErr('');
      setSeverityErr('');
      setSelectedDateErr('');
    }

    if (doseValue !== '' || startOfCycleVal !== '') {
      if (startOfCycleVal == '') {
        setStartOfCycleValErr('Please Select start of Cycle Details');
      } else {
        setStartOfCycleValErr('');
      }
      if (doseValue == '') {
        setDoseValueErr('Please Select Flow Details');
      } else {
        setDoseValueErr('');
      }
    }
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
      {console.log('subCategory ==> ', subCategory)}
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
                    if (val.unit.startsWith('[')) {
                      let valNew = JSON.stringify(val.unit);
                      let newVal = JSON.parse(valNew);
                      let dataa = [{value: 'Flow'}, {value: 'No Flow'}];
                      console.log('IF...', newVal);
                      console.log('val', newVal[0]);
                      isDropDown = true;
                    }
                    return (
                      <View style={styles.itemListMain()}>
                        <Text style={styles.itemListTxt(1)}>{val.name}</Text>
                        {/* {(val.unit == 'Text' || val.unit == 'Number') && ( */}
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
                                  [name]: val.v,
                                });
                              } else {
                                thisArray.map((j, k) => {
                                  if (j.subcategory_id === value.category_id) {
                                    indexK = k;
                                  }
                                });
                                if (indexK == -1) {
                                  thisArray.push({
                                    [name]: val.v,
                                  });
                                } else {
                                  thisArray[indexK].name = v;
                                }
                              }
                              setThisArray(thisArray);
                              console.log('thisArray', thisArray);
                              setIsError('');
                              setExtra(extra + 1);
                            }}
                          />
                        ) : (
                          <Dropdown
                            defaultValue={languageDefault}
                            data={protection}
                            labelField="label"
                            valueField="value"
                            // placeholder={'Language'}
                            dropdownPosition={'bottom'}
                            style={styles.dropdown()}
                            // placeholderStyle={styles.labelFieldText()}
                            selectedTextStyle={styles.selectedOptionTextStyle()}
                            maxHeight={size.moderateScale(56)}
                            containerStyle={styles.dropdownContainer()}
                            // value={language}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            flatListProps={{
                              bounces: false,
                            }}
                            onChange={item => {
                              setLanguage(item.value);
                              setIsFocus(false);
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
                        )}
                        {/* )} */}
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
              selectedDateErr == '' &&
              elementErr == '' &&
              reactionErr == '' &&
              severityErr == '' &&
              doseValueErr == '' &&
              startOfCycleValErr == ''
                ? saveData()
                : validation();
            }}
          />
        </View>
      </Screen>
    </SafeAreaView>
  );
};
