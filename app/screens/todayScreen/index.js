import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';
import moment from 'moment';
import {Text, TitleBox, Screen, Header, ToggleSwitch} from 'components';
import {size, color, IcDelete, IcBtnPlus, images, IcFalse, IcTrue} from 'theme';
import {reminderListData, medicationReminder} from 'json';
import * as styles from './styles';
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const TodayScreen = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [medicationData, setMedication] = useState(medicationReminder);
  const [extra, setExtra] = useState(0);
  const [currentTime, setCurrentTime] = useState(new moment().format('hh:mm'));
  const [currentAmTime, setCurrentAmTime] = useState(new moment().format('A'));
  const navigation = useNavigation();
  const [exitApp, setExitApp] = useState(0);

  const route = useRoute();

  const onEditMedicineReminderStatusPress = async index => {
    medicationData[index].status = !medicationData[index].status;
    setExtra(extra + 1);
  };
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
  });
  useEffect(() => {
    let secTimer = setInterval(() => {
      setCurrentTime(new moment().format('hh:mm'));
      setCurrentAmTime(new moment().format('A'));
      setExtra(extra + 1);
    }, 1000);
    return () => clearInterval(secTimer);
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
      <Header
        isColor={true}
        isHeading={true}
        isBlue={false}
        title={'today_screen.medication_Reminder'}
      />
      <Text style={styles.textHeaderName()} text={'Hi Ashish'} />
      <Text style={styles.textLanding()} tx={'today_screen.keep_it_up!'} />
      <Text
        style={styles.textLanding()}
        tx={'today_screen.you_are_on_the_right_track'}
      />
      <ScrollView>
        <LinearGradient
          colors={[color.denim, color.steelBlue]}
          style={styles.circleTimeView()}>
          <View style={styles.circleSecondView()}>
            <View style={styles.circleThirdView()}>
              <Text style={styles.timeStyle()} text={currentTime} />
              <Text style={styles.timeAMStyle()} text={currentAmTime} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.progressView()}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_progress'}
            />
            <Text style={styles.textTodayProgress()} text={'2/3'} />
          </View>
          <View style={styles.rowImage()}>
            <IcTrue />
            <Image
              source={images.icPath}
              style={{width: size.moderateScale(128)}}
            />
            <IcTrue />
            <Image
              source={images.icPath}
              style={{width: size.moderateScale(128)}}
            />
            <IcFalse />
          </View>
          <Text
            style={styles.desTextStyle()}
            text={'1 Glycomet 0.5 MG Tablet, Everyday before meal.'}
          />
        </View>
        <View style={styles.medicationView()}>
          <View style={styles.row()}>
            <Text
              style={styles.textTodayProgress()}
              tx={'today_screen.today_medication'}
            />
            <Pressable
              style={styles.squadBtnView()}
              onPress={() => {
                console.log('add symptom');
              }}>
              <IcBtnPlus
                height={size.moderateScale(25)}
                width={size.moderateScale(25)}
              />
            </Pressable>
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
                      <Text style={styles.textTime()} text={item.date} />
                    </View>

                    <ToggleSwitch
                      isOn={item.status}
                      size={'small'}
                      onToggle={val => {
                        onEditMedicineReminderStatusPress(index);
                      }}
                    />
                  </View>
                </View>
                <Text style={styles.medicineName()} text={item.name} />
                <Text style={styles.desTextStyle()} text={item.dec} />
                <View style={styles.separator()} />
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Pressable
        style={styles.circleBtnView()}
        onPress={() => {
          console.log('hiii');
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
