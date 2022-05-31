import React, {useEffect, useState} from 'react';
import {SafeAreaView, Pressable, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
  const [showDate, setShowDate] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [element, setElement] = useState('');
  const [elementErr, setElementErr] = useState('');
  const [drink, setDrink] = useState('');
  const [drinkErr, setDrinkErr] = useState('');
  const [reaction, setReaction] = useState('');
  const [reactionErr, setReactionErr] = useState('');
  const [severity, setSeverity] = useState('');
  const [severityErr, setSeverityErr] = useState('');
  const [toothbrushing, setToothbrushing] = useState('');
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

  useEffect(() => {
    if (props.route.params) {
      setTitle(props.route.params.title);
      setSubCategory(props.route.params.sub);
      setExtra(extra + 1);
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
    setShowDate(false);
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
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        <View style={styles.headingFirst(1)}>
          <View style={styles.headOne(1)}>
            <IcOtherIcon1 height={25} width={25} fill={color.turquoiseNew} />
            <Text style={styles.headingTxt()}>Allegies</Text>
          </View>
          <View style={styles.itemListMain(1)}>
            <Text style={styles.itemListTxt()}>Element</Text>
            <InputBox
              // placeholder={'Last Name'}
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              // placeholderTextColor={color.grayTxt}
              isShadow={true}
              value={element}
              onChange={e => {
                setElement(e.value);
                setExtra(extra + 1);
                validation();
              }}
            />
          </View>
          {elementErr ? (
            <Text style={styles.errorText()}>{elementErr}</Text>
          ) : null}
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt()}>Reaction</Text>
            <InputBox
              // placeholder={'Last Name'}
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              placeholderTextColor={color.grayTxt}
              isShadow={true}
              value={reaction}
              onChange={e => {
                setReaction(e.value);
                setExtra(extra + 1);
                validation();
              }}
            />
          </View>
          {reactionErr ? (
            <Text style={styles.errorText()}>{reactionErr}</Text>
          ) : null}
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt()}>Severity</Text>
            <InputBox
              // placeholder={'Last Name'}
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              placeholderTextColor={color.grayTxt}
              isShadow={true}
              value={severity}
              onChange={e => {
                setSeverity(e.value);
                setExtra(extra + 1);
                validation();
              }}
            />
          </View>
          {severityErr ? (
            <Text style={styles.errorText()}>{severityErr}</Text>
          ) : null}
          <Pressable
            style={styles.itemListMain()}
            onPress={() => {
              setShowDate(true);
            }}>
            <Text style={styles.itemListTxt()} text="Date" />
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
                onConfirm={val => getCurrentDate(val)}
                onCancel={() => {
                  setShowDate(false);
                  setExtra(extra + 1);
                }}
              />
            )}
          </Pressable>
          {selectedDateErr ? (
            <Text style={styles.errorText()}>{selectedDateErr}</Text>
          ) : null}
        </View>
        <View style={styles.headingFirst()}>
          <View style={styles.headOne()}>
            <IcOtherIcon2 height={35} width={35} fill={color.turquoiseNew} />
            <Text style={styles.headingTxt()}>Menstruation</Text>
          </View>
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt()}>Flow</Text>
            <Dropdown
              defaultValue={measurementDefault}
              data={menstruation}
              labelField="label"
              valueField="value"
              // placeholder={'No Flow'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              placeholderStyle={styles.labelFieldText()}
              selectedTextStyle={styles.selectedOptionTextStyle()}
              maxHeight={size.moderateScale(55)}
              showsVerticalScrollIndicator={false}
              containerStyle={styles.dropdownContainer()}
              // value={doseValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              flatListProps={{
                bounces: false,
                ItemSeparatorComponent: () => {
                  return <View style={styles.separator()} />;
                },
              }}
              onChange={item => {
                setDoseValue(item.value);
                setIsFocus(false);
              }}
              renderItem={item => {
                return (
                  <View style={styles.dropDownMain()}>
                    <Text
                      text={item.value}
                      style={styles.InsideLabelFieldText()}
                    />
                  </View>
                );
              }}
            />
          </View>
          {doseValueErr ? (
            <Text style={styles.errorText()}>{doseValueErr}</Text>
          ) : null}
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt(1)}>Start of Cycle</Text>
            <Dropdown
              defaultValue={startOfCycleDefault}
              data={startOfCycle}
              labelField="label"
              valueField="value"
              // placeholder={'Yes'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              placeholderStyle={styles.labelFieldText()}
              selectedTextStyle={styles.selectedOptionTextStyle()}
              maxHeight={size.moderateScale(55)}
              showsVerticalScrollIndicator={false}
              containerStyle={styles.dropdownContainer()}
              // value={startOfCycleVal}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              flatListProps={{
                bounces: false,
                ItemSeparatorComponent: () => {
                  return <View style={styles.separator()} />;
                },
              }}
              onChange={item => {
                setStartOfCycleVal(item.value);
                setIsFocus(false);
              }}
              renderItem={item => {
                return (
                  <View style={styles.dropDownMain()}>
                    <Text
                      text={item.value}
                      style={styles.InsideLabelFieldText()}
                    />
                  </View>
                );
              }}
            />
          </View>
          {startOfCycleValErr ? (
            <Text style={styles.errorText()}>{startOfCycleValErr}</Text>
          ) : null}
        </View>
        <View style={styles.headingFirst()}>
          <View style={styles.headOne()}>
            <IcOtherIcon3 height={25} width={25} fill={color.turquoiseNew} />
            <Text style={styles.headingTxt()}>Alcohol Consumption</Text>
          </View>
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt()}>Drink</Text>
            <InputBox
              placeholder={'Ex: 2'}
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              placeholderTextColor={color.grayTxt}
              isShadow={true}
              keyboardType="numeric"
              value={drink}
              onChange={val => {
                setDrink(val);
              }}
            />
          </View>
        </View>
        <View style={styles.headingFirst()}>
          <View style={styles.headOne()}>
            <IcOtherIcon4 height={25} width={25} fill={color.turquoiseNew} />
            <Text style={styles.headingTxt()}>Inhaler Usage</Text>
          </View>
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt()}>Inhaler</Text>
            <InputBox
              placeholder={'Ex: 2 puffs'}
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              placeholderTextColor={color.grayTxt}
              isShadow={true}
            />
          </View>
        </View>
        <View style={styles.headingFirst()}>
          <View style={styles.headOne()}>
            <IcOtherIcon5 height={20} width={20} fill={color.turquoiseNew} />
            <Text style={styles.headingTxt()}>Sexual Activity</Text>
          </View>
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt()}>Protection</Text>
            <Dropdown
              defaultValue={protectionDefault}
              data={protection}
              labelField="label"
              valueField="value"
              // placeholder={'Protection Used'}
              dropdownPosition={'bottom'}
              style={styles.dropdown()}
              placeholderStyle={styles.labelFieldText()}
              selectedTextStyle={styles.selectedOptionTextStyle()}
              maxHeight={size.moderateScale(55)}
              showsVerticalScrollIndicator={false}
              containerStyle={styles.dropdownContainer()}
              // value={protectionVal}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              flatListProps={{
                bounces: false,
                ItemSeparatorComponent: () => {
                  return <View style={styles.separator()} />;
                },
              }}
              onChange={item => {
                setProtectionVal(item.value);
                setIsFocus(false);
              }}
              renderItem={item => {
                return (
                  <View style={styles.dropDownMain()}>
                    <Text
                      text={item.value}
                      style={styles.InsideLabelFieldText()}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.headingFirst()}>
          <View style={styles.headOne()}>
            <IcOtherIcon6 height={25} width={25} fill={color.turquoiseNew} />
            <Text style={styles.headingTxt()}>Toothbrushing</Text>
          </View>
          <View style={styles.itemListMain()}>
            <Text style={styles.itemListTxt(1)}>Toothbrushing</Text>
            <InputBox
              placeholder={'Ex: 2 Times a Day'}
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              placeholderTextColor={color.grayTxt}
              isShadow={true}
              value={toothbrushing}
              onChange={e => {
                setToothbrushing(e.value);
              }}
            />
          </View>
        </View>

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
