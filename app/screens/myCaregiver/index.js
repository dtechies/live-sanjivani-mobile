import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GetCareGiverListAction, DeleteCareGiverAction} from 'redux-actions';

import {useDispatch} from 'react-redux';

import {
  Loader,
  Text,
  Screen,
  InputBox,
  Header,
  CareGiverCard,
} from 'components';
import {size, color, IcBtnPlus, SearchValNew} from 'theme';
import * as styles from './styles';

export const MyCareGiver = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [careGiverList, setCareGiverList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const toastMessage = msg => {
    console.log('SU0', msg);
    toastRef.current.show(msg);
  };

  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();

    let FilteredValue = careGiverList.filter(item => {
      return (
        item.first_name.toLowerCase().includes(text) ||
        item.nick_name.toLowerCase().includes(text)
      );
    });
    FilteredValue.length == 0 && FilteredValue.push({value: 'null'});
    setFilteredData(FilteredValue);
  };

  const getCaregiverData = async () => {
    setLoading(true);

    const getAppointmentReminderProfileResponse = await dispatch(
      GetCareGiverListAction(),
    );
    let res = {status: false, message: 'Connection Error...!'};
    if (getAppointmentReminderProfileResponse) {
      res = getAppointmentReminderProfileResponse;
    }
    if (res.status) {
      let data = res.data;
      setCareGiverList(data);
      setFilteredData(data);
      setLoading(false);
      setExtra(extra + 1);
      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const DeleteData = async val => {
    setLoading(true);

    const editMedicineReminderStatusBody = {
      id: val?.id,
    };
    const editMedicineReminderStatusResponse = await dispatch(
      DeleteCareGiverAction(editMedicineReminderStatusBody),
    );
    let res = {status: false, message: 'Connection Error...!'};
    if (editMedicineReminderStatusResponse) {
      res = editMedicineReminderStatusResponse.payload;
    }
    if (res.status) {
      setFilteredData(filteredData.filter(i => i.id != val.id));
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCaregiverData();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container()}>
      {loading && <Loader />}
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
        title={'myCareGiver_screen.title'}
      />
      <View style={styles.screenContainer()}>
        <View style={styles.searchBarRowView()}>
          <InputBox
            value={searchText}
            onChangeText={val => {
              onSearch(val);
            }}
            inputStyle={styles.buttonNew()}
            leftIcon={true}
            containerStyle={styles.mainInputStyle()}
            placeholder={'Search Care Giver'}
            leftIconName={
              <SearchValNew
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
            }
          />
          <Pressable
            style={styles.shadow()}
            onPress={() => {
              navigation.navigate('careGiver');
            }}>
            <IcBtnPlus
              height={size.moderateScale(65)}
              width={size.moderateScale(65)}
            />
          </Pressable>
        </View>

        <View style={styles.headingMain()}>
          <Text
            tx={'myCareGiver_screen.careGiverList'}
            style={styles.ViewSubTitle()}
          />
        </View>
      </View>
      <Screen style={styles.screenContainer()}>
        {filteredData.length == 0 && (
          <Text style={styles.noData()}>No Records Found...</Text>
        )}
        <View style={styles.bottomStyle()}>
          {filteredData.map((val, i) => {
            if (val.value == 'null') {
              return <Text style={styles.noData()}>No Records Found...</Text>;
            }
            return (
              <View key={i + 'careGiver'}>
                <CareGiverCard
                  data={val}
                  onPress={() => {
                    DeleteData(val);
                  }}
                />
              </View>
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
