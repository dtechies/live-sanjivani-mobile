import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, SafeAreaView, Keyboard} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Text,
  Screen,
  TitleBox,
  InputBox,
  Button,
  Loader,
  Toast,
} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAppointmentReminder,
  getAppointmentReminderAllDetail,
} from 'redux-actions';

import {IcSearch, color, size, IcCalendar, IcDown} from 'theme';
import * as styles from './styles';

export const AppointmentReminderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();

  const [loading, setLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const [searchVal, setSearchVal] = useState('');
  const [searchValErr, setSearchValErr] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [specialityErr, setSpecialityErr] = useState('');
  const [addressOne, setAddressOne] = useState('');
  const [addressOneErr, setAddressOneErr] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [addressTwoErr, setAddressTwoErr] = useState('');
  const [city, setCity] = useState('');
  const [cityErr, setCityErr] = useState('');
  const [state, setState] = useState('');
  const [stateErr, setStateErr] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [pinCodeErr, setPinCodeErr] = useState('');
  const [selectedDate, setSelectedDate] = useState('Date');
  const [selectedDateErr, setSelectedDateErr] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState('Time');
  const [selectedTimeErr, setSelectedTimeErr] = useState('');
  const [doctorData, setDoctorData] = useState([]);
  const [doctorFilteredName, setDoctorFilteredName] = useState([]);
  const [specialityFilteredName, setSpecialityFilteredName] = useState([]);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const getCurrentDate = givenDate => {
    // console.log('A date has been picked: ', givenDate);
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    setSelectedDate(newDate);
    setSelectedDateErr('');
    setShowDate(false);
  };
  const getCurrentTime = givenTime => {
    // console.log('A Time picked: ', givenTime);
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newDate = givenTime.toTimeString().slice(0, 5);
    // let newDate = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    setSelectedTime(newDate);
    setSelectedTimeErr('');
    setShowTime(false);
  };
  const {token, userId} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
    userId: state.userDataReducer.userDataResponse.userData.id,
  }));

  const getAppointmentReminderAllList = async () => {
    setLoading(true);
    const getAppointmentReminderAllHeader = {
      token: token,
    };
    const getAppointmentReminderAllResponse = await dispatch(
      getAppointmentReminderAllDetail(getAppointmentReminderAllHeader),
    );
    // console.log(
    //   'getAppointmentReminderAll Header ==>',
    //   getAppointmentReminderAllHeader,
    // );
    const res = getAppointmentReminderAllResponse.payload;
    // console.log('getAppointmentReminderAll res ==>', res);
    if (res.status) {
      // console.log('getAppointmentReminderAll Data  ==>', res.data.DoctorsData);
      setDoctorData(res.data.DoctorsData);
      toastMessage(res.message);
      setLoading(false);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const validation = () => {
    if (searchVal === '') {
      setSearchValErr('Enter doctor name');
    }
    if (speciality === '') {
      setSpecialityErr('Enter speciality');
    }
    if (addressOne === '') {
      setAddressOneErr('Enter address one');
    }
    if (addressTwo === '') {
      setAddressTwoErr('Enter address two');
    }
    if (city === '') {
      setCityErr('Enter city');
    }
    if (state === '') {
      setStateErr('Select state');
    }
    if (pinCode.length !== 6) {
      setPinCodeErr('Pincode must have 6 digit');
    }
    if (selectedDate === 'Date') {
      setSelectedDateErr('Select date');
    }
    if (selectedTime === 'Time') {
      setSelectedTimeErr('Select time');
    }
  };

  const OnAddReminder = async () => {
    setLoading(true);

    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('doctor_name', searchVal);
    formData.append('speciality', speciality);
    formData.append('date', selectedDate);
    formData.append('address1', addressOne);
    formData.append('address2', addressTwo);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('pincode', pinCode);
    formData.append('user_selected_time', selectedTime);

    const addAppointmentReminderHeader = {
      token: token,
    };
    // console.log('addMedicineReminder form data ==>', formData);
    // console.log('addMedicineReminderHeader ==>', addAppointmentReminderHeader);

    const addMedicineReminderResponse = await dispatch(
      addAppointmentReminder(formData, addAppointmentReminderHeader),
    );
    const res = addMedicineReminderResponse.payload;
    setLoading(false);
    // console.log('addMedicineReminder Res ==>', res);

    if (res.status) {
      // console.log('addMedicineReminder List ==>', res);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('Today', {
          screen: 'todayScreen',
          params: {appointment: true},
        });
      }, 150);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    getAppointmentReminderAllList();
  }, []);

  const onDoctorNameType = val => {
    setSearchVal(val);
    let text = val.toLowerCase() || val.toUpperCase();
    // console.log('onDoctorNameType ==>', val);
    if (val.length >= 2) {
      let filteredName = doctorData.filter(item => {
        return item.doctor_name.toLowerCase().match(text);
      });
      setDoctorFilteredName(filteredName);
    }
  };
  const onSpecialityNameType = val => {
    setSpeciality(val);
    let text = val.toLowerCase() || val.toUpperCase();
    // console.log('Speciality type ==>', val);
    if (val.length >= 2) {
      let filteredName = doctorData.filter(item => {
        return item.speciality.toLowerCase().match(text);
      });
      setSpecialityFilteredName(filteredName);
    }
  };
  return (
    <SafeAreaView style={styles.full()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Screen
        keyboardShouldPersistTaps={'handled'}
        style={styles.container()}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <TitleBox
          titleContainerStyle={styles.titleStyle()}
          titleTx={'appointment_reminder_screen.title'}
        />
        <View style={styles.mainView()}>
          <InputBox
            titleTx={'appointment_reminder_screen.name_of_doctor'}
            titleStyle={styles.textInputTitle()}
            placeholder={'Search'}
            value={searchVal}
            onChangeText={value => {
              onDoctorNameType(value);
              setSearchValErr('');
              setExtra(extra + 1);
            }}
            onSubmitEditing={Keyboard.dismiss}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
            rightIcon={
              <IcSearch
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.purple}
              />
            }
          />
          {searchValErr ? (
            <Text style={styles.textValidation()} text={searchValErr} />
          ) : null}
          {doctorFilteredName.length > 0 &&
            doctorFilteredName.map((item, index) => {
              return (
                <Pressable
                  style={styles.searchedValueList()}
                  onPress={() => {
                    setSearchVal(item.doctor_name);
                    setSpeciality(item.speciality);
                    setSearchValErr('');
                    setSpecialityErr('');
                    setDoctorFilteredName([]);
                    Keyboard.dismiss;
                  }}>
                  <Text>{item.doctor_name}</Text>
                </Pressable>
              );
            })}
          <InputBox
            titleTx={'appointment_reminder_screen.speciality'}
            titleStyle={styles.textInputTitle()}
            placeholder={'Speciality'}
            value={speciality}
            onChangeText={value => {
              onSpecialityNameType(value);
              setSpecialityErr('');
              setExtra(extra + 1);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          {specialityErr ? (
            <Text style={styles.textValidation()} text={specialityErr} />
          ) : null}
          {specialityFilteredName.length > 0 &&
            specialityFilteredName.map((item, index) => {
              return (
                <Pressable
                  style={styles.searchedValueList}
                  onPress={() => {
                    setSpeciality(item.speciality);
                    setSpecialityErr('');
                    setSpecialityFilteredName([]);
                    Keyboard.dismiss;
                  }}>
                  <Text>{item.speciality}</Text>
                </Pressable>
              );
            })}
          <InputBox
            titleTx={'appointment_reminder_screen.address_one'}
            titleStyle={styles.textInputTitle()}
            placeholder={'Address 1'}
            value={addressOne}
            onChangeText={value => {
              setAddressOne(value);
              setAddressOneErr('');
              setExtra(extra + 1);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          {addressOneErr ? (
            <Text style={styles.textValidation()} text={addressOneErr} />
          ) : null}
          <InputBox
            titleTx={'appointment_reminder_screen.address_two'}
            titleStyle={styles.textInputTitle()}
            placeholder={'Address 2'}
            value={addressTwo}
            onChangeText={value => {
              setAddressTwo(value);
              setAddressTwoErr('');
              setExtra(extra + 1);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          {addressTwoErr ? (
            <Text style={styles.textValidation()} text={addressTwoErr} />
          ) : null}
          <InputBox
            titleTx={'appointment_reminder_screen.city'}
            titleStyle={styles.textInputTitle()}
            placeholder={'City'}
            value={city}
            onChangeText={value => {
              setCity(value);
              setCityErr('');
              setExtra(extra + 1);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          {cityErr ? (
            <Text style={styles.textValidation()} text={cityErr} />
          ) : null}
          <InputBox
            titleTx={'appointment_reminder_screen.state'}
            titleStyle={styles.textInputTitle()}
            placeholder={'State'}
            value={state}
            onChangeText={value => {
              setState(value);
              setStateErr('');
              setExtra(extra + 1);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          {stateErr ? (
            <Text style={styles.textValidation()} text={stateErr} />
          ) : null}
          <InputBox
            titleTx={'appointment_reminder_screen.pinCode'}
            titleStyle={styles.textInputTitle()}
            placeholder={'PinCode'}
            value={pinCode}
            maxLength={6}
            keyboardType={'number-pad'}
            onChangeText={value => {
              setPinCode(value);
              setPinCodeErr('');
              setExtra(extra + 1);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          {pinCodeErr ? (
            <Text style={styles.textValidation()} text={pinCodeErr} />
          ) : null}
          <Text
            style={styles.textDateTitle()}
            tx={'appointment_reminder_screen.date'}
          />
          <Pressable
            style={styles.dateMainView()}
            onPress={() => {
              setShowDate(true);
            }}>
            <IcCalendar
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.purple}
            />
            <Text style={styles.textDate()}>{selectedDate}</Text>
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
            <Text style={styles.textValidation()} text={selectedDateErr} />
          ) : null}
          <Text
            style={styles.textDateTitle()}
            tx={'appointment_reminder_screen.time'}
          />
          <Pressable
            style={styles.timeMainView()}
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{selectedTime} </Text>
            {showTime && (
              <DateTimePickerModal
                isVisible={showTime}
                mode="time"
                locale="en_GB"
                onConfirm={val => getCurrentTime(val)}
                onCancel={() => {
                  setShowTime(false);
                  setExtra(extra + 1);
                }}
              />
            )}
            <IcDown
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.cornBlue}
            />
          </Pressable>
          {selectedTimeErr ? (
            <Text style={styles.textValidation()} text={selectedTimeErr} />
          ) : null}
          <View>
            <Button
              onPress={() => {
                searchVal &&
                speciality &&
                addressOne &&
                addressTwo &&
                city &&
                state &&
                pinCode &&
                selectedDate &&
                selectedTime
                  ? OnAddReminder()
                  : validation();
              }}
              nameTx="appointment_reminder_screen.add"
              buttonStyle={styles.addButtonStyle()}
              buttonText={styles.textAddButton()}
            />
          </View>
        </View>
      </Screen>
    </SafeAreaView>
  );
};
