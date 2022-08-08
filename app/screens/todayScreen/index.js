import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, SafeAreaView, ScrollView, Animated, Easing} from 'react-native';
import moment from 'moment';
import {Text, FabMenu, Loader, Toast} from 'components';
import {color, IcFalse, IcTrue} from 'theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTipForDay,
  getAppointmentReminderProfile,
  getTodayMedicationList,
} from 'redux-actions';
import * as styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDoubleBackPressExit} from 'utils';
import {LocalizationContext} from '../../App';

export const TodayScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  let animatedValue = new Animated.Value(0);
  let animatedValue1 = new Animated.Value(0);
  let animatedValue2 = new Animated.Value(0);
  let animatedValue3 = new Animated.Value(0);
  const {setLocale} = useContext(LocalizationContext);
  const [medicationData, setMedication] = useState([]);
  const [medicationTrue, setMedicationTrue] = useState(0);
  const [medicationUpcoming, setMedicationUpcoming] = useState('');
  const [reminderList, setReminderList] = useState([]);
  const [tipsForTheDay, setTipsForTheDay] = useState('');
  const [loading, setLoading] = useState(false);
  const [isStartAnimation, startAnimation] = useState(false);
  const [extra, setExtra] = useState(0);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const [selectedDate, setSelectedDate] = useState(
    new moment().format('YYYY-MM-DD'),
  );
  useDoubleBackPressExit();

  const {userData} = useSelector(state => ({
    userData: state.userDataReducer.userDataResponse.userData,
  }));

  //Animated Values
  const animatedScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const animatedScale1 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const animatedScale2 = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const animatedScale3 = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  isStartAnimation &&
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 800,
      delay: 5,
      easing: Easing.elastic(1),
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  isStartAnimation &&
    Animated.timing(animatedValue1, {
      toValue: 1,
      duration: 1000,
      delay: 5,
      easing: Easing.elastic(1),
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  isStartAnimation &&
    Animated.timing(animatedValue2, {
      toValue: 1,
      duration: 1200,
      delay: 5,
      easing: Easing.elastic(1),
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  isStartAnimation &&
    Animated.timing(animatedValue3, {
      toValue: 1,
      duration: 1400,
      delay: 5,
      easing: Easing.elastic(1),
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  //Animated Values

  const onMedicineReminderData = async () => {
    setLoading(true);
    const getTodayMedicationResponse = await dispatch(getTodayMedicationList());
    const res = getTodayMedicationResponse;
    if (res != undefined) {
      if (res.status) {
        console.log('getTodayMedicationResponse ==>', res.data.MedicineData);

        let medicationList = res.data.MedicineData;
        const medicationListNew = medicationList.sort((a, b) => {
          return (
            new moment(a.user_selected_time, 'h:mm a').format('X') -
            new moment(b.user_selected_time, 'h:mm a').format('X')
          );
        });
        medicationListNew.map(val => {
          val.user_selected_time = new moment(val.user_selected_time, [
            'hh:mm a',
          ]).format('hh:mm A');
        });
        let upcoming = medicationListNew.find(item => item.is_done == '0');
        // console.log('upcoming ==> ', upcoming);
        if (upcoming != undefined) {
          setMedicationUpcoming(
            `${upcoming.dose} ${upcoming.reminder_name} ${upcoming.medicine_strength} ${upcoming.medicine_strength_unit} ${upcoming.medicine_form},${upcoming.reminder_frequency} ${upcoming.reminder_time}.`,
          );
        }
        let tot = 0;
        medicationListNew.map(val => {
          if (val.is_done != '0') {
            // || val.is_done != null
            tot = tot + 1;
          }
        });
        setMedicationTrue(tot);
        // console.log('medicationListNew ===> ', medicationListNew);
        setMedication(medicationListNew);
        // console.log('medicationListNew ==> ', medicationListNew);
        setLoading(false);
        // toastMessage(res.message);
        setExtra(extra + 1);
      } else {
        setLoading(false);
        // toastMessage(res.message);
      }
    } else {
      setLoading(false);
    }
    startAnimation(true);
  };

  const getAppointmentReminderData = async () => {
    // setLoading(true);
    const getAppointmentRmdResponse = await dispatch(
      getAppointmentReminderProfile(),
    );
    // console.log('getAppointmentReminderProfile', getAppointmentRmdResponse);
    if (getAppointmentRmdResponse) {
      if (getAppointmentRmdResponse.status) {
        // setLoading(false);
        // toastMessage(res.message);
        let reminderArray =
          getAppointmentRmdResponse.data.AppointmentReminderProfileData;

        reminderArray = reminderArray.filter(val => {
          return val.date == selectedDate;
        });
        // let demoArray = reminderListData;
        let reminderArrayNew = reminderArray.sort((a, b) => {
          return (
            new moment(a.user_selected_time, 'h:mm').format('X') -
            new moment(b.user_selected_time, 'h:mm').format('X')
          );
        });
        reminderArrayNew.map(val => {
          val.user_selected_time = new moment(val.user_selected_time, [
            'hh:mm',
          ]).format('hh:mm A');
          val.date = new moment(val.date, ['YYYY-MM-D']).format('DD-MM-YYYY');
        });
        reminderArrayNew = reminderArrayNew.filter(i => i.status);
        setReminderList(reminderArrayNew);
        setExtra(extra + 1);
      } else {
        // setLoading(false);
        // toastMessage(res.message);
      }
    }
  };

  const onGetTipForDay = async () => {
    const getTipForDayResponse = await dispatch(getTipForDay());
    const res = getTipForDayResponse;
    if (res != undefined) {
      if (res.status) {
        // console.log('getTipForDayResponse ==>', res.data.TipForDayData);
        setTipsForTheDay(res.data.value);
        // setLoading(false);
        // toastMessage(res.message);
        setExtra(extra + 1);
      } else {
        // setLoading(false);
        toastMessage(res.message);
      }
    }
  };

  useEffect(() => {
    if (userData) {
      if (userData.language == 'english') {
        setLocale('en');
      } else {
        setLocale('hn');
      }
    }
    navigation.addListener('focus', () => {
      onGetTipForDay();
      getAppointmentReminderData();
      onMedicineReminderData();
      setExtra(extra + 1);
      // AnimationStarting();
    });
  }, [navigation]);

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
      <Text
        style={styles.textHeaderName()}
        text={`Hi ${userData ? userData.first_name : ''}`}
      />
      <Text style={styles.textLanding()} tx={'today_screen.keep_it_up!'} />
      <Text
        style={styles.textLanding()}
        tx={'today_screen.you_are_on_the_right_track'}
      />
      <ScrollView contentContainerStyle={styles.scrollView()}>
        <Animated.View style={styles.progressView(animatedScale)}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_progress'}
            />
            <Text
              style={styles.textTodayProgress()}
              text={medicationTrue + '/' + medicationData.length}
            />
          </View>
          <View style={styles.rowImage()}>
            {medicationData.length != 0 &&
              medicationData.map((item, index) => {
                let timeStamp = moment(
                  item.user_selected_local_time,
                  'HH:mm:ss',
                ).unix();
                return (
                  <View
                    style={styles.row(medicationData.length > index + 1)}
                    key={index + 'medicationData'}>
                    {/* {console.log('item.status ==> ', item.status, item.id)} */}
                    {item.is_done != '0' && item.reminder_status == 'take' ? (
                      <IcTrue fill={color.trueIcon} />
                    ) : item.reminder_status == 'snooze' ? (
                      <IcTrue fill={color.starColor} />
                    ) : item.reminder_status == 'cancel' ? (
                      <IcFalse />
                    ) : timeStamp < Date.now() / 1000 ? (
                      <IcFalse />
                    ) : (
                      <View style={styles.upcomingCircle()}>
                        <View style={styles.insideUpcomingCircle()}></View>
                      </View>
                    )}
                    {medicationData.length > index + 1 && (
                      <View style={styles.lineStyle(item.is_done)} />
                    )}
                  </View>
                );
              })}
          </View>
          {medicationData.length == 0 && (
            <View>
              <Text
                style={styles.textError()}
                tx={'today_screen.noMedicationProgressRecords'}
              />
            </View>
          )}
          <Text style={styles.desTextStyle()} text={medicationUpcoming} />
        </Animated.View>
        <Animated.View style={styles.medicationView(animatedScale1)}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_medication'}
            />
          </View>
          {medicationData.map((item, index) => {
            return (
              <View
                style={styles.medicationCard()}
                key={index + 'medicationData'}>
                <View style={styles.row()}>
                  <View style={styles.onlyRow()}>
                    <View style={styles.row()}>
                      <View style={styles.circleView()} />
                      <Text
                        style={styles.textTime()}
                        text={
                          item.user_selected_local_time
                            ? moment(
                                item.user_selected_local_time,
                                'HH:mm:ss',
                              ).format('hh:mm A')
                            : ''
                        }
                      />
                    </View>
                  </View>
                </View>
                <Text style={styles.medicineName()} text={item.reminder_name} />
                <Text
                  style={styles.desTextStyle()}
                  text={`${item.dose} ${item.medicine_name} ${item.medicine_strength} ${item.medicine_strength_unit} ${item.medicine_form},${item.reminder_frequency} ${item.reminder_time}.`}
                />
                <View style={styles.separator()} />
              </View>
            );
          })}
          {medicationData.length == 0 && (
            <View>
              <Text
                style={styles.textError()}
                tx={'today_screen.noMedicationRecords'}
              />
            </View>
          )}
        </Animated.View>
        <Animated.View style={styles.medicationView(animatedScale2)}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_appointment'}
            />
          </View>
          {reminderList.length != 0 &&
            reminderList.map((item, index) => {
              return (
                <View
                  style={styles.medicationCard()}
                  key={index + 'medicationData'}>
                  <View style={styles.row()}>
                    <View style={styles.onlyRow()}>
                      <View style={styles.row()}>
                        <View style={styles.circleView()} />
                        <Text
                          style={styles.textTime()}
                          text={
                            item.appointment_time
                              ? moment(
                                  item.appointment_time,
                                  'HH:mm:ss',
                                ).format('hh:mm A')
                              : ''
                          }
                        />
                      </View>
                      <View style={styles.row()}>
                        <View style={styles.circleDateView()} />
                        <Text style={styles.textTime()} text={item.date} />
                      </View>
                    </View>
                  </View>
                  <Text
                    style={styles.medicineName()}
                    text={item.doctor.doctor_name}
                  />
                  <Text
                    style={styles.desTextStyle()}
                    text={item.doctor.doctor_address}
                  />
                  <View style={styles.separator()} />
                </View>
              );
            })}
          {reminderList.length == 0 && (
            <View>
              <Text
                style={styles.textError()}
                tx={'today_screen.noAppointmentRecords'}
              />
            </View>
          )}
        </Animated.View>
        <Animated.View style={styles.tipsMain(animatedScale3)}>
          <Text
            style={styles.medicineName()}
            tx={'today_screen.tips_for_the_day'}
          />
          <Text
            style={styles.tipsTxt(tipsForTheDay)}
            text={tipsForTheDay != '' ? tipsForTheDay : ''}
            tx={tipsForTheDay == '' ? 'today_screen.noTipsRecords' : ''}
          />
        </Animated.View>
      </ScrollView>
      {/* <ChangeLanguage /> */}
      <FabMenu
        addReminder={() => navigation.navigate('medicationReminderScreen')}
        addAppointment={() => navigation.navigate('appointmentReminderScreen')}
      />
    </SafeAreaView>
  );
};
