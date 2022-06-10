import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';

import {useDispatch} from 'react-redux';
import {AddSubcategory} from 'redux-actions';
import {SvgUri} from 'react-native-svg';
import {Loader, Text, Button, Screen, Header, Toast} from 'components';
import {size} from 'theme';
import * as styles from './styles';
import {BloodGlucoseData} from 'json';
export const AddDetailsScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [bloodGlucoseVal, setBloodGlucoseVal] = useState('');
  const [isLoading, seIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [BMIValue, setBMIValue] = useState('');
  const [thisArray, setThisArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(
    props.route.params ? props.route.params.title : '',
  );
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const [subCategory, setSubCategory] = useState(
    props.route.params ? props.route.params.sub : [],
  );
  const refsFocus4 = useRef();
  const validation = () => {
    if (thisArray.length == 0) {
      setIsError('Please Fill At least 1 Filled...');
    } else {
      refsFocus4.current.clear();
      saveData();
    }
  };

  const saveData = async () => {
    if (BMIValue !== '') {
      thisArray.push({
        subcategory_id: 19,
        value: BMIValue,
      });
    }
    setLoading(true);
    const subCategoryBody = {
      subcategory_data: thisArray,
    };
    // console.log('subCategoryBody ==>', subCategoryBody);
    const allCatResponse = await dispatch(AddSubcategory(subCategoryBody));
    const res = allCatResponse;
    // console.log('subCategoryBody res ==>', res);
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

  useEffect(() => {
    console.log(subCategory, thisArray, 'thisArray');
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
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        text={title}
      />
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
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
                  <View style={styles.cardItem1()}>
                    {val.id == 7 ? (
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
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        flatListProps={{
                          bounces: false,
                        }}
                        onChange={item => {
                          setBloodGlucoseVal(item.name);
                          let indexK = -1;
                          if (thisArray.length == 0) {
                            thisArray.push({
                              subcategory_id: val.id,
                              value: item.name,
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
                                value: item.name,
                              });
                            } else {
                              thisArray[indexK].value = item.name;
                            }
                          }
                          setThisArray(thisArray);
                          setIsError('');
                          setExtra(extra + 1);
                          setIsFocus(false);
                        }}
                        renderItem={item => {
                          return (
                            <View>
                              <Text
                                text={item.name}
                                style={styles.InsideLabelFieldText()}
                              />
                              <View style={styles.separator()} />
                            </View>
                          );
                        }}
                      />
                    ) : val.id !== 19 ? (
                      <Pressable style={styles.mainCardView()}>
                        <TextInput
                          ref={refsFocus4}
                          keyboardType={'number-pad'}
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
                            thisArray.map(i => {
                              if (
                                i.subcategory_id == 8 ||
                                i.subcategory_id == 9
                              ) {
                                bmiValue = bmiValue + 1;
                              }
                            });
                            if (bmiValue == 2) {
                              thisArray.map(j => {
                                if (
                                  j.subcategory_id == 8 ||
                                  j.subcategory_id == 9
                                ) {
                                  bmiValueData += parseInt(j.value);
                                  console.log('parseInt(i.value)', j.value);
                                }
                              });
                              console.log('SU', bmiValueData);
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
                    ) : (
                      <Pressable style={styles.mainCardView()}>
                        <TextInput
                          editable={false}
                          style={styles.cardItemInputBoxMain()}
                          maxLength={4}
                          value={BMIValue}
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
            <Text style={styles.errorTxt()}>No Data Found...</Text>
          </View>
        )}
      </Screen>
    </SafeAreaView>
  );
};
