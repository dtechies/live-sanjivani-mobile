import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import moment from 'moment';
import {Text, FabMenu, Loader, Toast} from 'components';
import {size, color, IcFalse, IcTrue} from 'theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTipForDay,
  getAppointmentReminderProfile,
  getTodayMedicationList,
} from 'redux-actions';
import * as styles from './styles';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDoubleBackPressExit} from 'utils';
// import LinearGradient from 'react-native-linear-gradient';
export const TodayScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [activeIndex, setActiveIndex] = useState([]);
  const [medicationData, setMedication] = useState([]);
  const [medicationTrue, setMedicationTrue] = useState(0);
  const [medicationUpcoming, setMedicationUpcoming] = useState('');
  const [reminderList, setReminderList] = useState([]);
  const [tipsForTheDay, setTipsForTheDay] = useState('');
  const [loading, setLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const [selectedDate, setSelectedDate] = useState(
    new moment().format('YYYY-MM-D'),
  );
  useDoubleBackPressExit();

  const {userData} = useSelector(state => ({
    userData: state.userDataReducer.userDataResponse.userData,
  }));

  // let currentCount = 0;
  // useFocusEffect(
  //   useCallback(() => {
  //     const backPressHandler = () => {
  //       if (currentCount < 1) {
  //         currentCount += 1;
  //         ToastAndroid.show(
  //           'Tap back again to exit the App',
  //           ToastAndroid.SHORT,
  //         );
  //         return true;
  //       } else {
  //         BackHandler.exitApp();
  //         // return true;
  //       }
  //       setTimeout(() => {
  //         currentCount = 0;
  //       }, 2000);
  //       return true;
  //     };

  //     BackHandler.addEventListener('hardwareBackPress', backPressHandler);

  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', backPressHandler);
  //   }, []),
  // );

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
        const reminderArrayNew = reminderArray.sort((a, b) => {
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

        // console.log('reminderArrayNew ==> ', reminderArrayNew);
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
        setTipsForTheDay(res.data.TipForDayData);
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
    onGetTipForDay();
    getAppointmentReminderData();
    onMedicineReminderData();
    setExtra(extra + 1);
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
      <Text
        style={styles.textHeaderName()}
        text={`Hi ${userData ? userData.first_name : ''}`}
      />
      <Text style={styles.textLanding()} tx={'today_screen.keep_it_up!'} />
      <Text
        style={styles.textLanding()}
        tx={'today_screen.you_are_on_the_right_track'}
      />
      <ScrollView>
        <View style={styles.progressView()}>
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
                text={'No Medication Progress Found.'}
              />
            </View>
          )}
          <Text style={styles.desTextStyle()} text={medicationUpcoming} />
        </View>
        <View style={styles.medicationView()}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_medication'}
            />
          </View>
          {medicationData.map((item, index) => {
            const isActive = activeIndex.includes(item.id);
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
                        text={item.user_selected_time}
                      />
                    </View>
                  </View>
                </View>
                <Text style={styles.medicineName()} text={item.reminder_name} />
                <Text
                  style={styles.desTextStyle()}
                  text={`${item.dose} ${item.reminder_name} ${item.medicine_strength} ${item.medicine_strength_unit} ${item.medicine_form},${item.reminder_frequency} ${item.reminder_time}.`}
                />
                <View style={styles.separator()} />
              </View>
            );
          })}
          {medicationData.length == 0 && (
            <View>
              <Text style={styles.textError()} text={'No Medication Found.'} />
            </View>
          )}
        </View>
        <View style={styles.medicationView()}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_appointment'}
            />
          </View>
          {reminderList.length != 0 &&
            reminderList.map((item, index) => {
              const isActive = activeIndex.includes(item.id);
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
                          text={item.user_selected_time}
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
              <Text style={styles.textError()} text={'No Appointment Found.'} />
            </View>
          )}
        </View>
        <View style={styles.tipsMain()}>
          <Text
            style={styles.medicineName()}
            tx={'today_screen.tips_for_the_day'}
          />
          <Text
            style={styles.tipsTxt(tipsForTheDay)}
            text={tipsForTheDay != '' ? tipsForTheDay : 'No Tips Found.'}
          />
        </View>
      </ScrollView>
      <FabMenu
        addReminder={() => navigation.navigate('medicationReminderScreen')}
        addAppointment={() => navigation.navigate('appointmentReminderScreen')}
      />
    </SafeAreaView>
  );
};
