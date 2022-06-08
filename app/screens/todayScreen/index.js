import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
  ToastAndroid,
} from 'react-native';
// import moment from 'moment';
import {Text, FabMenu, Loader, Toast} from 'components';
import {size, color, IcFalse, IcTrue} from 'theme';
import {reminderListData, medicationReminder} from 'json';
import {useDispatch, useSelector} from 'react-redux';
import {getTipForDay} from 'redux-actions';
import * as styles from './styles';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDoubleBackPressExit} from 'utils';
// import LinearGradient from 'react-native-linear-gradient';
export const TodayScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [activeIndex, setActiveIndex] = useState([]);
  const [medicationData, setMedication] = useState(medicationReminder);
  const [medicationTrue, setMedicationTrue] = useState(medicationReminder);
  const [medicationUpcoming, setMedicationUpcoming] = useState('');
  const [reminderList, setReminderList] = useState(reminderListData);
  const [tipsForTheDay, setTipsForTheDay] = useState('');
  const [loading, setLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  useDoubleBackPressExit();

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
  const onGetTipForDay = async () => {
    const getTipForDayResponse = await dispatch(getTipForDay());
    console.log('getTipForDayResponse ==>', getTipForDayResponse);
    const res = getTipForDayResponse;
    if (res.status) {
      console.log('getTipForDayResponse ==>', res.data.TipForDayData);
      setTipsForTheDay(res.data.TipForDayData);
      // setLoading(false);
      // toastMessage(res.message);
      setExtra(extra + 1);
    } else {
      // setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    let upcoming = medicationData.find(item => item.isDone === false);
    setMedicationUpcoming(upcoming.decryption);
    let tot = 0;
    medicationData.map(val => {
      if (val.status) {
        tot = tot + 1;
      }
    });
    setMedicationTrue(tot);
    onGetTipForDay();
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
      <Text style={styles.textHeaderName()} text={'Hi Ashish'} />
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
            {medicationData.map((item, index) => {
              return (
                <View
                  style={styles.row(medicationData.length > index + 1)}
                  key={index + 'medicationData'}>
                  {item.isDone ? (
                    item.status ? (
                      <IcTrue />
                    ) : (
                      <IcFalse />
                    )
                  ) : (
                    <View style={styles.upcomingCircle()}>
                      <View style={styles.insideUpcomingCircle()}></View>
                    </View>
                  )}
                  {medicationData.length > index + 1 && (
                    <View style={styles.lineStyle(item.isDone)} />
                  )}
                </View>
              );
            })}
          </View>
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
                <Text style={styles.medicineName()} text={item.ReminderName} />
                <Text style={styles.desTextStyle()} text={item.decryption} />
                <View style={styles.separator()} />
              </View>
            );
          })}
        </View>
        <View style={styles.medicationView()}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_appointment'}
            />
          </View>
          {reminderList.map((item, index) => {
            const isActive = activeIndex.includes(item.id);
            return (
              <View
                style={styles.medicationCard()}
                key={index + 'medicationData'}>
                <View style={styles.row()}>
                  <View style={styles.onlyRow()}>
                    <View style={styles.row()}>
                      <View style={styles.circleView()} />
                      <Text style={styles.textTime()} text={item.time} />
                    </View>
                    <View style={styles.row()}>
                      <View style={styles.circleDateView()} />
                      <Text style={styles.textTime()} text={item.date} />
                    </View>
                  </View>
                </View>
                <Text style={styles.medicineName()} text={item.doctor} />
                <Text style={styles.desTextStyle()} text={item.address} />
                <View style={styles.separator()} />
              </View>
            );
          })}
        </View>
        <View
          style={{
            backgroundColor: color.white,
            paddingHorizontal: size.moderateScale(15),
            paddingVertical: size.moderateScale(5),
            marginHorizontal: size.moderateScale(20),
            marginBottom: size.moderateScale(20),
            borderRadius: size.moderateScale(10),
          }}>
          <Text
            style={styles.medicineName()}
            tx={'today_screen.tips_for_the_day'}
          />
          <Text style={styles.tipsTxt()} text={tipsForTheDay} />
        </View>
      </ScrollView>
      <FabMenu
        addReminder={() => navigation.navigate('medicationReminderScreen')}
        addAppointment={() => navigation.navigate('appointmentReminderScreen')}
      />
    </SafeAreaView>
  );
};
