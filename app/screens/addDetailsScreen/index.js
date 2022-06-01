import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Header,
} from 'components';
import {size, color, images} from 'theme';
import * as styles from './styles';
import {dose, MainProfileDetail, DWMYData, AddNavData, mealtime} from 'json';

export const AddDetailsScreen = props => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [extra, setExtra] = useState(0);
  const [title, setTitle] = useState('');
  const [subCategory, setSubCategory] = useState([]);
  const [mealTimeVal, setMealTimeVal] = useState(null);
  const [mealTimeValDefault, setMealTimeValDefault] = useState({
    name: 'Fasting',
  });
  const refsFocus = useRef(null);
  const refsFocus1 = useRef(null);
  const refsFocus2 = useRef(null);
  const refsFocus3 = useRef(null);
  const refsFocus4 = useRef(null);
  const refsFocus5 = useRef(null);
  useEffect(() => {
    if (props.route.params) {
      setTitle(props.route.params.title);
      setSubCategory(props.route.params.sub);
      setExtra(extra + 1);
    }
  }, []);

  const [unit, setUnit] = useState('');
  const [unit1, setUnit1] = useState('');
  const [unit2, setUnit2] = useState('');
  const [unit3, setUnit3] = useState('');
  const [unit4, setUnit4] = useState('');
  const [unit5, setUnit5] = useState('');

  const validation = () => {
    if (
      (mealTimeVal === null || unit5 === '') &&
      unit === '' &&
      unit1 === '' &&
      unit2 === '' &&
      unit3 === '' &&
      unit4 === ''
    ) {
      setIsError('Please Enter at least one details...');
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
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        {subCategory.map((val, i) => {
          let Icon = val.icon;
          return (
            <View style={styles.container1()} key={i + 'addDetails'}>
              <View style={styles.icon()}>
                <Icon
                  height={size.moderateScale(45)}
                  width={size.moderateScale(45)}
                  fill={color.turquoiseNew}
                />
              </View>
              <View style={styles.textMain()}>
                <Text style={styles.textTitle()}>{val.name}</Text>
              </View>
              {i == 0 ? (
                <View>
                  {/* <InputBox
                    value={unit}
                    keyboardType={'number-pad'}
                    mainContainerStyle={styles.cardItem()}
                    inputStyle={styles.cardText()}
                    isRightUnit={true}
                    unit={val.unit}
                    onChangeText={val => {
                      setUnit(val);
                    }}
                  /> */}
                  <View style={styles.cardItem1()}>
                    <TextInput
                      ref={refsFocus}
                      value={unit}
                      keyboardType={'number-pad'}
                      style={styles.cardItemInputBoxMain()}
                      onChangeText={val => {
                        setUnit(val);
                      }}
                    />
                    <Pressable
                      onPress={() => {
                        refsFocus.current.focus();
                      }}>
                      <Text style={styles.cardItemInputBoxText()}>
                        {val.unit}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ) : i == 1 ? (
                // <InputBox
                //   value={unit1}
                //   keyboardType={'number-pad'}
                //   mainContainerStyle={styles.cardItem()}
                //   inputStyle={styles.cardText()}
                //   isRightUnit={true}
                //   unit={val.unit}
                //   onChangeText={val => {
                //     setUnit1(val);
                //   }}
                // />
                <View style={styles.cardItem1()}>
                  <TextInput
                    ref={refsFocus1}
                    value={unit1}
                    keyboardType={'number-pad'}
                    style={styles.cardItemInputBoxMain()}
                    onChangeText={val => {
                      setUnit1(val);
                    }}
                  />
                  <Pressable
                    onPress={() => {
                      refsFocus1.current.focus();
                    }}>
                    <Text
                      style={styles.cardItemInputBoxText(
                        val.unit == 'Kg' ? 2 : 1,
                      )}>
                      {val.unit}
                    </Text>
                  </Pressable>
                </View>
              ) : i == 2 ? (
                // <InputBox
                //   value={unit2}
                //   keyboardType={'number-pad'}
                //   mainContainerStyle={styles.cardItem()}
                //   inputStyle={styles.cardText()}
                //   isRightUnit={true}
                //   unit={val.unit}
                //   onChangeText={val => {
                //     setUnit2(val);
                //   }}
                // />
                <View style={styles.cardItem1()}>
                  <TextInput
                    ref={refsFocus2}
                    value={unit2}
                    keyboardType={'number-pad'}
                    style={styles.cardItemInputBoxMain()}
                    onChangeText={val => {
                      setUnit2(val);
                    }}
                  />
                  <Pressable
                    onPress={() => {
                      refsFocus2.current.focus();
                    }}>
                    <Text style={styles.cardItemInputBoxText(2)}>
                      {val.unit}
                    </Text>
                  </Pressable>
                </View>
              ) : i == 3 ? (
                // <InputBox
                //   value={unit3}
                //   keyboardType={'number-pad'}
                //   mainContainerStyle={styles.cardItem()}
                //   inputStyle={styles.cardText()}
                //   isRightUnit={true}
                //   unit={val.unit}
                //   onChangeText={val => {
                //     setUnit3(val);
                //   }}
                // />
                <View style={styles.cardItem1()}>
                  <TextInput
                    ref={refsFocus3}
                    value={unit3}
                    keyboardType={'number-pad'}
                    style={styles.cardItemInputBoxMain()}
                    onChangeText={val => {
                      setUnit3(val);
                    }}
                  />
                  <Pressable
                    onPress={() => {
                      refsFocus3.current.focus();
                    }}>
                    <Text style={styles.cardItemInputBoxText(2)}>
                      {val.unit}
                    </Text>
                  </Pressable>
                </View>
              ) : i == 4 ? (
                // <InputBox
                //   value={unit4}
                //   keyboardType={'number-pad'}
                //   mainContainerStyle={styles.cardItem()}
                //   inputStyle={styles.cardText()}
                //   isRightUnit={true}
                //   unit={val.unit}
                //   onChangeText={val => {
                //     setUnit4(val);
                //   }}
                // />
                <View style={styles.cardItem1()}>
                  <TextInput
                    ref={refsFocus4}
                    value={unit4}
                    keyboardType={'number-pad'}
                    style={styles.cardItemInputBoxMain(3)}
                    onChangeText={val => {
                      setUnit4(val);
                    }}
                  />
                  <Pressable
                    onPress={() => {
                      refsFocus4.current.focus();
                    }}>
                    <Text style={styles.cardItemInputBoxText(3)}>
                      {val.unit}
                    </Text>
                  </Pressable>
                </View>
              ) : i == 5 && !val.unit == '' ? (
                // <InputBox
                //   value={unit5}
                //   keyboardType={'number-pad'}
                //   mainContainerStyle={styles.cardItem()}
                //   inputStyle={styles.cardText()}
                //   isRightUnit={true}
                //   unit={val.unit}
                //   onChangeText={val => {
                //     setUnit5(val);
                //   }}
                // />
                <View style={styles.cardItem1()}>
                  <TextInput
                    ref={refsFocus5}
                    value={unit5}
                    keyboardType={'number-pad'}
                    style={styles.cardItemInputBoxMain(3)}
                    onChangeText={val => {
                      setUnit5(val);
                    }}
                  />
                  <Pressable
                    onPress={() => {
                      refsFocus5.current.focus();
                    }}>
                    <Text style={styles.cardItemInputBoxText(3)}>
                      {val.unit}
                    </Text>
                  </Pressable>
                </View>
              ) : (
                <Dropdown
                  defaultValue={mealTimeValDefault}
                  data={mealtime}
                  labelField="name"
                  valueField="name"
                  // placeholder={'Dose'}
                  dropdownPosition={'bottom'}
                  style={styles.dropdown()}
                  // placeholderStyle={styles.labelFieldText()}
                  selectedTextStyle={styles.selectedOptionTextStyle()}
                  maxHeight={size.moderateScale(87)}
                  showsVerticalScrollIndicator={false}
                  containerStyle={styles.dropdownContainer()}
                  // value={mealTimeVal}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  flatListProps={{
                    bounces: false,
                    ItemSeparatorComponent: () => {
                      return <View style={styles.separator()} />;
                    },
                  }}
                  onChange={item => {
                    setMealTimeVal(item.name);
                    setIsFocus(false);
                  }}
                  renderItem={(item, index) => {
                    return (
                      <View style={styles.dropDownMain()}>
                        <Text
                          text={item.name}
                          style={styles.InsideLabelFieldText()}
                        />
                      </View>
                    );
                  }}
                />
              )}
            </View>
          );
        })}
        {isError ? <Text style={styles.errorText()}>{isError}</Text> : null}
        {/* {(unit != '' ||
          unit1 != '' ||
          unit2 != '' ||
          unit3 != '' ||
          unit4 != '' ||
          unit5 != '') && ( */}
        <View>
          <Button
            buttonStyle={styles.btnContinue()}
            buttonText={styles.btnContinueTxt()}
            nameTx={'addDetails_Screen.save'}
            onPress={() => {
              (mealTimeVal === null || unit5 === '') &&
              unit === '' &&
              unit1 === '' &&
              unit2 === '' &&
              unit3 === '' &&
              unit4 === ''
                ? validation()
                : saveData();
              // navigation.goBack();
            }}
          />
        </View>
        {/* )} */}
      </Screen>
    </SafeAreaView>
  );
};
