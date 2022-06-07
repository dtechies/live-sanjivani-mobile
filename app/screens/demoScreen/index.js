import React, {useRef, useState} from 'react';
import {
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Loader,
  Text,
  ChangeLanguage,
  Button,
  TitleBox,
  InputBox,
  IcHome,
  // AddItem,
  DocDetails,
  ToggleSwitch,
  MedicalItems,
  Header,
} from 'components';
// import {
//   images,
//   IcArrowNext,
//   IcMoreDetails,
//   size,
//   color,
//   IcWeb,
//   IcTick,
//   IcPlus,
//   IcProfileLogo,
//   IcDot,
// } from 'theme';
import {SwipeListView} from 'react-native-swipe-list-view';
import {reminderListData} from 'json';
// import {dose, mainProfileDetail, DWMYData} from 'json';

// import {Text, Button, MedicalItems} from 'components';
import {
  size,
  color,
  IcWeb,
  IcTick,
  IcPlus,
  IcSearch,
  IcMan,
  IcAppointment,
  IcJournal,
  IcHeartNew,
  IcPills,
  images,
  IcDot,
} from 'theme';
import {dose, mainProfileDetail, DWMYData} from 'json';
import * as styles from './styles';
// import {LineChart} from 'react-native-chart-kit';
// import {IcPills} from '../../theme/image/svgIcons/IcPills';

export const DemoScreen = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [extra, setExtra] = useState(0);
  const [isCardActive, setIsCardActive] = useState(false);
  const [firstDigit, setFirstDigit] = useState('1');
  const [secondDigit, setSecondDigit] = useState('2');
  const [thirdDigit, setThirdDigit] = useState('3');
  const [fourthDigit, setFourthDigit] = useState('4');

  const docDetails = [
    {
      id: 1,
      name: 'Dr. Aman Mathur',
      profession: 'Cardiologist',
      address: 'Kalyani Nagar - 2 km',
      rate: 3,
      total: 213,
      image: `${images.icDoc}`,
    },
    {
      id: 2,
      name: 'Dr. Mital Gal',
      profession: 'Dentist',
      address: 'Shivaji Nagar- 3 km',
      rate: 2,
      total: 25,
      image: `${images.icDoc}`,
    },
    {
      id: 3,
      name: 'Dr. Mayur More',
      profession: 'Psychiatrist',
      address: 'More Marg , Pune - 10 km',
      rate: 5,
      total: 456,
      image: `${images.icDoc}`,
    },
    {
      id: 4,
      name: 'Dr. Jeff Smiths',
      profession: 'Dermatologist',
      address: 'Koregaon Park - 4 km',
      rate: 2,
      total: 25,
      image: `${images.icDoc}`,
    },
  ];

  const getMedicine = [
    {
      name: '1 Glycomet 0.5 MG',
      dis: '08:00 AM, Everyday before meal.',
      isActive: false,
    },
    {
      name: '1 Glycomet 0.5 MG',
      dis: '08:00 AM, Everyday before meal.',
      isActive: false,
    },
    {
      name: '1 Glycomet 0.5 MG',
      dis: '08:00 AM, Everyday before meal.',
      isActive: false,
    },
    {
      name: '1 Glycomet 0.5 MG',
      dis: '08:00 AM, Everyday before meal.',
      isActive: false,
    },
  ];

  const [medicine, setMedicine] = useState(getMedicine);

  const singleDoc = [
    {
      id: 1,
      name: 'Dr. Aman Mathur',
      profession: 'Cardiologist',
      address: 'Kalyani Nagar - 2 km',
      rate: 3,
      total: 213,
      image: `${images.icDoc}`,
    },
  ];

  const SymptomChecker = [
    {
      id: 1,
      name: 'Headache',
      isActive: false,
    },
    {
      id: 2,
      name: 'Diziness',
      isActive: false,
    },
    {
      id: 3,
      name: 'Facial Pain ',
      isActive: false,
    },
    {
      id: 4,
      name: 'Fever',
      isActive: false,
    },
    {
      id: 5,
      name: 'Swelling ',
      isActive: false,
    },
    {
      id: 6,
      name: 'Ichiing',
      isActive: false,
    },
  ];

  const [symChecker, setSymChecker] = useState(SymptomChecker);

  const navigation = useNavigation();
  const refInputFirst = useRef();
  const refInputSecond = useRef();
  const refInputThird = useRef();
  const refInputFourth = useRef();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header
          isColor={true}
          isClose={false}
          isLogo={false}
          isLongArrowLeft={false}
          isLeftArrow={true}
          isLogoCenter={true}
          isHeading={true}
          isBlue={false}
          isCamera={true}
        />
        <ScrollView>
          <View style={styles.container()}>
            <Text>TextInput</Text>
            <InputBox
              mainContainerStyle={styles.inputMain()}
              placeholder={'95625882248'}
              withButton={true}
              inputStyle={styles.button()}
              onRightIconPress={() => {
                console.log('request Opt...');
              }}
              defaultNumber={
                <Text
                  style={styles.labelFieldText()}
                  tx="login_screen.countryCode"
                />
              }
              // containerStyle={styles.inputMain()}
            />
            <View style={styles.otpMain()}>
              <View style={styles.otpSub()}>
                <TextInput
                  value={firstDigit}
                  maxLength={1}
                  style={styles.otpInput()}
                  onChangeText={text => {
                    setFirstDigit(text);
                    // refInputSecond.current.focus();
                  }}
                  keyboardType="numeric"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   refInputSecond.current.focus();
                  // }}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? refInputFirst.current.focus()
                      : refInputSecond.current.focus();
                  }}
                  blurOnSubmit={false}
                  ref={refInputFirst}
                />
                <TextInput
                  value={secondDigit}
                  maxLength={1}
                  style={styles.otpInput()}
                  onChangeText={text => {
                    setSecondDigit(text);
                    // refInputThird.current.focus();
                  }}
                  keyboardType="numeric"
                  ref={refInputSecond}
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   refInputThird.current.focus();
                  // }}
                  blurOnSubmit={false}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? refInputFirst.current.focus()
                      : refInputThird.current.focus();
                  }}
                />
                <TextInput
                  value={thirdDigit}
                  maxLength={1}
                  style={styles.otpInput()}
                  onChangeText={text => {
                    setThirdDigit(text);
                    // refInputFourth.current.focus();
                  }}
                  keyboardType="numeric"
                  ref={refInputThird}
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   refInputFourth.current.focus();
                  // }}
                  blurOnSubmit={false}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? refInputSecond.current.focus()
                      : refInputFourth.current.focus();
                  }}
                />
                <TextInput
                  value={fourthDigit}
                  maxLength={1}
                  style={styles.otpInput()}
                  onChangeText={text => {
                    setFourthDigit(text);
                  }}
                  keyboardType="numeric"
                  ref={refInputFourth}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? refInputThird.current.focus()
                      : '';
                  }}
                />
              </View>
              <Pressable
                onPress={() => {
                  setFirstDigit('');
                  setSecondDigit('');
                  setThirdDigit('');
                  setFourthDigit('');
                  refInputFirst.current.focus();
                  setExtra(extra + 1);
                }}
                style={{alignItems: 'flex-end'}}>
                <Text>X</Text>
              </Pressable>
            </View>
            {/* <InputBox
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.button()}
              rightIcon={true}
              onRightIconPress={() => {
                console.log('remove opt...');
              }}
            /> */}
            <InputBox
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.button()}
              leftIcon={true}
              placeholder={'Search Medicine'}
            />
            <InputBox
              mainContainerStyle={styles.inputMain()}
              placeholder={'Type here'}
              isRightSide={true}
              inputStyle={styles.button()}
              onRightIconPress={() => {
                console.log('upload data');
              }}
            />
            {/* <View style={styles.mainReminder()}>
              <SwipeListView
                data={reminderListData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={data => {
                  const isActive = activeIndex.includes(data.item.id);
                  return (
                    <View style={[styles.reminderView(isActive)]}>
                      <View style={styles.subMain()}>
                        <IcDot height={12} width={12} fill={color.blueLight} />
                        <Text style={styles.timeTxt()}>{data.item.time}</Text>
                        <Text style={styles.dateTxt()}>{data.item.date}</Text>
                      </View>
                      <View>
                        <ToggleSwitch
                          onColor={color.mediumGreen}
                          isOn={isActive}
                          size={'small'}
                          onToggle={val => {
                            if (isActive) {
                              const valueIndex = activeIndex.findIndex(
                                val => val === data.item.id,
                              );
                              activeIndex.splice(valueIndex, 1);
                              setExtra(extra + 1);
                            } else {
                              setActiveIndex([...activeIndex, data.item.id]);
                            }
                          }}
                        />
                      </View>
                    </View>
                  );
                }}
                ItemSeparatorComponent={() => (
                  <View style={styles.separator}></View>
                )}
                showsVerticalScrollIndicator={false}
                rightOpenValue={-90}
                useNativeDriver={true}
                disableRightSwipe
              />
            </View> */}
            <View>
              {medicine.map((val, i) => {
                return (
                  <Pressable
                    style={styles.cardMain(val.isActive)}
                    onPress={() => {
                      medicine[i].isActive = !val.isActive;
                      setExtra(extra + 1);
                      // console.log('click card...!!!!');
                    }}
                    key={i.toString()}>
                    <View style={styles.cardFirst()}>
                      <IcDot
                        height={12}
                        width={12}
                        fill={val.isActive ? color.darkBlue : color.blueLight}
                      />
                      <Text style={styles.cardHeading(val.isActive)}>
                        {val.name}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.cardText(val.isActive)}>
                        {val.dis}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>

            {symChecker.map((val, i) => {
              return (
                <Pressable
                  style={styles.cardDesign()}
                  onPress={() => {
                    symChecker[i].isActive = !val.isActive;
                    setExtra(extra + 1);
                  }}
                  key={i.toString()}>
                  <View style={styles.dotImg(val.isActive)}></View>
                  <Text style={styles.cardTxt()} />
                </Pressable>
              );
            })}
            {/* </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
