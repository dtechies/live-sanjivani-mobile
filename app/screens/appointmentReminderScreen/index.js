import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch} from 'react-redux';
import {store} from '../../redux';
import moment from 'moment';
import {
  getAppointmentReminderAllDetail,
  addAppointmentReminder,
} from 'redux-actions';
import {
  Text,
  Screen,
  InputBox,
  Button,
  Header,
  Toast,
  Loader,
} from 'components';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-modern-datepicker';
import {IcAddress, color, size, SearchValNew, IcCrossArrow} from 'theme';
import * as styles from './styles';
import {GOOGLE_API_KEY} from 'config';
import {Portal} from 'react-native-portalize';
import {Modalize} from 'react-native-modalize';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
export const AppointmentReminderScreen = animated => {
  const dispatch = useDispatch();
  const toastRef = useRef();
  const placesAutocompleteRef = useRef();
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [showTimeReminder, setShowTimeReminder] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new moment().format('Do MMMM YYYY'),
  );
  const [selectedDateErr, setSelectedDateErr] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [searchValErr, setSearchValErr] = useState('');
  const [addressOne, setAddressOne] = useState('');
  const [addressOneErr, setAddressOneErr] = useState('');
  const [selectedTime, setSelectedTime] = useState('Time');
  const [selectedTimeErr, setSelectedTimeErr] = useState('');
  const [reminderTime, setReminderTime] = useState('Time');
  const [selectedTimeErrSecond, setSelectedTimeErrSecond] = useState('');
  const [userId, setUserId] = useState('');

  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const popUpRef = useRef();
  const [doctorFilteredName, setDoctorFilteredName] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const onOpenPopUp = () => {
    // alert('hiiii');
    popUpRef.current?.open();
  };

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const onClosePopUp = () => {
    popUpRef.current?.close();
  };
  const getAppointmentTime = givenTime => {
    var hours = givenTime.getHours();
    var m = givenTime.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var h = hours;
    if (h >= 12) {
      h = hours - 12;
    }
    if (h == 0) {
      h = 12;
    }
    m = m < 10 ? '0' + m : m;
    setSelectedTime(`${h}:${m} ${ampm}`);
    setSelectedTimeErr('');
    setShowTime(false);
  };
  const getReminderTime = givenTime => {
    var hours = givenTime.getHours();
    var m = givenTime.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var h = hours;
    if (h >= 12) {
      h = hours - 12;
    }
    if (h == 0) {
      h = 12;
    }
    m = m < 10 ? '0' + m : m;
    setReminderTime(`${h}:${m} ${ampm}`);
    setSelectedTimeErrSecond('');
    setShowTimeReminder(false);
  };

  const validation = () => {
    if (selectedDate === '') {
      setSelectedDateErr('Enter Appointment Date');
    }
    if (searchVal === '') {
      setSearchValErr('Enter doctor name');
    }
    if (addressOne === '') {
      setAddressOneErr('Enter address one');
    }
    if (selectedTime === 'Time') {
      setSelectedTimeErr('Select time');
    }
    if (reminderTime === 'Time') {
      setSelectedTimeErrSecond('Select time');
    }
  };
  const onDoctorNameType = val => {
    setSearchVal(val);
    let text = val.toLowerCase();
    let address = 'initial val...';
    // console.log('doctorData ==> ', doctorData);
    if (val.length >= 2) {
      let filteredName = doctorData.filter(item => {
        if (item.doctor_name.toLowerCase().match(text)) {
          address = 'item.doctor_address';
        }
        return item.doctor_name.toLowerCase().match(text);
      });

      // console.log('address ==> ', address);
      setDoctorFilteredName(filteredName);
      setAddressOne(address);
      setExtra(extra + 1);
    } else {
      setDoctorFilteredName([]);
    }
  };

  const onGetDoctorDetails = async () => {
    setLoading(true);
    const getOtpResponse = await dispatch(getAppointmentReminderAllDetail());
    let res = {status: false, message: 'Connection Error...!'};
    if (getOtpResponse) {
      res = getOtpResponse;
    }
    // console.log('getDoctorData res ==>', res);
    if (res.status) {
      setLoading(false);
      toastMessage(res.message);
      setDoctorData(res.data.DoctorsData);
      setExtra(extra + 1);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const addAppointmentData = async () => {
    setLoading(true);
    // console.log('dataId', dataId);
    let formData = new FormData();
    formData.append('doctor_name', searchVal);
    formData.append('date', selectedDate);
    formData.append('doctor_address', addressOne);
    formData.append('user_selected_time', selectedTime);
    formData.append('user_id', userId);
    formData.append('reminder_time', reminderTime);

    setExtra(extra + 1);
    // console.log('fevUserBody', fevUserBody);
    const SubCategoryResponse = await dispatch(
      addAppointmentReminder(formData),
    );
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    // console.log('addUserFavoriteData res RESSS==>', res);

    if (res.status) {
      setLoading(false);
      toastMessage(res.message);
      setExtra(extra + 1);
      onClosePopUp();
      navigation.goBack();
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    onGetDoctorDetails();
    setUserId(store.getState().userDataReducer.userDataResponse.userData.id);
  }, []);
  useEffect(() => {
    let currentDateValue = new Date();
    let day =
      currentDateValue.getDate() > 9
        ? currentDateValue.getDate()
        : `0${currentDateValue.getDate()}`;
    let month =
      currentDateValue.getMonth() + 1 > 9
        ? currentDateValue.getMonth() + 1
        : `0${currentDateValue.getMonth() + 1}`;
    let year = currentDateValue.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    setCurrentDate(newDate);
  }, []);

  const onChangeSearchText = e => {
    // console.log('SU AAVE CHE', e);
    setAddressOne(e);
  };

  const renderRow = row => {
    return (
      <View>
        <Text style={{color: 'black'}}>{row.description}</Text>
      </View>
    );
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
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'appointment_reminder_screen.title'}
      />
      <Screen style={styles.container()}>
        <View style={styles.mainView()}>
          <View style={styles.dataPickerStyle()}>
            <DatePicker
              options={{
                textHeaderColor: color.black,
                textDefaultColor: color.black,
                selectedTextColor: color.white,
                mainColor: color.turquoise,
                textSecondaryColor: color.turquoise,
                borderColor: color.black,
              }}
              current={moment(new Date()).format('YYYY-MM-DD')}
              selected={moment(new Date()).format('YYYY-MM-DD')}
              onSelectedChange={date => {
                setSelectedDate(moment(date).format('Do MMMM YYYY'));
                setSelectedDateErr('');
                // setExtra(extra + 1);
              }}
              mode="calendar"
              minuteInterval={30}
              minimumDate={currentDate}
              style={styles.calenderMain_view()}
            />
          </View>

          <View style={styles.dateMainView()}>
            <Text style={styles.textDate()}>{selectedDate}</Text>
          </View>
          {selectedDateErr ? (
            <Text style={styles.textValidation()} text={selectedDateErr} />
          ) : null}

          <Pressable
            style={styles.timeMainView()}
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text
              style={styles.textTimeNameDate()}
              tx={'appointment_reminder_screen.appointmentTime'}
            />
            <Text style={styles.textTimeDate()}>{selectedTime} </Text>
            {showTime && (
              <DateTimePickerModal
                isVisible={showTime}
                mode="time"
                locale="en_GB"
                onConfirm={val => {
                  if (
                    new Date(val).toDateString() === new Date().toDateString()
                  ) {
                    if (new Date(val).getTime() > new Date().getTime()) {
                      getAppointmentTime(val);
                    } else {
                      alert('Please Select Future Time');
                    }
                  } else {
                    getAppointmentTime(val);
                  }
                }}
                onCancel={() => {
                  setShowTime(false);
                  setExtra(extra + 1);
                }}
              />
            )}
          </Pressable>
          {selectedTimeErr ? (
            <Text style={styles.textValidation()} text={selectedTimeErr} />
          ) : null}
          <Pressable
            style={styles.timeMainView()}
            onPress={() => {
              setShowTimeReminder(!showTimeReminder);
            }}>
            <Text
              style={styles.textTimeNameDate()}
              tx={'appointment_reminder_screen.appointmentReminderTime'}
            />
            <Text style={styles.textTimeDate()}>{reminderTime} </Text>
            {showTimeReminder && (
              <DateTimePickerModal
                isVisible={showTimeReminder}
                mode="time"
                locale="en_GB"
                minimumDate={new Date()}
                onConfirm={val => {
                  if (
                    new Date(val).toDateString() === new Date().toDateString()
                  ) {
                    if (new Date(val).getTime() > new Date().getTime()) {
                      getReminderTime(val);
                    } else {
                      alert('Please Select Future Time');
                    }
                  } else {
                    getReminderTime(val);
                  }
                }}
                onCancel={() => {
                  setShowTimeReminder(false);
                  setExtra(extra + 1);
                }}
              />
            )}
          </Pressable>
          {selectedTimeErrSecond ? (
            <Text
              style={styles.textValidation()}
              text={selectedTimeErrSecond}
            />
          ) : null}
          <InputBox
            value={searchVal}
            onChangeText={value => {
              onDoctorNameType(value);
              setSearchValErr('');
              setExtra(extra + 1);
            }}
            mainContainerStyle={styles.inputMain()}
            inputStyle={styles.inputTxt()}
            leftIcon={true}
            leftIconName={
              <SearchValNew
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
            }
            placeholder={'Doctor/Practice...'}
            placeholderTextColor={color.black}
          />
          {searchValErr ? (
            <Text style={styles.textValidation()} text={searchValErr} />
          ) : null}
          {doctorFilteredName.length > 0 &&
            doctorFilteredName.map(item => {
              return (
                <Pressable
                  style={styles.searchedValueList()}
                  onPress={() => {
                    setSearchVal(item.doctor_name);
                    setAddressOne(item.doctor_address);
                    setExtra(extra + 1);
                    // setSpeciality(item.speciality);
                    setSearchValErr('');
                    setDoctorFilteredName([]);
                    // Keyboard.dismiss;
                  }}>
                  <Text style={styles.inputTxt()}>{item.doctor_name}</Text>
                </Pressable>
              );
            })}
          {/* <InputBox
            value={addressOne}
            onChangeText={value => {
              setAddressOne(value);
              setAddressOneErr('');
              setExtra(extra + 1);
            }}
            mainContainerStyle={styles.inputMain()}
            inputStyle={styles.inputTxt()}
            leftIcon={true}
            leftIconName={
              <IcAddress
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
            }
            placeholder={'Address'}
            placeholderTextColor={color.black}
          /> */}
          <View style={styles.searchPlacesTxt()}>
            <View
              style={{
                height: size.moderateScale(50),
                justifyContent: 'center',
              }}>
              <IcAddress
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
            </View>
            <GooglePlacesAutocomplete
              ref={placesAutocompleteRef}
              placeholder="search location"
              // minLength={2}
              query={GOOGLE_API_KEY}
              fetchDetails={true}
              returnKeyType={'search'}
              listViewDisplayed="auto"
              renderDescription={row => console.log(row)}
              predefinedPlacesAlwaysVisible={true}
              onPress={(data, details = null) => {
                console.log('details', details);
                placesAutocompleteRef.current.setAddressText(
                  details.formatted_address,
                );
                setAddressOne(details.formatted_address);
              }}
              onFail={error => console.error(error)}
              getDefaultValue={() => ''}
              textInputProps={{
                InputComp: InputBox,
                value: addressOne,
                onChangeText: onChangeSearchText,
                style: styles.searchPlacesInputTxt(),
                placeholder: 'Search address...',
                placeholderTextColor: color.dimGrey,
                errorStyle: {color: 'red'},
              }}
              styles={{
                textInput: {color: 'black'},
              }}
              renderRow={rowData => {
                const title = rowData.structured_formatting.main_text;
                const address = rowData.structured_formatting.secondary_text;
                return (
                  <View>
                    <Text style={styles.searchTitle()}>{title}</Text>
                    <Text style={styles.searchDis()}>{address}</Text>
                  </View>
                );
              }}
            />
          </View>

          {/* <GooglePlacesAutocomplete
            // ref={placesAutocompleteRef}
            placeholder="search location"
            minLength={2}
            autoFocus={true}
            query={{
              key: 'AIzaSyCYV4DmQ9JtvmR1jQ6rPSbLlPceRc_5qLI',
              language: 'en',
              types: 'geocode',
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            listViewDisplayed="auto"
            onFail={object => console.log(object)}
            renderDescription={row => renderRow(row)}
            onFail={error => console.error(error)}
            predefinedPlacesAlwaysVisible={true}
            onPress={(data, details = null) => {
              console.log('details :', details);
              placesAutocompleteRef.current.setAddressText(
                details.formatted_address,
              );
            }}
            getDefaultValue={() => ''}
            // styles={{
            //   textInputContainer: styles.searchPlacesTxt(),
            //   textInput: {color: 'black'},
            // }}
            // renderRightButton={() => <SearchBtn />}
            styles={styles.googleStyle()}
          /> */}

          {addressOneErr ? (
            <Text style={styles.textValidation()} text={addressOneErr} />
          ) : null}
        </View>
        <Portal>
          <Modalize
            panGestureEnabled={false}
            withHandle={false}
            closeOnOverlayTap={false}
            modalStyle={styles.modalStyle()}
            ref={popUpRef}
            tapGestureEnabled={false}
            scrollViewProps={{
              showsVerticalScrollIndicator: false,
              scrollEnabled: false,
            }}>
            <View style={styles.modelize_view()}>
              <Pressable
                onPress={() => onClosePopUp()}
                style={styles.crossSvgStyle()}>
                <IcCrossArrow width={18} height={18} fill={color.grayIcon} />
              </Pressable>

              <Text
                tx={'appointment_reminder_screen.appointmentConfirmed'}
                style={styles.txtConfirm()}
              />
              <Text
                tx={'appointment_reminder_screen.yourAppointmentWillBeginAt'}
                style={styles.txtBegin()}
              />
              <View style={styles.separator()}></View>
              <Text text={`On ${selectedDate}`} style={styles.txtDate()} />
              <Text text={`${selectedTime}`} style={styles.txtDate1()} />
              <Text text={`Dr. ${searchVal}`} style={styles.txtDoctor()} />
              <Text text={`${addressOne}`} style={styles.txtBegin()} />
              <Button
                nameTx="appointment_reminder_screen.confirm"
                buttonStyle={styles.btnModel()}
                buttonText={styles.textAddButton()}
                onPress={() => {
                  addAppointmentData();
                }}
              />
            </View>
          </Modalize>
        </Portal>
      </Screen>
      <Button
        nameTx="appointment_reminder_screen.bookNow"
        buttonStyle={styles.addButtonStyle()}
        buttonText={styles.textAddButton()}
        onPress={() => {
          selectedDate && searchVal && addressOne
            ? onOpenPopUp()
            : validation();
        }}
      />
    </SafeAreaView>
  );
};
