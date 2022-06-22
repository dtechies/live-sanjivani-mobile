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
import {genderSysVal, symptomChecker} from 'json';

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
  const [symptomFilteredValue, setSymptomFilteredValue] = useState();
  const [symptomErr, setSymptomErr] = useState('');
  const [selectedSymptomList, setSelectedSymptomList] = useState([]);
  const [showSelectedSymptomList, setShowSelectedSymptomList] = useState(false);
  const [symptomDropDown, setSymptomDropDown] = useState(false);
  const [currentMedication, setCurrentMedication] = useState('');
  const [existingCondition, setExistingCondition] = useState('');
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
    let symptomId = selectedSymptomList.map((item, index) => {
      return item.id;
    });
    let data = allSymptomList.filter(val => {
      let text = val.age;
      let startAgeRange = text.split('-')[0];
      let endAgeRange = text.split('-')[1];
      if (
        val.gender == gender.toLowerCase() ||
        val.id == symptomId ||
        age > startAgeRange ||
        age < endAgeRange
      ) {
        return val;
      }
    });
    navigation.navigate('symptomDetailScreen', {
      data: data,
      age: age,
      gender: gender,
    });
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
      return item.name.toLowerCase().includes(text);
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
      <Screen withScroll bounces={false}>
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
                  placeHolderVal={'symptoms_screen.age'}
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
                data={genderSysVal}
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
                flatListProps={{
                  bounces: false,
                }}
                onChange={item => {
                  setGender(item.value);
                  setGenderErr('');
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
          <Text
            style={styles.labelTextStyle()}
            tx={'symptoms_screen.whatAreYourSymptoms'}
          />

          <InputBox
            value={searchText}
            placeHolderVal={'symptoms_detail_screen.symptom'}
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
            btnTxName={'symptoms_screen.done'}
            onRightIconPress={() => {
              setSymptomDropDown(false);
              setShowSelectedSymptomList(true);
            }}
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
                  <Text style={styles.cardTxt(val.isActive)} text={val.name} />
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
                        fill={color.blueTx}
                      />
                    </Pressable>
                  </View>
                );
              })}
          </View>
          <InputBox
            value={currentMedication}
            onChangeText={val => {
              setCurrentMedication(val);
            }}
            mainContainerStyle={styles.inputSearchStyle()}
            inputStyle={styles.inputTxt()}
            placeHolderVal={'symptoms_screen.current_medications'}
            // placeholder={'Current Medications'}
            placeholderTextColor={color.blueTx}
          />
          <InputBox
            value={existingCondition}
            placeHolderVal={'symptoms_screen.existing_conditions'}
            onChangeText={val => {
              setExistingCondition(val);
            }}
            mainContainerStyle={styles.inputSearchStyle()}
            inputStyle={styles.inputTxt()}
            // placeholder={'Existing Conditions'}
            placeholderTextColor={color.blueTx}
          />
        </View>
      </Screen>
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
