import React, {useState, useEffect} from 'react';
import {
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
import {Text, Button, MedicalItems} from 'components';
import {
  size,
  color,
  IcWeb,
  IcTick,
  IcPlus,
  IcSearch,
  IcMan,
  IcAppointment,
  IcJournal,
  IcHeartNew,
  IcPills,
  images,
  IcArrowNext,
  IcBack,
} from 'theme';
import {dose, MainProfileDetail, DWMYData, AddNavData} from 'json';
import * as styles from './styles';
import {LineChart} from 'react-native-chart-kit';
// import {IcPills} from '../../theme/image/svgIcons/IcPills';

// function* yLabel() {
//   yield* ['60', '70', '80', '90'];
// }

export const DemoSecond = () => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [doseValue, setDoseValue] = useState(null);
  const [isSelected, setSelected] = useState(0);
  const [isSelectedCard, setSelectedCard] = useState(0);
  const [extra, setExtra] = useState(0);
  const [dWMYData, setDWMYData] = useState(DWMYData);
  const [detailProfile, setDetailProfile] = useState(MainProfileDetail);
  const [counter, setCounter] = useState(30);
  const [selectedRange, setRange] = useState({});
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  const data = {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'Q'],
    datasets: [
      {
        data: [45, 28, 80, 99, 43, 66, 91, 60],
        // color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
        // strokeWidth: 2, // optional
      },
      {
        data: [60],
        withDots: false,
      },
      {
        data: [90],
        withDots: false,
      },
    ],
  };
  const minValue = 60;
  const maxValue = 90;
  function* yLabel() {
    yield* [minValue, 70, 80, maxValue];
  }
  const yLabelIterator = yLabel();
  const chartConfig = {
    backgroundGradientFrom: color.white,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: color.white,
    backgroundGradientToOpacity: 1,
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    formatYLabel: () => yLabelIterator.next().value,
    // barPercentage: 0,
    barRadius: 1,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };
  const itemSelect = index => {
    setSelected(index);
    setExtra(extra + 1);
  };
  const itemCardSelect = index => {
    setSelectedCard(index);
    setExtra(extra + 1);
  };

  return (
    <SafeAreaView style={styles.container()}>
      <ScrollView>
        <View
          style={{
            backgroundColor: color.lavender,
            margin: size.moderateScale(10),
          }}>
          <View style={{backgroundColor: color.white}}></View>
        </View>
        <Button
          buttonStyle={styles.btnAppointmentTime()}
          buttonText={styles.btnAppointmentTimeTxt()}
          name={'00 : ' + counter}
        />
        <Text>Countdown: {counter}</Text>
        {/* <View
          style={
            {
              // width: size.deviceWidth * 0.7,
              // paddingLeft: size.moderateScale(10),
            }
          }>
          <View style={styles.mainTimeContainer()}>
            <View style={styles.subTimeContainer()}>
              <View>
                <Text
                  text={'Thu, 06 Apr'}
                  style={styles.labelAppointmentDate()}
                />
                <Text
                  text={'3 Slots Available'}
                  style={styles.labelAppointmentSlots()}
                />
              </View>
              <Button
                buttonStyle={styles.btnAppointmentTime()}
                buttonText={styles.btnAppointmentTimeTxt()}
                name={'SEE ALL'}
              />
            </View>
            <View style={styles.subTimeContainer()}>
              <Text text={'09.00 Pm'} style={styles.labelAppointmentTime()} />
              <Text text={'12.00 Am'} style={styles.labelAppointmentTime()} />
              <Text text={'05.00 Pm'} style={styles.labelAppointmentTime()} />
            </View>
          </View>
        </View> */}

        {AddNavData.map((item, index) => {
          return (
            <Pressable
              onPress={() => itemCardSelect(index)}
              style={styles.addNavStyle(isSelectedCard, index)}
              key={index.toString()}>
              <Text
                text={item.value}
                style={styles.labelAddStyle(isSelectedCard, index)}
              />
              {/* <Text text={'>'} style={styles.labelAddStyle()} /> */}
              <IcBack
                fill={isSelectedCard === index ? color.white : color.blueBtn}
              />
            </Pressable>
          );
        })}

        <FlatList
          data={detailProfile}
          numColumns={2}
          renderItem={({item, index}) => (
            <MedicalItems
              onPress={() => {
                detailProfile[index].selectedCard = !item.selectedCard;
                setExtra(extra + 1);
              }}
              nameFirst={'5`7``ft'}
              nameSecond={'Height'}
              svgCardItems={
                <IcHeartNew
                  height={size.moderateScale(50)}
                  width={size.moderateScale(50)}
                  fill={color.lightBlue}
                />
              }
              isSelected={item.selectedCard}
            />
          )}
        />
        <View style={styles.FourCenter_view()}>
          {[...Array(4)].map((_, index) => {
            return (
              <View style={styles.OneCenter_view()}>
                <Text style={styles.FourCenter_txt()}></Text>
              </View>
            );
          })}
        </View>
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'landing_screen.get_started'}
          onPress={() => navigation.navigate('authStackNavigation')}
        />
        <View style={styles.mainProfileStyle()}>
          {detailProfile.map((item, index) => {
            return (
              <View style={styles.subProfileStyle()}>
                {item.svg}
                <Text text={item.value} style={styles.profileText()} />
              </View>
            );
          })}
        </View>
        <Dropdown
          data={dose}
          labelField="label"
          valueField="value"
          placeholder={'Dose'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(90)}
          containerStyle={styles.dropdownContainer()}
          value={doseValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setDoseValue(item.value);
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
        <View style={styles.mainDWMYStyle()}>
          {dWMYData.map((item, index) => {
            return (
              <Pressable onPress={() => itemSelect(index)}>
                <Text
                  style={styles.textdwmy(isSelected, index)}
                  text={item.value}
                />
              </Pressable>
            );
          })}
        </View>
        <View>
          <LineChart
            data={{
              labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'Q'],

              datasets: [
                {
                  data: [80, 60, 80, 99, 65, 66, 91, 60, 84], // dataset
                  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
                },
                {
                  data: [60], // min
                  withDots: false,
                },
                {
                  data: [100], // max
                  withDots: false,
                },
              ],
            }}
            width={size.deviceWidth * 1}
            height={220}
            formatYLabel={() => yLabelIterator.next().value}
            // fromZero={false}
            chartConfig={chartConfig}
            segments={3}
            withShadow={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
