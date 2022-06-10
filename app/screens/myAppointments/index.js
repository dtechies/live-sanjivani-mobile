import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  getAppointmentReminderProfile,
  editAppointmentReminderStatus,
} from 'redux-actions';

import {useDispatch} from 'react-redux';

import {
  Loader,
  Text,
  Screen,
  InputBox,
  Header,
  AppointmentCard,
} from 'components';
import {size, color, IcBtnPlus, SearchValNew} from 'theme';
import * as styles from './styles';

export const MyAppointments = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [appointmentReminderData, setAppointmentReminderData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute();

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const reminderList =
    filteredData.length > 0 ? filteredData : appointmentReminderData;

  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();

    let FilteredValue = appointmentReminderData.filter(item => {
      return item.doctor.doctor_name.toLowerCase().match(text);
    });
    FilteredValue.length == 0 && FilteredValue.push({value: 'null'});
    setFilteredData(FilteredValue);
  };

  const getAppointmentReminderData = async () => {
    // setLoading(true);

    const getAppointmentReminderProfileResponse = await dispatch(
      getAppointmentReminderProfile(),
    );
    // console.log(
    //   'getAppointmentReminderProfile',
    //   getAppointmentReminderProfileResponse,
    // );
    const res = getAppointmentReminderProfileResponse;
    // console.log('res', res);
    if (res.status) {
      let data = res.data.AppointmentReminderProfileData;
      // console.log('data', data);
      const trueFirst = data.sort((x, y) => {
        let demo = x.status === y.status;
        return demo ? 0 : x.status ? -1 : 1;
      });
      setAppointmentReminderData(trueFirst);
      setFilteredData(res.data.AppointmentReminderProfileData);
      // setLoading(false);
      setExtra(extra + 1);
      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const updateReminderStatus = async val => {
    setLoading(true);

    const editMedicineReminderStatusBody = {
      id: val?.id,
      status: val.status == true ? false : true,
    };
    const editMedicineReminderStatusResponse = await dispatch(
      editAppointmentReminderStatus(editMedicineReminderStatusBody),
    );
    const res = editMedicineReminderStatusResponse.payload;
    if (res.status) {
      setLoading(false);
      getAppointmentReminderData();
    } else {
      setLoading(false);
      setExtra(extra + 1);
    }
  };

  useEffect(() => {
    getAppointmentReminderData();
  }, []);

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
        title={'myAppointments_screen.title'}
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
            placeholder={'Search Appointment'}
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
              navigation.navigate('appointmentReminderScreen');
            }}>
            <IcBtnPlus
              height={size.moderateScale(65)}
              width={size.moderateScale(65)}
            />
          </Pressable>
        </View>

        <View style={styles.headingMain()}>
          <Text
            tx={'myAppointments_screen.appointmentList'}
            style={styles.ViewSubTitle()}
          />
        </View>
      </View>
      <Screen style={styles.screenContainer()}>
        {filteredData.length == 0 && (
          <Text style={styles.noData()}>No Records Found...</Text>
        )}
        <View style={styles.bottomStyle()}>
          {reminderList.map((val, i) => {
            if (val.value == 'null') {
              return <Text style={styles.noData()}>No Records Found...</Text>;
            }
            return (
              <AppointmentCard
                data={val}
                onWholeCardPress={() => console.log('Click...')}
                time={val.user_selected_time}
                date={val.date}
                address={val.doctor.doctor_address}
                doctor={val.doctor.doctor_name}
                onTogglePress={() => {
                  updateReminderStatus(val);
                }}
              />
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
