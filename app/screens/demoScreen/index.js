import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {
  Loader,
  Text,
  ChangeLanguage,
  Button,
  TitleBox,
  InputBox,
  IcHome,
} from 'components';
import {size, color, IcWeb, IcTick, IcPlus, IcSearch} from 'theme';

import * as styles from './styles';

const data = {
  labels: ['Swim', 'Bike', 'Run'],
  data: [0.4, 0.6, 0.8],
};
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export const DemoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container()}>
      {/* <Loader /> */}
      <Pressable onPress={() => navigation.navigate('landingScreen')}>
        <Text style={styles.textLanding()} tx={'demo_screen.go_to_landing'} />
      </Pressable>
      <Text style={styles.textLanding()}>Bezier Line Chart</Text>
      <View>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [50, 60, 15, 30, 80, 90],
              },
            ],
          }}
          // data={{
          //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          //   datasets: [
          //     {
          //       data: [20, 45, 28, 80, 99, 43],
          //       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          //       strokeWidth: 2, // optional
          //     },
          //   ],
          // }}
          width={size.deviceWidth} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="o"
          // withScrollableDot={true}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            // color: (opacity = 1) => `rgba(255, 255, 240, ${opacity})`,
            color: (opacity = 1) => `rgba(79, 174, 83,${opacity})`,
            labelColor: (opacity = 1) => `rgba(54, 116, 242, ${opacity})`,
            style: {
              borderRadius: 50,
              marginRight: 50,
            },
            propsForDots: {
              r: '5',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            // borderRadius: 16,
          }}
        />
      </View>

      <ProgressChart
        data={data}
        width={size.deviceWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <InputBox
      // title={'Title'}
      // titleStyle={styles.text()}
      // onRightIconPress={() => alert('hello')}
      // leftIcon={<Text style={{color: 'red'}}>+91</Text>}
      // rightIcon={
      //   <IcHome
      //     height={size.moderateScale(20)}
      //     width={size.moderateScale(20)}
      //     fill={color.darkGrey}
      //   />
      // }
      />
      {/* <ChangeLanguage textStyle={{color: color.black}} />
      <Button leftIcon={<IcPlus />} name={'submit'} />
      <TitleBox name={'BHAVYA'} /> */}
    </View>
  );
};
