import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';

import {Text} from 'components';
import {size, color, IcBtnPlus, IcFalse, IcTrue} from 'theme';
import {reminderListData, medicationReminder} from 'json';
import * as styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const TodayScreen = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [medicationData, setMedication] = useState(medicationReminder);
  const [medicationTrue, setMedicationTrue] = useState(medicationReminder);
  const [medicationUpcoming, setMedicationUpcoming] = useState('');
  const [reminderList, setReminderList] = useState(reminderListData);
  const navigation = useNavigation();
  const [exitApp, setExitApp] = useState(0);

  const route = useRoute();
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000);

    if (exitApp === 0) {
      setExitApp(exitApp + 1);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => route.name === 'todayScreen' && backHandler.remove();
  }, [exitApp]);

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
  }, []);
  return (
    <SafeAreaView style={styles.container()}>
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
                <View style={styles.row(medicationData.length > index + 1)}>
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
          <Text style={styles.tipsTxt()} text={'Drink water'} />
        </View>
      </ScrollView>

      <Pressable
        style={styles.circleBtnView()}
        onPress={() => {
          navigation.navigate('viewMedicationScreen');
        }}>
        <IcBtnPlus
          height={size.moderateScale(69)}
          width={size.moderateScale(69)}
        />
      </Pressable>
    </SafeAreaView>
  );
};
