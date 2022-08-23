import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import {addMedicineReminder} from 'redux-actions';
import {Loader, Text, Button, Header, Toast, Screen} from 'components';
import {ConvertToUTC} from 'utils';

import * as styles from './styles';

export const CheckMedicationReminderScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isDateErr, seIsDateErr] = useState('');
  const [UTCdate, setUTCdate] = useState('');
  const [extra, setExtra] = useState(0);
  const [data, setData] = useState();
  const [medicineDetail, setMedicineDetail] = useState();
  const param = props.route.params;
  const {userId} = useSelector(state => ({
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

  const getRemindFreqCurrentDate = givenDate => {
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let monthChar = moment()
      .set('month', month - 1)
      .format('MMMM');
    let newDate = day + ' ' + monthChar + ' ' + year;
    seIsDateErr('');
    setShowDate(false);
  };

  const onSave = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('reminder_name', data?.reminder_name);
    formData.append('doctor_name', data?.referredBy);
    data.imageUpload.path !== undefined &&
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
    formData.append('utc_date_and_time', UTCdate);

    // console.log('addMedicineReminder form data ==>', formData);
    const addMedicineReminderResponse = await dispatch(
      addMedicineReminder(formData),
    );
    const res = addMedicineReminderResponse.payload;
    setLoading(false);
    // console.log('addMedicineReminder List ==>', res);
    if (res.status) {
      setData('');
      setDays(daysJson);
      setLoading(false);
      navigation.pop();
      navigation.replace('viewMedicationScreen');
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    let newDate = ConvertToUTC(
      param.frequency_value + ' ' + param.user_selected_time,
    );
    // console.log('props fromViewMedication', newDate);
    setUTCdate(newDate);
    if (param && param.fromViewMedication) {
      setData(props.route.params.reminderData);
    } else if (param) {
      // console.log('props', props.route.params);
      setData(props.route.params);
      let obj = props.route.params.medicineFilteredValue;
      let isEmptyObject = Object.keys(obj).length > 0;
      isEmptyObject && setMedicineDetail(obj);
    }
    let reminderFrequencyValue = param.reminderData
      ? param.reminderData?.reminder_frequency
      : param?.reminder_frequency;

    //Once A Week
    if (reminderFrequencyValue == 'Once A Week') {
      let dateValue = param.reminderData
        ? param.reminderData?.frequency_value
        : param?.frequency_value;
      let dayNumber = moment(dateValue, 'YYYY-MM-DD').isoWeekday();
      let newValue = days.map((i, k) => {
        if (k == dayNumber) {
          i.isSelected = true;
        }
        return i;
      });
      setDays(newValue);
    }
    //everyday
    if (reminderFrequencyValue == 'EveryDay') {
      let newValue = days.map(i => {
        i.isSelected = true;
        return i;
      });
      setDays(newValue);
    }
    //alternateDay
    if (reminderFrequencyValue == 'Alternate Day') {
      let dateValue = param.reminderData
        ? param.reminderData?.frequency_value
        : param?.frequency_value;
      let givenDate = moment(dateValue, 'YYYY-MM-DD');
      let day = givenDate.day();
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
    if (reminderFrequencyValue == 'Fixed Date') {
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

      <Screen style={styles.screenContainer()}>
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
              <View style={styles.cardShort()}>
                <Text style={styles.startDateTitleTxt()} text={'Frequency'} />
                <Text style={styles.startDateTxt()}>
                  {data?.reminder_frequency}
                </Text>
              </View>
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

        {medicineDetail && (
          <View style={styles.medicineDescriptionCard()}>
            <View style={styles.rowView()}>
              <Text
                style={styles.title()}
                tx={'CheckMedicationReminderScreen.name'}
              />
              <Text text={':'} />
              <Text numberOfLines={2} style={styles.description()}>
                {medicineDetail.name ? medicineDetail.name : '---'}
              </Text>
            </View>
            <View style={styles.rowView()}>
              <Text
                style={styles.title()}
                tx={'CheckMedicationReminderScreen.benefit'}
              />
              <Text text={':'} />
              <Text numberOfLines={2} style={styles.description()}>
                {medicineDetail.benefits ? medicineDetail.benefits : '---'}
              </Text>
            </View>
            <View style={styles.rowView()}>
              <Text
                style={styles.title()}
                tx={'CheckMedicationReminderScreen.safetyAdvice'}
              />
              <Text text={':'} />
              <Text numberOfLines={2} style={styles.description()}>
                {medicineDetail.safety_advice
                  ? medicineDetail.safety_advice
                  : '---'}
              </Text>
            </View>
            <View style={styles.rowView()}>
              <Text
                style={styles.title()}
                tx={'CheckMedicationReminderScreen.sideEffects'}
              />
              <Text text={':'} />
              <Text numberOfLines={2} style={styles.description()}>
                {medicineDetail.side_effects
                  ? medicineDetail.side_effects
                  : '---'}
              </Text>
            </View>
            <View style={styles.rowView()}>
              <Text
                style={styles.title()}
                tx={'CheckMedicationReminderScreen.use'}
              />
              <Text text={':'} />
              <Text numberOfLines={2} style={styles.description()}>
                {medicineDetail.use ? medicineDetail.use : '---'}
              </Text>
            </View>
          </View>
        )}
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
      </Screen>
    </SafeAreaView>
  );
};
