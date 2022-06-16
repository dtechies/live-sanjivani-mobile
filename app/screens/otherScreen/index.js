import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {addOtherData} from 'redux-actions';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  Loader,
  Text,
  Button,
  Screen,
  InputBox,
  Header,
  Toast,
} from 'components';
import {size, color} from 'theme';
import * as styles from './styles';

const GetCards = ({
  isDropDown,
  index,
  val,
  value,
  dropDownValue,
  thisArray,
  defaultDropDown,
  setThisArray,
  setExtra,
  extra,
  selDate,
  showDate,
  setShowDate,
  isDateVal,
}) => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.itemListMain()} key={index + 'other_subcategories'}>
      <Text style={styles.itemListTxt(1)}>{val.name}</Text>
      {isDateVal ? (
        <Pressable
          onPress={() => {
            setShowDate(true);
          }}>
          <View style={styles.cardContainer()}>
            <Text
              style={
                selectedDate == '' ? styles.dateText(1) : styles.dateText()
              }
              text={selectedDate == '' ? selDate : selectedDate}
            />
          </View>
          {showDate && (
            <DateTimePickerModal
              isVisible={showDate}
              mode="date"
              onConfirm={d => {
                let day = d.getDate();
                if (day < 10) {
                  day = '0' + day;
                }
                let month = d.getMonth() + 1;
                if (month < 10) {
                  month = '0' + month;
                }
                let year = d.getFullYear();
                let newDate = day + '/' + month + '/' + year;
                setSelectedDate(newDate);
                setShowDate(false);
                let indexK = -1;
                if (thisArray.length == 0) {
                  thisArray.push({
                    id: value.id,
                    nm: val.name,
                    value: newDate,
                  });
                } else {
                  thisArray.map((j, k) => {
                    if (j.nm === val.name) {
                      indexK = k;
                    }
                  });
                  if (indexK == -1) {
                    thisArray.push({
                      id: value.id,
                      nm: val.name,
                      value: newDate,
                    });
                  } else {
                    thisArray[indexK].value = newDate;
                  }
                }
                setThisArray(thisArray);
                console.log('thisArray', thisArray);
                setExtra(extra + 1);
              }}
              onCancel={() => {
                setShowDate(false);
                setExtra(extra + 1);
              }}
            />
          )}
        </Pressable>
      ) : !isDropDown ? (
        <InputBox
          placeholder={`Enter ${val.name}`}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          placeholderTextColor={color.grayTxt}
          isShadow={true}
          containerStyle={styles.containerStyle()}
          onChangeText={v => {
            let indexK = -1;
            if (thisArray.length == 0) {
              thisArray.push({
                id: value.id,
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
                  id: value.id,
                  nm: val.name,
                  value: v,
                });
              } else {
                thisArray[indexK].value = v;
              }
            }
            setThisArray(thisArray.filter(i => i.value != ''));
            console.log(
              'thisArray',
              thisArray.filter(i => i.value != ''),
            );
            setExtra(extra + 1);
          }}
        />
      ) : (
        <Dropdown
          defaultValue={
            thisArray.length > 0
              ? thisArray.filter(i => i.id === value.id && i.nm === val.name)
                  .length > 0
                ? thisArray.filter(
                    i => i.id === value.id && i.nm === val.name,
                  )[0]
                : defaultDropDown
              : defaultDropDown
          }
          data={dropDownValue}
          labelField="value"
          valueField="label"
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(55)}
          containerStyle={styles.dropdownContainer()}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            console.log('item ==>', item);
            let indexK = -1;
            let v = item.value;
            if (thisArray.length == 0) {
              thisArray.push({
                id: value.id,
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
                  id: value.id,
                  nm: val.name,
                  value: v,
                });
              } else {
                thisArray[indexK].value = v;
              }
            }
            setThisArray(thisArray);
            console.log('thisArray', thisArray);
            setExtra(extra + 1);
          }}
          renderItem={item => {
            return (
              <View>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export const OtherScreen = props => {
  const dispatch = useDispatch();
  const toastRef = useRef();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const [title, setTitle] = useState('');
  const [subCategory, setSubCategory] = useState([]);
  const [selDate, setSelDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState('');
  const [thisArray, setThisArray] = useState([]);
  const [showDate, setShowDate] = useState(false);
  const {userData} = useSelector(state => ({
    userData: state.userDataReducer.userDataResponse.userData,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  useEffect(() => {
    if (props.route.params) {
      // console.log('props.route.params ==> ', props.route.params);
      setTitle(props.route.params.title);
      setSubCategory(props.route.params.sub);
      setExtra(extra + 1);
    }
  }, []);

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
    setExtra(extra + 1);
    // setShowDate(false);
  };

  const validation = () => {
    addData();
  };

  const addData = async () => {
    setLoading(true);
    let bodyArray = [];
    console.log('THIS', thisArray);
    let idArray = [];
    thisArray.map(val => {
      if (idArray.length == 0) {
        idArray.push(val.id);
      } else {
        let dataId = idArray.filter(id => {
          return id == val.id;
        });
        if (dataId.length == 0) {
          idArray.push(val.id);
        }
      }
    });
    console.log('ID MALE CHE K..?', idArray);
    let otherDataBody = [];
    idArray.map(idVal => {
      let d = {};
      let dataaa = thisArray.filter(val => {
        if (idVal == val.id) {
          d[val.nm] = val.value;
          console.log('val 11==>', d);
        }
      });
      console.log('d AAVE CHE => ', d);
      otherDataBody.push({
        subcategory_id: idVal,
        user_id: userData.id,
        value: JSON.stringify(d),
      });
      return;
    });
    console.log('otherDataBody ==> ', otherDataBody);
    const getOtherDataResponse = await dispatch(addOtherData(otherDataBody));
    const res = getOtherDataResponse;
    console.log('getOtherDataResponse ==> ', res);
    if (res != undefined) {
      if (res.status) {
        console.log('response data ==>', res.data);
        setLoading(false);
        toastMessage(res.message);
        setThisArray([]);
        setExtra(extra + 1);
        setTimeout(() => {
          navigation.navigate('addScreen');
        }, 100);
      } else {
        setLoading(false);
        toastMessage(res.message);
      }
    } else {
      setLoading(false);
      toastMessage('Server Error Accrued');
    }
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
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        {subCategory &&
          subCategory.map((value, i) => {
            return (
              <View
                style={styles.headingFirst(i == 0 ? 1 : 0)}
                key={i + 'subCategory'}>
                <View style={styles.headOne()}>
                  <SvgUri
                    height={size.moderateScale(30)}
                    width={size.moderateScale(30)}
                    uri={value.icon}
                  />
                  <Text style={styles.headingTxt()}>{value.name}</Text>
                </View>
                {value.other_subcategories.length != 0 &&
                  value.other_subcategories.map((val, index) => {
                    let isDropDown = false;
                    let isDateVal = false;
                    let dropDownValue = [];
                    let dropDownSelectedVal = {};
                    let defaultDropDown = {label: 'Select', value: 'Select'};
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
                    if (val.name == 'Onset') {
                      isDateVal = true;
                    }
                    let isDefaultDropDown = false;
                    return (
                      <GetCards
                        isDropDown={isDropDown}
                        index={index}
                        val={val}
                        value={value}
                        dropDownValue={dropDownValue}
                        setThisArray={setThisArray}
                        thisArray={thisArray}
                        defaultDropDown={defaultDropDown}
                        setExtra={setExtra}
                        extra={extra}
                        selectedDate={selectedDate}
                        selDate={selDate}
                        showDate={showDate}
                        setShowDate={setShowDate}
                        getCurrentDate={getCurrentDate}
                        setSelectedDate={setSelectedDate}
                        isDateVal={isDateVal}
                      />
                    );
                  })}
              </View>
            );
          })}
        {subCategory.length != 0 ? (
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
        ) : (
          <Text>No Records Found...</Text>
        )}
      </Screen>
    </SafeAreaView>
  );
};
