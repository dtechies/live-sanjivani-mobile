import React, {useState, useEffect, useRef} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {getAllSymptomAction} from 'redux-actions';
import {
  Text,
  Button,
  Header,
  InputBox,
  Screen,
  Toast,
  Loader,
} from 'components';
import {size, color, SearchValNew, IcCrossArrow} from 'theme';
import {genderVal, symptomChecker} from 'json';

import * as styles from './styles';

export const SymptomsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();

  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [age, setAge] = useState('');
  const [ageErr, setAgeErr] = useState('');
  const [gender, setGender] = useState('');
  const [genderErr, setGenderErr] = useState('');
  const [symChecker, setSymChecker] = useState(symptomChecker);
  const [allSymptomList, setAllSymptomList] = useState();
  const [loading, setLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [symptomFilteredValue, setSymptomFilteredValue] = useState();
  const [symptomErr, setSymptomErr] = useState('');
  const [selectedSymptomList, setSelectedSymptomList] = useState([]);
  const [showSelectedSymptomList, setShowSelectedSymptomList] = useState(false);
  const [symptomDropDown, setSymptomDropDown] = useState(false);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const onAddPressValidation = () => {
    if (age === '') {
      setAgeErr('Enter your Age');
    }
    if (gender === '') {
      setGenderErr('Select Gender');
    }
    if (selectedSymptomList.length == 0) {
      setSymptomErr('Select Symptom');
    }
  };
  const onSearchPress = () => {
    // console.log('selectedSymptomList', selectedSymptomList);
    // console.log('gender ==>', gender);
    // console.log('age ==>', age);
  };
  const clearData = () => {
    let newSymptomChecker = symptomChecker.map(i => {
      i.isActive = false;
      return i;
    });
    setSymChecker(newSymptomChecker);
  };
  const getAllSymptom = async () => {
    setLoading(true);
    const getAllSymptomResponse = await dispatch(getAllSymptomAction());
    const res = getAllSymptomResponse;
    // console.log('getAllSymptom res==>', getAllSymptomResponse.data);

    if (res.status) {
      setAllSymptomList(res.data);
      setLoading(false);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const onSymptomSearch = val => {
    setSearchText(val);
    if (val.length == 0) {
      setSymptomFilteredValue([]);
    }
    let text = val.toLowerCase() || val.toUpperCase();
    setSymptomDropDown(true);
    let filteredName = allSymptomList.filter(item => {
      return item.name.toLowerCase().match(text);
    });
    setSymptomFilteredValue(filteredName);
    // }
  };
  useEffect(() => {
    clearData();
    getAllSymptom();
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'symptoms_screen.title'}
      />
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Text style={styles.labelTextStyle()} tx={'symptoms_screen.header'} />
      <Screen>
        <View style={styles.mainDetailContainer()}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.full()}>
              <View style={styles.mainViewStyle()}>
                <View style={styles.circleView()} />
                <Text
                  style={styles.labelAgeStyle()}
                  tx={'symptoms_screen.age'}
                />
              </View>
              <View>
                <InputBox
                  value={age}
                  onChangeText={val => {
                    setAge(val);
                    setAgeErr('');
                    setExtra(extra + 1);
                  }}
                  maxLength={3}
                  keyboardType={'number-pad'}
                  mainContainerStyle={styles.inputMain()}
                  inputStyle={styles.inputTextStyle()}
                  // onChangeText={val => setCareGiver({...careGiver, firstName: val})}
                />
                {ageErr ? (
                  <Text style={styles.textValidation()} text={ageErr} />
                ) : null}
              </View>
            </View>
            <View style={styles.full()}>
              <View style={styles.mainViewStyle()}>
                <View style={styles.circleView()} />
                <Text
                  style={styles.labelAgeStyle()}
                  tx={'symptoms_screen.gender'}
                />
              </View>
              <Dropdown
                data={genderVal}
                labelField="label"
                valueField="value"
                placeholder={'Gender'}
                dropdownPosition={'bottom'}
                showsVerticalScrollIndicator={false}
                style={styles.dropdown()}
                placeholderStyle={styles.labelFieldText()}
                selectedTextStyle={styles.selectedOptionTextStyle()}
                maxHeight={size.moderateScale(90)}
                containerStyle={styles.dropdownContainer()}
                value={gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                flatListProps={{
                  bounces: false,
                }}
                onChange={item => {
                  setGender(item.value);
                  setGenderErr('');
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
              {genderErr ? (
                <Text style={styles.textValidation()} text={genderErr} />
              ) : null}
            </View>
          </View>
        </View>

        <Text
          style={styles.labelTextStyle()}
          tx={'symptoms_screen.whatAreYourSymptoms'}
        />
        <InputBox
          value={searchText}
          onChangeText={val => {
            onSymptomSearch(val);
          }}
          mainContainerStyle={styles.inputSearchStyle()}
          inputStyle={styles.inputTxt()}
          leftIcon={true}
          leftIconName={
            <SearchValNew
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.blue}
            />
          }
          withButton={true}
          btnName={'Done'}
          onRightIconPress={() => {
            setSymptomDropDown(false);
            setShowSelectedSymptomList(true);
          }}
          placeholder={'Search Symptom'}
          placeholderTextColor={color.blueTx}
        />
        {symptomErr ? (
          <Text style={styles.textValidation(symptomErr)} text={symptomErr} />
        ) : null}

        {symptomDropDown &&
          symptomFilteredValue.map((val, i) => {
            return (
              <Pressable
                key={i.toString()}
                style={styles.cardDesign(val.isActive)}
                onPress={() => {
                  if (
                    selectedSymptomList.some(item => val.name === item.name)
                  ) {
                    symptomFilteredValue[i].isActive = false;
                    setExtra(extra + 1);
                    setSymptomErr('');
                  } else {
                    symptomFilteredValue[i].isActive = true;
                    selectedSymptomList.push(val);
                    setSymptomErr('');
                    setExtra(extra + 1);
                  }
                }}>
                <Text style={styles.cardTxt()} text={val.name} />
              </Pressable>
            );
          })}
        {symptomFilteredValue && symptomFilteredValue.length == 0 && (
          <Text style={styles.noData()}>No Records Found...</Text>
        )}

        <View style={styles.selectedSymptomMainView()}>
          {showSelectedSymptomList &&
            selectedSymptomList.map((item, index) => {
              return (
                <View style={styles.selectedSymptomRowView()}>
                  <Text style={styles.textSymptomName()}>{item.name}</Text>
                  <Pressable
                    onPress={() => {
                      selectedSymptomList[index].isActive = !item.isActive;
                      selectedSymptomList.splice(index, 1);
                      setSelectedSymptomList(selectedSymptomList);
                      setExtra(extra + 1);
                    }}>
                    <IcCrossArrow
                      width={size.moderateScale(10)}
                      height={size.moderateScale(10)}
                      fill={color.black}
                    />
                  </Pressable>
                </View>
              );
            })}
        </View>
      </Screen>

      {/* <Pressable
        style={styles.circleBtnView()}
        onPress={() => {
          // console.log('add symptom');
        }}>
        <IcBtnPlus
          height={size.moderateScale(69)}
          width={size.moderateScale(69)}
        />
      </Pressable> */}
      <View style={styles.footerView()}>
        <Button
          buttonStyle={styles.buttonFooter()}
          buttonText={styles.buttonTxt()}
          nameTx={'careGiver_screen.search'}
          onPress={() => (age ? onSearchPress() : onAddPressValidation())}
        />
      </View>
    </SafeAreaView>
  );
};
