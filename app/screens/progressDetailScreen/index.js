import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Text, Screen, Header} from 'components';
import {serviceListData, DWMYData} from 'json';
import {size, color, images} from 'theme';
import * as styles from './styles';
import {LineChart} from 'react-native-chart-kit';
import {SvgUri, SvgXml} from 'react-native-svg';
import {GetSubCategoryGraphs} from 'redux-actions';
import moment from 'moment';

export const ProgressDetailScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [sharingData, setSharingData] = useState({});
  const [dWMYData, setDWMYData] = useState(DWMYData);
  const [isSelected, setSelected] = useState(0);
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
  // const [Icon, setIcon] = useState();
  const [isSelectedList, setSelectedList] = useState([]);
  const [isSelectedData, setSelectedData] = useState([]);
  const [weekDetails, setWeekDetails] = useState([]);
  const [dateDetails, setDateDetails] = useState([]);
  const [monthsDetails, setMonthsDetails] = useState([]);
  const [yearDetails, setYearDetails] = useState([]);
  const minValue = 0;
  const [maxValue, setMaxValue] = useState(300);
  const [yieldAr, setYieldAr] = useState([]);
  const [showChart, setShowChart] = useState(false);
  function* yLabel() {
    yield* yieldAr;
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
      let maxValueHere = Math.max(...dateDetails.map(i => i.data));
      setMaxValue(maxValueHere);
      let minValueHere = 0;
      let minValueHereAyy = [];
      minValueHereAyy.push(minValueHere);
      [...Array(3)].map(i => {
        minValueHere += maxValueHere / 3;
        minValueHereAyy.push(minValueHere.toFixed(1));
      });
      setYieldAr(minValueHereAyy);
      // console.log('res', maxValueHere / 3, minValueHereAyy);

      setSelectedList(dateDetails.map(i => i.time.split('-')[0]));
      setSelectedData(dateDetails.map(i => i.data));
    } else if (index == 1) {
      let maxValueHere = Math.max(...weekDetails.map(i => i.data));
      setMaxValue(maxValueHere);
      let minValueHere = 0;
      let minValueHereAyy = [];
      minValueHereAyy.push(minValueHere);
      [...Array(3)].map(i => {
        minValueHere += maxValueHere / 3;
        minValueHereAyy.push(minValueHere.toFixed(1));
      });
      setYieldAr(minValueHereAyy);
      // console.log('res', maxValueHere / 3, minValueHereAyy);

      setSelectedList(
        weekDetails.map(i => moment(i.date, 'YYYY-MM-DD').format('ddd')),
      );
      setSelectedData(weekDetails.map(i => i.data));
    } else if (index == 2) {
      let maxValueHere = Math.max(...monthsDetails.map(i => i.data));
      setMaxValue(maxValueHere);
      let minValueHere = 0;
      let minValueHereAyy = [];
      minValueHereAyy.push(minValueHere);
      [...Array(3)].map(i => {
        minValueHere += maxValueHere / 3;
        minValueHereAyy.push(minValueHere.toFixed(1));
      });
      setYieldAr(minValueHereAyy);
      // console.log('res', maxValueHere / 3, minValueHereAyy);

      setSelectedList(
        monthsDetails.map(
          i => `${i.date.split('-')[2]}-${i.date.split('-')[5]}`,
        ),
      );
      setSelectedData(monthsDetails.map(i => i.data));
    } else if (index == 3) {
      let maxValueHere = Math.max(...yearDetails.map(i => i.data));
      setMaxValue(maxValueHere);
      let minValueHere = 0;
      let minValueHereAyy = [];
      minValueHereAyy.push(minValueHere);
      [...Array(3)].map(i => {
        minValueHere += maxValueHere / 3;
        minValueHereAyy.push(minValueHere.toFixed(1));
      });
      setYieldAr(minValueHereAyy);
      // console.log('res', maxValueHere / 3, minValueHereAyy);

      setSelectedList(yearList);
      setSelectedData(yearDetails.map(i => i.data));
    }
    setExtra(extra + 1);
  };
  // const Icon = props.route.params && props.route.params.selectedItems.svg;
  const GetSubCategoryGraph = async () => {
    const graphBody = {
      subcategory_id: props.route.params.selectedItems.id,
    };
    const subCatGraphRes = await dispatch(GetSubCategoryGraphs(graphBody));
    // console.log('subCatGraphRes', subCatGraphRes);
    let res = subCatGraphRes.data;
    if (subCatGraphRes.status) {
      // console.log('res', res);
      setWeekDetails(res.WeeklyData);
      setDateDetails(res.DailyData);
      setMonthsDetails(res.MonthlyData);
      setYearDetails(res.YearlyData);

      // Math.max(...res.DailyData.map(i => i.data))
      let maxValueHere = Math.max(...res.DailyData.map(i => i.data));
      setMaxValue(maxValueHere);
      let minValueHere = 0;
      let minValueHereAyy = [];
      minValueHereAyy.push(minValueHere);
      [...Array(3)].map(i => {
        minValueHere += maxValueHere / 3;
        minValueHereAyy.push(minValueHere.toFixed(1));
      });
      setYieldAr(minValueHereAyy);
      setSelectedList(res.DailyData.map(i => i.time.split('-')[1]));
      setSelectedData(res.DailyData.map(i => i.data));
    }
  };
  useEffect(() => {
    if (props.route.params) {
      // console.log('props.route.params ==> ', props.route.params);
      setSharingData(props.route.params?.selectedItems);
      GetSubCategoryGraph();
      setShowChart(true);
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
        text={sharingData ? sharingData.name + ' Details' : ''}
      />
      <Screen withScroll style={styles.screenView()}>
        {/* {sharingData.map((item, index) => { */}
        {/* console.log('itemmmm', item);
          return ( */}
        {sharingData && (
          <View>
            <Text style={styles.textItemToShare()} text={sharingData.name} />
            <Text
              style={styles.textItemToShareDetail()}
              text={sharingData.name}
            />
            <View style={styles.row()}>
              <SvgUri
                height={size.moderateScale(35)}
                width={size.moderateScale(35)}
                // color={'red'}
                uri={sharingData.icon}
              />

              <Text style={styles.textItemValue()} text={sharingData.value} />
              <Text style={styles.textItemUnit()} text={sharingData.unit} />
            </View>
          </View>
        )}
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
        {showChart && (
          <LineChart
            data={{
              labels: isSelectedList,
              datasets: [
                {
                  data:
                    isSelectedData.length ==
                    isSelectedData.filter(i => i == null).length
                      ? []
                      : isSelectedData,
                  withDots: true,
                  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
                },
                {
                  data: [0], // min
                  withDots: false,
                },
                {
                  data: [maxValue], // max
                  withDots: false,
                },
              ],
            }}
            getDotColor={dataPoint => {
              if (dataPoint !== null) {
                return 'red';
              }
              // else {
              //   return 'green';
              // }
            }}
            width={size.deviceWidth * 0.98}
            height={size.moderateScale(320)}
            verticalLabelRotation={90}
            horizontalLabelRotation={-90}
            formatYLabel={() => yLabelIterator.next().value}
            // fromZero={false}
            chartConfig={chartConfig}
            segments={3}
            withShadow={false}
            style={{
              paddingRight: size.moderateScale(30),
              paddingLeft: size.moderateScale(2),
              fontSize: 1,
              borderRadius: size.moderateScale(10),
            }}
          />
        )}
      </Screen>
    </SafeAreaView>
  );
};
