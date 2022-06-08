import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {addMedicineReminder} from 'redux-actions';
import {Loader, Text, Button, Header, Toast} from 'components';

import * as styles from './styles';

export const CheckMedicationReminderScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isDateErr, seIsDateErr] = useState('');
  const [extra, setExtra] = useState(0);
  const [data, setData] = useState();
  const param = props.route.params;
  const {token, userId} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
    userId: state.userDataReducer.userDataResponse.userData.id,
  }));

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const daysJson = [
    {date: 'S', isSelected: false},
    {date: 'M', isSelected: false},
    {date: 'T', isSelected: false},
    {date: 'W', isSelected: false},
    {date: 'T', isSelected: false},
    {date: 'F', isSelected: false},
    {date: 'S', isSelected: false},
  ];
  const [days, setDays] = useState(daysJson);
  const [showDate, setShowDate] = useState(false);
  const [remindFreqDate, setRemindFreqDate] = useState('');

  const getRemindFreqCurrentDate = givenDate => {
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let monthChar = moment()
      .set('month', month - 1)
      .format('MMMM');
    let newDate = day + ' ' + monthChar + ' ' + year;
    setRemindFreqDate(newDate);
    seIsDateErr('');
    setShowDate(false);
  };
  const validation = () => {
    if (remindFreqDate === null || remindFreqDate === '') {
      seIsDateErr('Please select Date...');
    } else {
      onSave();
    }
  };
  const onSave = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('reminder_name', data?.reminder_name);
    formData.append('doctor_name', data?.referredBy);
    formData.append('medicine_image', {
      uri: data?.imageUpload.path,
      name: data?.imageUpload.imageName,
      type: data?.imageUpload.mime,
    });
    formData.append('medicine_name', data?.medicine_name);
    formData.append('medicine_form', data?.medicine_form);
    formData.append('dose', data.dose);
    formData.append('medicine_strength', data.medicine_strength);
    formData.append('medicine_strength_unit', data?.medicine_strength_unit);
    formData.append('reminder_frequency', data?.reminder_frequency);
    formData.append('frequency_value', data?.frequency_value);
    formData.append('reminder_time', data?.reminder_time);
    formData.append('user_selected_time', data?.user_selected_time);
    formData.append('pills_remaining', data?.pills_remaining);

    // console.log('addMedicineReminder form data ==>', formData);
    // return;
    const addMedicineReminderResponse = await dispatch(
      addMedicineReminder(formData),
    );
    setLoading(false);
    const res = addMedicineReminderResponse.payload;
    // console.log('addMedicineReminder Res ==>', res);

    if (res.status) {
      // console.log('addMedicineReminder List ==>', res);
      toastMessage(res.message);
      navigation.navigate('viewMedicationScreen');
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    if (param && param.fromViewMedication) {
      // console.log('props fromViewMedication', props.route.params.reminderData);
      setData(props.route.params.reminderData);
    } else if (param) {
      // console.log('props', props.route.params);
      setData(props.route.params);
    }
    //everyday
    let reminderFrequencyValue = param.reminderData
      ? param.reminderData?.reminder_frequency
      : param?.reminder_frequency;
    if (
      reminderFrequencyValue == 'EveryDay' ||
      reminderFrequencyValue == 'Everyday'
    ) {
      let newValue = days.map(i => {
        i.isSelected = true;
        return i;
      });
      setDays(newValue);
    }
    //alternateDay

    if (
      reminderFrequencyValue == 'Alternate Day' ||
      reminderFrequencyValue == 'Alternate day'
    ) {
      let dateValue = param.reminderData
        ? param.reminderData?.frequency_value
        : param?.frequency_value;
      let givenDate = moment(dateValue, 'YYYY-MM-DD');
      // let date = givenDate.format('D');
      let day = givenDate.day();
      // console.log('date ==>', date);
      // console.log('day ==>', day);
      // console.log('Alertnate daty name ==>', day);
      let newValue = days.map((i, k) => {
        if (day == k) {
          i.isSelected = true;
          day = day + 2;
        }
        return i;
      });
      // console.log('Days daty name ==>', newValue);
      setDays(newValue);
    }
    //fixed date
    if (
      reminderFrequencyValue == 'Fixed date' ||
      reminderFrequencyValue == 'Fixed Date'
    ) {
      let dateValue = param.reminderData
        ? param.reminderData?.frequency_value
        : param?.frequency_value;
      let date = moment(dateValue, 'YYYY-MM-DD');
      let dayName = date.day();
      let newValue = days.map((i, k) => {
        if (k == dayName) {
          i.isSelected = true;
        }
        return i;
      });
      setDays(newValue);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
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
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={true}
        isLogoCenter={false}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        title={'CheckMedicationReminderScreen.title'}
      />

      <View style={styles.screenContainer()}>
        <View style={styles.cardFirst()}>
          <View style={styles.backHalf()}>
            <Text style={styles.labelFieldText()}>
              {data?.medicine_name} {data?.medicine_strength}{' '}
              {data?.medicine_strength_unit}{' '}
            </Text>
            <Text style={styles.titleDetails()}>
              {' '}
              {data?.dose} {data?.medicine_form} {data?.reminder_time}
            </Text>
          </View>
          <View style={styles.cardSecond()}>
            <View style={styles.dayMain()}>
              {days.map((val, i) => {
                return (
                  <View
                    style={styles.singleDay(val.isSelected)}
                    key={i.toString()}>
                    <Text style={styles.singleDayTxt(val.isSelected)}>
                      {val.date}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.infoCard()}>
              <Pressable
                onPress={() => {
                  setShowDate(true);
                  setExtra(extra + 1);
                }}
                style={styles.cardShort()}>
                <Text style={styles.startDateTitleTxt()} text={'Frequency'} />
                <Text style={styles.startDateTxt()}>
                  {data?.reminder_frequency}
                </Text>
              </Pressable>
              {data?.medicine_form !== 'Drop' && (
                <View style={styles.cardShort(1)}>
                  <Text style={styles.startDateTitleTxt()} text={'Inventory'} />
                  <Text style={styles.startDateTxt()}>
                    {data?.pills_remaining} {data?.medicine_form} Left
                  </Text>
                </View>
              )}

              {showDate && (
                <DateTimePickerModal
                  isVisible={showDate}
                  mode="date"
                  onConfirm={val => getRemindFreqCurrentDate(val)}
                  onCancel={() => {
                    setShowDate(false);
                    setExtra(extra + 1);
                  }}
                />
              )}
            </View>
            {isDateErr ? (
              <Text style={styles.errorText()}>{isDateErr}</Text>
            ) : null}
          </View>
        </View>
      </View>

      {param.medicineFilteredValue &&
        param.medicineFilteredValue.length > 0 &&
        param.medicineFilteredValue.map((item, index) => {
          return (
            <View style={styles.medicineDescriptionCard()}>
              <View style={styles.rowView()}>
                <Text
                  style={styles.title()}
                  tx={'CheckMedicationReminderScreen.name'}
                />
                <Text text={':'} />
                <Text numberOfLines={2} style={styles.description()}>
                  {item.name}
                </Text>
              </View>
              <View style={styles.rowView()}>
                <Text
                  style={styles.title()}
                  tx={'CheckMedicationReminderScreen.benefit'}
                />
                <Text text={':'} />
                <Text numberOfLines={2} style={styles.description()}>
                  {item.benefits}
                </Text>
              </View>
              <View style={styles.rowView()}>
                <Text
                  style={styles.title()}
                  tx={'CheckMedicationReminderScreen.safetyAdvice'}
                />
                <Text text={':'} />
                <Text numberOfLines={2} style={styles.description()}>
                  {item.safety_advice}
                </Text>
              </View>
              <View style={styles.rowView()}>
                <Text
                  style={styles.title()}
                  tx={'CheckMedicationReminderScreen.sideEffects'}
                />
                <Text text={':'} />
                <Text numberOfLines={2} style={styles.description()}>
                  {item.side_effects}
                </Text>
              </View>
              <View style={styles.rowView()}>
                <Text
                  style={styles.title()}
                  tx={'CheckMedicationReminderScreen.use'}
                />
                <Text text={':'} />
                <Text numberOfLines={2} style={styles.description()}>
                  {item.use}
                </Text>
              </View>
            </View>
          );
        })}
      {param.fromViewMedication ? null : (
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'ViewMedicationScreen.save'}
          onPress={() => {
            onSave();
          }}
        />
      )}
    </SafeAreaView>
  );
};
