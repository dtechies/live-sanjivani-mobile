import React, {useState} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Text, Screen, TitleBox, InputBox, Button} from 'components';
import {useNavigation} from '@react-navigation/native';
import {IcSearch, color, size, IcCalendar, IcDown} from 'theme';
import * as styles from './styles';
export const AppointmentReminderScreen = () => {
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [searchVal, setSearchVal] = useState('');
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [selectedDate, setSelectedDate] = useState('Date');
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState('Time');
  const getCurrentDate = givenDate => {
    // console.log('A date has been picked: ', givenDate);
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    setSelectedDate(newDate);
    setShowDate(false);
  };
  const getCurrentTime = givenTime => {
    // console.log('A Time picked: ', givenTime);
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newDate = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    setSelectedTime(newDate);
    setShowTime(false);
  };
  return (
    <SafeAreaView style={styles.full()}>
      <Screen style={styles.container()} showsVerticalScrollIndicator={false}>
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
              setSearchVal(value);
              setExtra(extra + 1);
              // console.log('Search', value);
            }}
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
          <InputBox
            titleTx={'appointment_reminder_screen.address_one'}
            titleStyle={styles.textInputTitle()}
            placeholder={'Address 1'}
            value={addressOne}
            onChangeText={value => {
              setAddressOne(value);
              setExtra(extra + 1);
              // console.log('Address 1', value);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          <InputBox
            titleTx={'appointment_reminder_screen.address_two'}
            titleStyle={styles.textInputTitle()}
            placeholder={'Address 2'}
            value={addressTwo}
            onChangeText={value => {
              setAddressTwo(value);
              setExtra(extra + 1);
              // console.log('Address 2', value);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          <InputBox
            titleTx={'appointment_reminder_screen.city'}
            titleStyle={styles.textInputTitle()}
            placeholder={'City'}
            value={city}
            onChangeText={value => {
              setCity(value);
              setExtra(extra + 1);
              // console.log('City', value);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          <InputBox
            titleTx={'appointment_reminder_screen.state'}
            titleStyle={styles.textInputTitle()}
            placeholder={'State'}
            value={state}
            onChangeText={value => {
              setState(value);
              setExtra(extra + 1);
              // console.log('State', value);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
          <InputBox
            titleTx={'appointment_reminder_screen.pinCode'}
            titleStyle={styles.textInputTitle()}
            placeholder={'PinCode'}
            value={pinCode}
            maxLength={6}
            keyboardType={'number-pad'}
            onChangeText={value => {
              setPinCode(value);
              setExtra(extra + 1);
              // console.log('PinCode', value);
            }}
            inputStyle={[styles.labelFieldText()]}
            mainContainerStyle={styles.inputMainContainer()}
          />
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
          <View>
            <Button
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
