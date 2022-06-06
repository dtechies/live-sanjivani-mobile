import React, {useState, useRef} from 'react';
import {SafeAreaView, Pressable, View, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AddSubcategory} from 'redux-actions';
import {Loader, Text, Button, Screen, Header, Toast} from 'components';
import {size} from 'theme';
import * as styles from './styles';

export const AddDetailsScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [isLoading, seIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
                    <Image
                      source={val.icon}
                      height={size.moderateScale(45)}
                      width={size.moderateScale(45)}
                    />
                  </View>
                  <View style={styles.textMain()}>
                    <Text style={styles.textTitle()}>{val.name}</Text>
                  </View>
                  <View style={styles.cardItem1()}>
                    <Pressable
                      // onPress={() => {
                      //   refsFocus4.current.focus();
                      // }}
                      style={styles.mainCardView()}>
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
