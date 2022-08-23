import React, {useState, useEffect, useRef} from 'react';
import {View, Pressable, SafeAreaView, Animated, Easing} from 'react-native';
import {Text, Screen, Header, Toast, Loader} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getAllCategoryAndSubCategory} from 'redux-actions';
import {color, IcBack, size} from 'theme';
import {AddNavData} from 'json';
import * as styles from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AddCard = ({item, index, OnPressOptions}) => {
  // let translate = new Animated.Value(0);
  const animatedTranslate = 0;
  //   const animatedTranslate = translate.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [-size.deviceWidth, 0],
  // });
  // let duration = index > 10 ? (index + 1) * 50 : (index + 1) * 200;
  // useEffect(() => {
  //   Animated.timing(translate, {
  //     toValue: 1,
  //     duration: duration,
  //     easing: Easing.elastic(1),
  //     useNativeDriver: true, // To make use of native driver for performance
  //   }).start();
  // }, [translate]);

  return (
    <AnimatedPressable
      onPress={() => OnPressOptions(item, index)}
      style={styles.addNavStyle(item.selected, animatedTranslate)}
      key={index + 'addMedication'}
      // disabled={!showSub}
    >
      <Text tx={item.nameTx} style={styles.labelAddStyle(item.selected)} />
      <IcBack fill={item.selected ? color.white : color.blueTx} />
    </AnimatedPressable>
  );
};

export const AddScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setData(
        AddNavData.map(i => {
          i.selected = false;
          return i;
        }),
      );
    });
    return unsubscribe;
  }, [navigation]);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const clearData = () => {
    data.map((val, i) => {
      data[i].selected = false;
    });
    data.map((val, i) => {
      data[i].selected = false;
    });
    setExtra(extra + 1);
  };
  const getAllCategoryAndSubCategoryData = async () => {
    // setLoading(true);
    const allCatResponse = await dispatch(getAllCategoryAndSubCategory());
    const res = allCatResponse;
    // console.log('allCatResponse_NEW ==>', res);
    if (res != undefined) {
      if (res.status) {
        setAllCategory(res.data.categoryData);
        // setData(
        //   AddNavData.map(i => {
        //     i.selected = false;
        //     return i;
        //   }),
        // );
        setLoading(false);
        setExtra(extra + 1);
      }
    } else {
      setLoading(false);
      setAllCategory([]);
      // toastMessage('Invalid data...');
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getAllCategoryAndSubCategoryData();
    });
  }, [navigation]);

  const OnPressOptions = (item, index) => {
    if (
      item.name == 'Vitals' ||
      item.name == 'Measurements' ||
      item.name == 'Activity'
    ) {
      if (allCategory.length != 0) {
        allCategory.map(val => {
          if (val.name == item.name) {
            navigation.navigate('addDetailsScreen', {
              title: item.name,
              sub: val.subcategories,
            });
          }
        });
      } else {
        navigation.navigate('addDetailsScreen', {
          title: item.name,
          sub: [],
        });
      }
    }
    if (item.name == 'Care Giver') {
      navigation.navigate('careGiver');
    }
    if (item.name == 'Appointments') {
      navigation.navigate('appointmentReminderScreen');
    }
    if (item.name == 'Symptoms Check') {
      navigation.navigate('symptomsScreen');
    }
    if (item.name == 'Medical Journal') {
      navigation.navigate('medicalJournalScreen');
    }
    if (item.name == 'Others') {
      if (allCategory.length != 0) {
        allCategory.map(val => {
          if (val.name == item.name) {
            navigation.navigate('otherScreen', {
              title: item.name,
              sub: val.subcategories,
            });
          }
        });
      } else {
        navigation.navigate('otherScreen', {
          title: item.name,
          sub: [],
        });
      }
    }
    if (item.name == 'Medications') {
      navigation.navigate('medicationReminderScreen');
    }
    data[index].selected = !item.selected;
    setExtra(extra + 1);
  };

  return (
    <SafeAreaView style={styles.full()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header isColor={true} isHeading={true} title={'add_screen.title'} />
      <Screen withScroll style={styles.container()}>
        <View style={styles.mainCard()}>
          {data &&
            data.map((item, index) => {
              return (
                <AddCard
                  key={index + 'data'}
                  item={item}
                  index={index}
                  OnPressOptions={() => OnPressOptions(item, index)}
                />
              );
            })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
