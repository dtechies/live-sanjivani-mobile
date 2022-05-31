import React, {useState, useEffect} from 'react';
import {SafeAreaView, Pressable, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Header,
} from 'components';
import {size, color, images, IcDot, IcBtnPlus} from 'theme';
import * as styles from './styles';
import {dose, MainProfileDetail, DWMYData, AddNavData} from 'json';

export const CheckMedicationReminderScreen = props => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [isDateErr, seIsDateErr] = useState('');
  const [extra, setExtra] = useState(0);
  useEffect(() => {
    if (props.route.params) {
      // console.log('props', props.route.params.name);
    }
  }, []);

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
    }
  };

  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
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
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        <View>
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
                  <Text
                    style={styles.startDateTitleTxt()}
                    text={'Start Date'}
                  />
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
      </Screen>
      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'ViewMedicationScreen.save'}
        onPress={() => {
          validation();
          console.log('save btn..');
        }}
      />
    </SafeAreaView>
  );
};
