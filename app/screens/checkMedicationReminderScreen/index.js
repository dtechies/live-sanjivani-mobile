import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {addMedicineReminder} from 'redux-actions';
import {Loader, Text, Button, Header, Toast} from 'components';
import {size, color, images, IcDot, IcBtnPlus} from 'theme';
import * as styles from './styles';
import {dose, MainProfileDetail, DWMYData, AddNavData} from 'json';

export const CheckMedicationReminderScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isDateErr, seIsDateErr] = useState('');
  const [extra, setExtra] = useState(0);
  const [data, setData] = useState();

  const {token, userId} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
    userId: state.userDataReducer.userDataResponse.userData.id,
  }));

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const daysJson = [
    {date: 'M', isSelected: false},
    {date: 'T', isSelected: false},
    {date: 'W', isSelected: false},
    {date: 'T', isSelected: false},
    {date: 'F', isSelected: false},
    {date: 'S', isSelected: false},
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
    formData.append('user_id', userId.toString());
    formData.append('doctor_name', data?.referredBy);
    formData.append('speciality', 'Physician');
    formData.append('medicine_image', {
      uri: data?.imageUpload.path,
      name: data?.imageUpload.imageName,
      type: data?.imageUpload.mime,
    });
    formData.append('medicine_name', data?.medicineName);
    formData.append('medicine_form', data?.medicineForm);
    formData.append('dose', data.dose);
    formData.append('medicine_strength', data.strength);
    formData.append('medicine_strength_unit', data?.strengthUnit);
    formData.append('reminder_frequency', data?.remindFrequencyValue);
    formData.append('frequency_value', data?.remindFreqDate);
    formData.append('reminder_time', data?.remindTimeValue);
    formData.append('user_selected_time', data?.remindTime);
    formData.append('pills_remaining', data?.pills);

    console.log('addMedicineReminder form data ==>', formData);
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
      navigation.navigate('todayScreen');
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    if (props.route.params) {
      // console.log('props', props.route.params);
      setData(props.route.params);
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
            <Text style={styles.labelFieldText()} text={'Glycomet 0.5 MG'} />
            <Text
              style={styles.titleDetails()}
              text={'1 Tablet Everyday before meal.'}
            />
          </View>
          <View style={styles.cardSecond()}>
            <View style={styles.dayMain()}>
              {days.map((val, i) => {
                return (
                  <Pressable
                    onPress={() => {
                      days[i].isSelected = !val.isSelected;
                      setExtra(extra + 1);
                    }}
                    style={styles.singleDay(val.isSelected)}
                    key={i.toString()}>
                    <Text style={styles.singleDayTxt(val.isSelected)}>
                      {val.date}
                    </Text>
                  </Pressable>
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
                <Text style={styles.startDateTitleTxt()} text={'Start Date'} />
                <Text style={styles.startDateTxt()} text={remindFreqDate} />
              </Pressable>
              <View style={styles.cardShort(1)}>
                <Text style={styles.startDateTitleTxt()} text={'Inventory'} />
                <Text
                  style={styles.startDateTxt()}
                  text={'10/30 Tablets Left'}
                />
              </View>

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

      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'ViewMedicationScreen.save'}
        onPress={() => {
          validation();
        }}
      />
    </SafeAreaView>
  );
};
