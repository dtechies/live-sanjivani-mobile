import React, {useState, useRef} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {Text, Screen, TitleBox, InputBox, Button, Header} from 'components';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-modern-datepicker';
import {
  IcSearch,
  color,
  size,
  IcCalendar,
  IcDown,
  SearchValNew,
  IcCrossArrow,
} from 'theme';
import * as styles from './styles';
import {Portal} from 'react-native-portalize';
import {Modalize} from 'react-native-modalize';
export const AppointmentReminderScreen = animated => {
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [showTimeReminder, setShowTimeReminder] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new moment().format('YYYY/MM/DD'),
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
  const [doctorFilteredName, setDoctorFilteredName] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [speciality, setSpeciality] = useState('');
  const [specialityErr, setSpecialityErr] = useState('');
  const popUpRef = useRef();
  const onOpenPopUp = () => {
    // alert('hiiii');
    popUpRef.current?.open();
  };
  const onClosePopUp = () => {
    popUpRef.current?.close();
  };
  const getAppointmentTime = givenTime => {
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newDate = givenTime.toTimeString().slice(0, 5);
    setSelectedTime(newDate);
    setSelectedTimeErr('');
    setShowTime(false);
  };
  const getReminderTime = givenTime => {
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newDate = givenTime.toTimeString().slice(0, 5);
    setReminderTime(newDate);
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
    let text = val.toLowerCase() || val.toUpperCase();
    // console.log('onDoctorNameType ==>', val);
    if (val.length >= 2) {
      let filteredName = doctorData.filter(item => {
        return item.doctor_name.toLowerCase().match(text);
      });
      setDoctorFilteredName(filteredName);
    }
  };
  return (
    <SafeAreaView style={styles.full()}>
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
              // // selected={moment(new Date()).format('YYYY-MM-DD')}
              onSelectedChange={date => {
                setSelectedDate(date);
                setSelectedDateErr('');
                // setExtra(extra + 1);
              }}
              mode="calendar"
              minuteInterval={30}
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
                onConfirm={val => getAppointmentTime(val)}
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
                onConfirm={val => getReminderTime(val)}
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
            value={addressOne}
            onChangeText={value => {
              setAddressOne(value);
              setAddressOneErr('');
              setExtra(extra + 1);
            }}
            mainContainerStyle={styles.inputMain(1)}
            inputStyle={styles.inputTxt()}
            leftIcon={true}
            leftIconName={
              <SearchValNew
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
            }
            placeholder={'Address'}
            placeholderTextColor={color.black}
          />
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
                <IcCrossArrow width={13} height={13} fill={color.grayIcon} />
              </Pressable>

              <Text
                tx={'appointment_reminder_screen.appointmentConfirmed'}
                style={styles.txtConfirm()}
              />
              <Text
                tx={'appointment_reminder_screen.yourAppointmentWillBeginAt'}
                style={styles.txtBegin()}
              />
              <Text text={'On 6th May 2017'} style={styles.txtDate()} />
              <Text text={'9:00 PM'} style={styles.txtDate()} />
              <Text
                text={'Dr.Mital Gal - Dentist'}
                style={styles.txtDoctor()}
              />
              <Text
                text={'Shivaji Nagar,Pune 3 Km'}
                style={styles.txtBegin()}
              />
              <Button
                nameTx="appointment_reminder_screen.confirm"
                buttonStyle={styles.btnModel()}
                buttonText={styles.textAddButton()}
                onPress={() => navigation.goBack()}
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
            ? // selectedTime == 'Time' &&
              // reminderTime == 'Time'
              onOpenPopUp()
            : validation();
        }}
      />
    </SafeAreaView>
  );
};
