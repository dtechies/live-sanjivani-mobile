import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Dropdown} from 'react-native-element-dropdown';
// import Dropdown from '../../components/Dropdown/src/components/Dropdown';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Loader, Text, Button, Screen, InputBox, Header} from 'components';
// import {
//   size,
//   color,
//   images,
//   IcHeartNew,
//   IcOtherIcon1,
//   IcOtherIcon2,
//   IcOtherIcon3,
//   IcOtherIcon4,
//   IcOtherIcon5,
//   IcOtherIcon6,
// } from 'theme';
import * as styles from './styles';
// import {menstruation, startOfCycle, protection} from 'json';

export const OtherScreen = props => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [extra, setExtra] = useState(0);

  const [title, setTitle] = useState('Others');
  const [subCategory, setSubCategory] = useState([]);

  // const [selDate, setSelDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDateErr, setSelectedDateErr] = useState('');
  const [showDate, setShowDate] = useState(false);
  // const [isFocus, setIsFocus] = useState(false);
  const [element, setElement] = useState('');
  const [elementErr, setElementErr] = useState('');
  // const [drink, setDrink] = useState('');
  // const [drinkErr, setDrinkErr] = useState('');
  const [reaction, setReaction] = useState('');
  const [reactionErr, setReactionErr] = useState('');
  const [severity, setSeverity] = useState('');
  const [severityErr, setSeverityErr] = useState('');
  // const [toothbrushing, setToothbrushing] = useState('');
  // const [toothbrushingErr, setToothbrushingErr] = useState('');
  // const [measurementDefault, setMeasurementDefault] = useState({
  //   label: 'No Flow',
  //   value: 'No Flow',
  // });
  // const [startOfCycleDefault, setStartOfCycleDefault] = useState({
  //   label: 'Yes',
  //   value: 'Yes',
  // });
  // const [protectionDefault, setProtectionDefault] = useState({
  //   label: 'Protection Used',
  //   value: 'Protection Used',
  // });

  useEffect(() => {
    if (props.route.params) {
      console.log('props.route.params ==> ', props.route.params);
      setTitle(props.route.params.title);
      setSubCategory(props.route.params.sub);
      setExtra(extra + 1);
    }
  }, []);

  const [doseValue, setDoseValue] = useState('');
  const [doseValueErr, setDoseValueErr] = useState('');
  // const [protectionVal, setProtectionVal] = useState(null);
  const [startOfCycleVal, setStartOfCycleVal] = useState('');
  const [startOfCycleValErr, setStartOfCycleValErr] = useState('');
  // const [save, setSave] = useState(true);
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
        {subCategory &&
          subCategory.map((value, i) => {
            return (
              <View
                style={styles.headingFirst(i == 0 ? 1 : 0)}
                key={i + 'subCategory'}>
                <View style={styles.headOne()}>
                  <Image source={value.icon} height={25} width={25} />
                  <Text style={styles.headingTxt()}>{value.name}</Text>
                </View>
                {/* <View style={styles.itemListMain()}>
                  <Text style={styles.itemListTxt(1)}>Toothbrushing</Text>
                  <InputBox
                    placeholder={'Ex: 2 Times a Day'}
                    inputStyle={styles.inputStyle()}
                    mainContainerStyle={styles.inputMainContainer()}
                    placeholderTextColor={color.grayTxt}
                    isShadow={true}
                    containerStyle={styles.containerStyle()}
                    value={toothbrushing}
                    onChangeText={e => {
                      setToothbrushing(e.value);
                    }}
                  />
                </View> */}
              </View>
            );
          })}
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
