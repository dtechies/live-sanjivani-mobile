import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View, TextInput, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';

import {useDispatch} from 'react-redux';
import {AddSubcategory} from 'redux-actions';
import {SvgUri} from 'react-native-svg';
import {Loader, Text, Button, Screen, Header, Toast} from 'components';
import {size} from 'theme';
import * as styles from './styles';
import {BloodGlucoseData} from 'json';
import momentTz from 'moment-timezone';
import {getTimeZone} from 'react-native-localize';

export const AddDetailsScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const refsFocus4 = useRef();

  const [extra, setExtra] = useState(0);
  const [isError, setIsError] = useState(false);
  const [BMIValue, setBMIValue] = useState('');
  const [glucoseValue, setGlucoseValue] = useState('');
  const [Systolic, setSystolic] = useState('');
  const [Diastolic, setDiastolic] = useState('');
  const [selectedGlucose, setSelectedGlucose] = useState('');
  const [thisArray, setThisArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const title = props.route.params ? props.route.params.title : '';

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const subCategory = props.route.params ? props.route.params.sub : [];

  const validation = () => {
    let error = false;
    let thisNewArray = thisArray.filter(item => item.value !== '');
    setThisArray(thisNewArray);
    // console.log('validation ==>', thisNewArray);
    if (thisNewArray.length == 0) {
      error = true;
    }
    thisNewArray.map(i => {
      // NOTE: Blood glucose
      if (i.subcategory_id == 6) {
        if (glucoseValue == '' || selectedGlucose == '') {
          error = true;
        }
      }
      if (i.subcategory_id == 6) {
        if (Systolic == '' || Diastolic == '') {
          error = true;
        }
      }
    });
    if (error) {
      setIsError('Please Fill At least 1 Filled...');
    } else {
      refsFocus4.current.clear();
      saveData();
    }
  };

  const saveData = async () => {
    if (BMIValue !== '') {
      // NOTE: adding calculated BMIvalue
      thisArray.push({
        subcategory_id: 16,
        value: BMIValue,
      });
    }
    // setLoading(true);

    // console.log('subCategoryBody res ==>', thisArray);
    const deviceTimeZone = getTimeZone();
    // Make moment of right now, using the device timezone
    const subCategoryBody = {
      subcategory_data: thisArray,
      timestamp: momentTz().tz(deviceTimeZone).format('Z'),
    };
    // console.log('subCategoryBody ==>', subCategoryBody);
    const allCatResponse = await dispatch(AddSubcategory(subCategoryBody));
    const res = allCatResponse;
    if (res.payload.status) {
      setLoading(false);
      toastMessage(res.payload.message);
      setThisArray([]);
      setExtra(extra + 1);
      setTimeout(() => {
        navigation.navigate('addScreen');
      }, 150);
    } else {
      setLoading(false);
      toastMessage(res.payload.message);
    }
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  const selectKeyboard = id => {
    switch (id) {
      // NOTE: Body Temperature
      case 3:
        return 'decimal-pad';
      // NOTE: height
      case 7:
        return 'decimal-pad';
      // NOTE: weight
      case 8:
        return 'decimal-pad';
      // NOTE: sleep
      case 9:
        return 'decimal-pad';

      default:
        return 'number-pad';
    }
  };
  const ViewAsPerId = val => {
    // NOTE: Blood glucose
    if (val.id == 6) {
      return (
        <Dropdown
          defaultValue={{
            name: 'select',
          }}
          data={BloodGlucoseData}
          labelField="name"
          valueField="name"
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(90)}
          containerStyle={styles.dropdownContainer()}
          // value={language}
          onFocus={() => closeKeyboard()}
          onBlur={() => closeKeyboard()}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setSelectedGlucose(item.name);
            let indexK = -1;
            if (thisArray.length == 0) {
              thisArray.push({
                subcategory_id: val.id,
                value: `{'Time':'${item.name}','value':'${glucoseValue}'}`,
              });
            } else {
              thisArray.map((j, k) => {
                if (j.subcategory_id === val.id) {
                  indexK = k;
                }
              });
              if (indexK == -1) {
                thisArray.push({
                  subcategory_id: val.id,
                  value: `{'Time':'${item.name}','value':'${glucoseValue}'}`,
                });
              } else {
                if (item.name == '' && glucoseValue == '') {
                  thisArray.splice(indexK, 1);
                } else {
                  if (item.name == '' && glucoseValue == '') {
                    thisArray.splice(indexK, 1);
                  } else {
                    thisArray[
                      indexK
                    ].value = `{'Time':'${item.name}','value':'${glucoseValue}'}`;
                  }
                }
              }
            }
            setThisArray(thisArray);
            setIsError('');
            setExtra(extra + 1);
          }}
          renderItem={item => {
            return (
              <View>
                <Text text={item.name} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
      );
      // NOTE: Blood Pressure
    } else if (val.id == 5) {
      return (
        <View style={styles.bpCard()}>
          <Text style={styles.textSubTitle()}>{'Systolic'}</Text>
          <Pressable style={styles.mainCard()}>
            <TextInput
              ref={refsFocus4}
              keyboardType={selectKeyboard(val.id)}
              style={styles.cardItemInputBoxMain()}
              onChangeText={v => {
                setSystolic(v);
                let indexK = -1;
                if (thisArray.length == 0) {
                  thisArray.push({
                    subcategory_id: val.id,
                    value: `{'Systolic':'${v}','Diastolic':'${Diastolic}'}`,
                  });
                } else {
                  thisArray.map((j, k) => {
                    if (j.subcategory_id === val.id) {
                      indexK = k;
                    }
                  });
                  if (indexK == -1) {
                    thisArray.push({
                      subcategory_id: val.id,
                      value: `{'Systolic':'${v}','Diastolic':'${Diastolic}'}`,
                    });
                  } else {
                    if (v == '' && Diastolic == '') {
                      thisArray.splice(indexK, 1);
                    } else {
                      thisArray[
                        indexK
                      ].value = `{'Systolic':'${v}','Diastolic':'${Diastolic}'}`;
                    }
                  }
                }
                let bmiValue = 0;
                let bmiValueData = 0;
                let height = 0;
                let weight = 0;
                let meeterHeight = 0;
                thisArray.map(i => {
                  // NOTE: 1st height and 2nd weight
                  if (i.subcategory_id == 7 || i.subcategory_id == 8) {
                    bmiValue = bmiValue + 1;
                  }
                });
                if (bmiValue == 2) {
                  thisArray.map(j => {
                    if (j.subcategory_id == 7) {
                      height += parseFloat(j.value);
                    } else if (j.subcategory_id == 8) {
                      weight += parseFloat(j.value);
                    }
                  });

                  meeterHeight = height / 3.2808;
                  bmiValueData = weight / (meeterHeight * meeterHeight);
                  setBMIValue(
                    bmiValueData ? bmiValueData.toFixed(2).toString() : '',
                  );
                }
                setThisArray(thisArray);
                // console.log('thisArray', thisArray);
                setIsError('');
                setExtra(extra + 1);
              }}
              onBlur={() => Keyboard.dismiss()}
              maxLength={4}
            />
            <Text style={styles.cardItemInputBoxText()}>{val.unit}</Text>
          </Pressable>
          <Text style={styles.textSubTitle()}>{'Diastolic'}</Text>
          <Pressable style={styles.mainCard()}>
            <TextInput
              ref={refsFocus4}
              keyboardType={selectKeyboard(val.id)}
              style={styles.cardItemInputBoxMain()}
              onChangeText={v => {
                setDiastolic(v);
                let indexK = -1;
                if (thisArray.length == 0) {
                  thisArray.push({
                    subcategory_id: val.id,
                    value: `{'Systolic':'${Systolic}','Diastolic':'${v}'}`,
                  });
                } else {
                  thisArray.map((j, k) => {
                    if (j.subcategory_id === val.id) {
                      indexK = k;
                    }
                  });
                  if (indexK == -1) {
                    thisArray.push({
                      subcategory_id: val.id,
                      value: `{'Systolic':'${Systolic}','Diastolic':'${v}'}`,
                    });
                  } else {
                    thisArray[
                      indexK
                    ].value = `{'Systolic':'${Systolic}','Diastolic':'${v}'}`;
                  }
                }
                let bmiValue = 0;
                let bmiValueData = 0;
                let height = 0;
                let weight = 0;
                let meeterHeight = 0;
                thisArray.map(i => {
                  // NOTE: 1st height and 2nd weight
                  if (i.subcategory_id == 7 || i.subcategory_id == 8) {
                    bmiValue = bmiValue + 1;
                  }
                });
                if (bmiValue == 2) {
                  thisArray.map(j => {
                    if (j.subcategory_id == 7) {
                      height += parseFloat(j.value);
                    } else if (j.subcategory_id == 8) {
                      weight += parseFloat(j.value);
                    }
                  });

                  meeterHeight = height / 3.2808;
                  bmiValueData = weight / (meeterHeight * meeterHeight);
                  setBMIValue(
                    bmiValueData ? bmiValueData.toFixed(2).toString() : '',
                  );
                }

                setThisArray(thisArray);
                // console.log('thisArray', thisArray);
                setIsError('');
                setExtra(extra + 1);
              }}
              maxLength={4}
            />
            <Text style={styles.cardItemInputBoxText()}>{val.unit}</Text>
          </Pressable>
        </View>
      );
      // NOTE: Not equal to BMIvalue id
    } else if (val.id !== 16) {
      return (
        <Pressable style={styles.mainCardView()}>
          <TextInput
            ref={refsFocus4}
            keyboardType={selectKeyboard(val.id)}
            style={styles.cardItemInputBoxMain()}
            onChangeText={v => {
              let indexK = -1;
              if (thisArray.length == 0) {
                thisArray.push({
                  subcategory_id: val.id,
                  value: v,
                });
              } else {
                thisArray.map((j, k) => {
                  if (j.subcategory_id === val.id) {
                    indexK = k;
                  }
                });
                if (indexK == -1) {
                  thisArray.push({
                    subcategory_id: val.id,
                    value: v,
                  });
                } else {
                  thisArray[indexK].value = v;
                }
              }
              let bmiValue = 0;
              let bmiValueData = 0;
              let height = 0;
              let weight = 0;
              let meeterHeight = 0;
              thisArray.map(i => {
                // NOTE: 1st height and 2nd weight
                if (i.subcategory_id == 7 || i.subcategory_id == 8) {
                  bmiValue = bmiValue + 1;
                }
              });
              if (bmiValue == 2) {
                thisArray.map(j => {
                  if (j.subcategory_id == 7) {
                    height += parseFloat(j.value);
                  } else if (j.subcategory_id == 8) {
                    weight += parseFloat(j.value);
                  }
                });

                meeterHeight = height / 3.2808;
                bmiValueData = weight / (meeterHeight * meeterHeight);
                setBMIValue(
                  bmiValueData ? bmiValueData.toFixed(2).toString() : '',
                );
              }
              setThisArray(thisArray);
              // console.log('thisArray', thisArray);
              setIsError('');
              setExtra(extra + 1);
            }}
            maxLength={4}
          />
          <Text style={styles.cardItemInputBoxText()}>{val.unit}</Text>
        </Pressable>
      );
    } else {
      // NOTE:Render auto calculated BMIvalue row
      return (
        <Pressable style={styles.mainCardView()}>
          <TextInput
            editable={false}
            style={styles.cardItemInputBoxMain()}
            maxLength={4}
            value={BMIValue}
          />
          <Text style={styles.cardItemInputBoxText()}>{val.unit}</Text>
        </Pressable>
      );
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
        isLeftArrow={true}
        isHeading={true}
        text={title}
      />
      <Screen
        withScroll
        bounces={false}
        enableResetScrollToCoords={false}
        style={styles.screenContainer()}>
        {subCategory.length != 0 ? (
          <View>
            {subCategory.map((val, i) => {
              return (
                <View style={styles.container1()} key={i + 'addDetails'}>
                  <View style={styles.icon()}>
                    <SvgUri
                      height={size.moderateScale(45)}
                      width={size.moderateScale(45)}
                      uri={val.icon}
                    />
                  </View>
                  <View style={styles.textMain()}>
                    <Text style={styles.textTitle()}>{val.name}</Text>
                  </View>
                  {/* NOTE: Blood Glucose */}
                  <View style={styles.cardItem1(val.id == 6)}>
                    {ViewAsPerId(val)}
                    {/* NOTE: Blood Glucose */}
                    {val.id == 6 && (
                      <Pressable style={styles.mainCard()}>
                        <TextInput
                          ref={refsFocus4}
                          keyboardType={selectKeyboard(val.id)}
                          style={styles.cardItemInputBoxMain()}
                          onChangeText={v => {
                            setGlucoseValue(v);
                            let indexK = -1;
                            if (thisArray.length == 0) {
                              thisArray.push({
                                subcategory_id: val.id,
                                value: `{'Time':'${selectedGlucose}','value':'${v}'}`,
                              });
                            } else {
                              thisArray.map((j, k) => {
                                if (j.subcategory_id === val.id) {
                                  indexK = k;
                                }
                              });
                              if (indexK == -1) {
                                thisArray.push({
                                  subcategory_id: val.id,
                                  value: `{'Time':'${selectedGlucose}','value':'${v}'}`,
                                });
                              } else {
                                if (v == '' && selectedGlucose == '') {
                                  thisArray.splice(indexK, 1);
                                } else {
                                  thisArray[
                                    indexK
                                  ].value = `{'Time':'${selectedGlucose}','value':'${v}'}`;
                                }
                              }
                            }
                            let bmiValue = 0;
                            let bmiValueData = 0;
                            thisArray.map(i => {
                              // NOTE: 1st height and 2nd weight
                              if (
                                i.subcategory_id == 7 ||
                                i.subcategory_id == 8
                              ) {
                                bmiValue = bmiValue + 1;
                              }
                            });
                            if (bmiValue == 2) {
                              thisArray.map(j => {
                                // NOTE: 1st height and 2nd weight
                                if (
                                  j.subcategory_id == 7 ||
                                  j.subcategory_id == 8
                                ) {
                                  bmiValueData += parseInt(j.value);
                                  // console.log('parseInt(i.value)', j.value);
                                }
                              });
                              // console.log('SU', bmiValueData);
                              setBMIValue(
                                bmiValueData ? bmiValueData.toString() : '',
                              );
                            }
                            setThisArray(thisArray);
                            // console.log('thisArray', thisArray);
                            setIsError('');
                            setExtra(extra + 1);
                          }}
                          maxLength={4}
                        />
                        <Text style={styles.cardItemInputBoxText()}>
                          {val.unit}
                        </Text>
                      </Pressable>
                    )}
                  </View>
                </View>
              );
            })}
            {isError ? <Text style={styles.errorText()}>{isError}</Text> : null}
            <View>
              <Button
                buttonStyle={styles.btnContinue()}
                buttonText={styles.btnContinueTxt()}
                nameTx={'addDetails_Screen.save'}
                onPress={() => {
                  validation();
                }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.textMsgMain()}>
            <Text
              style={styles.errorTxt()}
              tx={'ViewMedicationScreen.noData'}
            />
          </View>
        )}
      </Screen>
    </SafeAreaView>
  );
};
