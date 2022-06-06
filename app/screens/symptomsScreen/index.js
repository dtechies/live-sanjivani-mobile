import React, {useState, useEffect} from 'react';
import {
  View,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Button, Header, InputBox, Screen} from 'components';
import {size, color, SearchValNew, IcBtnPlus} from 'theme';
import {genderData, symptomChecker} from 'json';
import * as styles from './styles';

export const SymptomsScreen = () => {
  const navigation = useNavigation();
  const [isSelected, setSelected] = useState(0);
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [age, setAge] = useState('');
  const [ageErr, setAgeErr] = useState('');
  const [gender, setGender] = useState(genderData);

  const [symChecker, setSymChecker] = useState(symptomChecker);

  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();
    let FilteredValue = symptomChecker.filter(item => {
      return item.name.toLowerCase().match(text);
    });
    setSymChecker(FilteredValue);
  };

  const itemSelect = index => {
    setSelected(index);
    setExtra(extra + 1);
  };

  const onAddPressValidation = () => {
    age === '' && setAgeErr('Enter your Age');
  };
  const clearData = () => {
    let newSymptomChecker = symptomChecker.map(i => {
      i.isActive = false;
      return i;
    });
    setSymChecker(newSymptomChecker);
  };
  useEffect(() => {
    clearData();
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
      <Text style={styles.labelTextStyle()} tx={'symptoms_screen.header'} />
      <Screen>
        <View style={styles.mainDetailContainer()}>
          <View>
            <View style={styles.mainViewStyle()}>
              <View style={styles.circleView()} />
              <Text style={styles.labelAgeStyle()} tx={'symptoms_screen.age'} />
            </View>
            <InputBox
              value={age}
              onChangeText={val => {
                setAge(val);
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
          <View style={styles.genderViewContainer()}>
            <View style={styles.mainViewStyle()}>
              <View style={styles.circleView()} />
              <Text
                style={styles.labelAgeStyle()}
                tx={'symptoms_screen.gender'}
              />
            </View>
            <View style={styles.selectedGenderContainer()}>
              {gender.map((item, index) => {
                return (
                  <Pressable
                    key={index.toString()}
                    style={styles.inputGenderMain()}
                    onPress={() => itemSelect(index)}>
                    <View style={styles.dotImg(isSelected, index)}></View>
                    <Text style={styles.inputTextStyle()} text={item.value} />
                  </Pressable>
                );
              })}
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
            onSearch(val);
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
          placeholder={'Search Symptom'}
          placeholderTextColor={color.blueTx}
        />

        {symChecker.map((val, i) => {
          return (
            <Pressable
              key={i.toString()}
              style={styles.cardDesign()}
              onPress={() => {
                symChecker[i].isActive = !val.isActive;
                // console.log('i', i);
                setExtra(extra + 1);
              }}>
              <View style={styles.dotImgSymptom(val.isActive)}></View>
              <Text style={styles.cardTxt()} text={val.name} />
            </Pressable>
          );
        })}
        {symChecker.length == 0 && (
          <Text style={styles.noData()}>No Records Found...</Text>
        )}
      </Screen>

      <Pressable
        style={styles.circleBtnView()}
        onPress={() => {
          // console.log('add symptom');
        }}>
        <IcBtnPlus
          height={size.moderateScale(69)}
          width={size.moderateScale(69)}
        />
      </Pressable>
      <View style={styles.footerView()}>
        <Button
          buttonStyle={styles.buttonFooter()}
          buttonText={styles.buttonTxt()}
          nameTx={'careGiver_screen.save'}
          onPress={() => (age ? navigation.goBack() : onAddPressValidation())}
        />
      </View>
    </SafeAreaView>
  );
};
