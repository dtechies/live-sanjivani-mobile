import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Screen, Header} from 'components';
import {serviceListData, DWMYData} from 'json';
import {size, color, images} from 'theme';
import * as styles from './styles';
import {LineChart} from 'react-native-chart-kit';

export const ProgressDetailScreen = props => {
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [sharingData, setSharingData] = useState({});
  const [dWMYData, setDWMYData] = useState(DWMYData);
  const [isSelected, setSelected] = useState(0);
  const dayList = [
    '6:AM',
    '8:AM',
    '10:AM',
    '12:PM',
    '2:PM',
    '4:PM',
    '6:PM',
    '8:PM',
    '10:PM',
    '12:AM',
    '2:AM',
    '4:AM',
  ];
  const dayData = [
    '62',
    '56',
    '88',
    '99',
    '70',
    '65',
    '80',
    '85',
    '79',
    '81',
    '85',
    '89',
  ];
  const weekList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekData = ['85', '68', '77', '80', '75', '65', '79'];
  const yearList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nav',
    'Dec',
  ];
  const yearData = [
    '68',
    '87',
    '74',
    '81',
    '83',
    '87',
    '85',
    '77',
    '73',
    '67',
    '77',
    '67',
  ];
  const monthList = [
    '1-3',
    '4-6',
    '7-9',
    '10-12',
    '13-15',
    '16-18',
    '19-21',
    '22-24',
    '25-27',
    '28-30',
    '31',
  ];
  const monthData = [
    '80',
    '70',
    '65',
    '80',
    '91',
    '84',
    '74',
    '76',
    '88',
    '89',
    '85',
  ];
  // const [Icon, setIcon] = useState();
  const [isSelectedList, setSelectedList] = useState(dayList);
  const [isSelectedData, setSelectedData] = useState(dayData);
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
    barRadius: 1,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };
  const itemSelect = index => {
    setSelected(index);
    if (index == 0) {
      setSelectedData(dayData);
      setSelectedList(dayList);
    } else if (index == 1) {
      setSelectedData(weekData);
      setSelectedList(weekList);
    } else if (index == 2) {
      setSelectedData(monthData);
      setSelectedList(monthList);
    } else if (index == 3) {
      setSelectedData(yearData);
      setSelectedList(yearList);
    }
    setExtra(extra + 1);
  };
  // const Icon = props.route.params && props.route.params.selectedItems.svg;
  useEffect(() => {
    if (props.route.params) {
      // console.log('props.route.params ==> ', props.route.params);
      setSharingData(props.route.params?.selectedItems);
      setExtra(extra + 1);
    }
  }, []);
  const imageUrl = props.route.params
    ? {uri: props.route.params.selectedItems.icon}
    : images.icLogo;
  // useEffect(() => {
  //   console.log('sharingData', sharingData);
  //   // Icon = sharingData.svg;
  //   console.log('Icon', Icon);
  // }, [sharingData]);

  return (
    <SafeAreaView style={styles.container()}>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        text={sharingData.name + ' Details'}
      />
      <Screen withScroll style={styles.screenView()}>
        {/* {sharingData.map((item, index) => { */}
        {/* console.log('itemmmm', item);
          return ( */}
        <View>
          <Text style={styles.textItemToShare()} text={sharingData.name} />
          <Text
            style={styles.textItemToShareDetail()}
            text={sharingData.name}
          />
          <View style={styles.row()}>
            {/* <Icon height={20} width={20} fill={color.black} /> */}

            <Image
              resizeMode="cover"
              source={imageUrl}
              style={styles.centerLeftView()}
            />
            <Text style={styles.textItemValue()} text={sharingData.value} />
            <Text style={styles.textItemUnit()} text={sharingData.unit} />
          </View>
        </View>
        {/* ); */}
        {/* })} */}
        <Text style={styles.textItemDate()} text={'May 2020 - March 2022'} />
        <View style={styles.mainDWMYStyle()}>
          {dWMYData.map((item, index) => {
            return (
              <Pressable
                key={index.toString()}
                onPress={() => itemSelect(index)}>
                <Text
                  style={styles.textdwmy(isSelected, index)}
                  text={item.value}
                />
              </Pressable>
            );
          })}
        </View>
        <LineChart
          data={{
            labels: isSelectedList,
            datasets: [
              {
                data: isSelectedData,
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
          width={size.deviceWidth * 0.98}
          height={320}
          verticalLabelRotation={90}
          formatYLabel={() => yLabelIterator.next().value}
          // fromZero={false}
          chartConfig={chartConfig}
          segments={3}
          withShadow={false}
          style={{
            paddingRight: size.moderateScale(30),
            fontSize: 1,
            borderRadius: size.moderateScale(10),
          }}
        />
      </Screen>
    </SafeAreaView>
  );
};
