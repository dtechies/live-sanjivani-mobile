import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTipForDay,
  getMedicineReminderProfile,
  editMedicineReminderStatus,
  getAppointmentReminderProfile,
  editAppointmentReminderStatus,
} from 'redux-actions';

import {Text, TitleBox, Screen, ToggleSwitch, Loader, Toast} from 'components';
import {size, color, IcDelete, IcSafety} from 'theme';
import {reminderListData} from 'json';
import * as styles from './styles';

export const TodayScreen = props => {
  const modalRef = useRef();
  const toastRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [activeIndex, setActiveIndex] = useState([]);
  const [extra, setExtra] = useState(0);
  const [selectedItem, setSelectedItem] = useState([]);
  const [tipForDayData, setTipForDayData] = useState([]);
  const [medicineReminderData, setMedicineReminderData] = useState([]);
  const [appointmentReminderData, setAppointmentReminderData] = useState([]);
  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getTipForDayData = async () => {
    setLoading(true);
    const getTipForDayHeader = {
      token: token,
    };
    const getTipForDayResponse = await dispatch(
      getTipForDay(getTipForDayHeader),
    );
    // console.log('getTipForDayData header ==>', getTipForDayHeader);
    const res = getTipForDayResponse.payload;
    // console.log('getTipForDayData res ==>', res);
    if (res.status) {
      // console.log('getTipForDayData list ==>', res.data.TipForDayData);
      setTipForDayData(res.data.TipForDayData);
      toastMessage(res.message);
      setLoading(false);
      toastMessage(res.message);
    } else {
    }
  };
  const getMedicineReminderData = async () => {
    setLoading(true);
    const getMedicineReminderProfileHeader = {
      token: token,
    };
    const getMedicineReminderProfileResponse = await dispatch(
      getMedicineReminderProfile(getMedicineReminderProfileHeader),
    );
    // console.log(
    //   'getMedicineReminderData ==>',
    //   getMedicineReminderProfileHeader,
    // );
    const res = getMedicineReminderProfileResponse.payload;
    // console.log('getMedicineReminderData res ==>', res);
    setLoading(false);
    if (res.status) {
      // console.log(
      //   'getMedicineReminderData list ==>',
      //   res.data.MedicineReminderProfileData,
      // );
      setMedicineReminderData(res.data.MedicineReminderProfileData);
      setExtra(extra + 1);
      toastMessage(res.message);

      // setReminderOption(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const getAppointmentReminderData = async () => {
    setLoading(true);
    const getAppointmentReminderProfileHeader = {
      token: token,
    };
    const getAppointmentReminderProfileResponse = await dispatch(
      getAppointmentReminderProfile(getAppointmentReminderProfileHeader),
    );
    // console.log(
    //   'getAppointmentReminderData header ==>',
    //   getAppointmentReminderProfileHeader,
    // );
    const res = getAppointmentReminderProfileResponse.payload;
    // console.log('getAppointmentReminderData res ==>', res);
    setLoading(false);
    if (res.status) {
      // console.log(
      //   'getAppointmentReminderData list ==>',
      //   res.data.AppointmentReminderProfileData,
      // );
      setAppointmentReminderData(res.data.AppointmentReminderProfileData);
      setExtra(extra + 1);
      toastMessage(res.message);

      // setReminderOption(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const onEditMedicineReminderStatusPress = async data => {
    setLoading(true);
    // console.log('data ==>', data);
    const editMedicineReminderStatusBody = {
      id: data.id,
      status: !data.status,
    };
    const editMedicineReminderStatusHeader = {
      token: token,
    };
    // console.log(
    //   'editMedicineReminderStatusBody ==>',
    //   editMedicineReminderStatusBody,
    // );
    const editMedicineReminderStatusResponse = await dispatch(
      editMedicineReminderStatus(
        editMedicineReminderStatusBody,
        editMedicineReminderStatusHeader,
      ),
    );
    const res = editMedicineReminderStatusResponse.payload;
    setLoading(false);
    // console.log('editMedicineReminderStatusPress ==>', res);
    if (res.status) {
      // console.log('editMedicineReminderStatusPress list ==>', res);
      getMedicineReminderData();

      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const onEditAppointmentReminderStatusPress = async data => {
    setLoading(true);

    const editAppointmentReminderStatusBody = {
      id: data.id,
      status: !data.status,
    };
    const editAppointmentReminderStatusHeader = {
      token: token,
    };
    // console.log(
    //   'editAppointmentReminderStatusBody ==>',
    //   editAppointmentReminderStatusBody,
    // );
    const editAppointmentReminderStatusResponse = await dispatch(
      editAppointmentReminderStatus(
        editAppointmentReminderStatusBody,
        editAppointmentReminderStatusHeader,
      ),
    );
    const res = editAppointmentReminderStatusResponse.payload;
    setLoading(false);
    // console.log('onEditAppointmentReminderStatusPress ==>', res);
    if (res.status) {
      // console.log('onEditAppointmentReminderStatusPress response ==>', res);
      getAppointmentReminderData();

      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    if (props.route.params) {
      // console.log('props.route.params ==>', props.route.params);
      props.route.params.medication && getMedicineReminderData();
      props.route.params.appointment && getAppointmentReminderData();
    }
    // getAppointmentReminderData();
    // getMedicineReminderData();
    getTipForDayData();
  }, []);
  return (
    <SafeAreaView style={styles.container()}>
      {loading && <Loader />}
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      <TitleBox
        // titleTx={'today_screen.medication_reminder'}
        titleTx={
          props.route.params && props.route.params.appointment
            ? 'today_screen.appointment_reminder'
            : props.route.params && props.route.params.medication
            ? 'today_screen.medication_reminder'
            : 'today_screen.title'
        }
        titleContainerStyle={styles.titleTextContainer()}
      />
      <Screen bounces={false} style={styles.screenContainer()}>
        <SwipeListView
          // data={reminderListData}
          data={medicineReminderData && medicineReminderData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data, index) => {
            return (
              <View style={[styles.reminderView(data.item.status)]}>
                <Pressable
                  onPress={() => {
                    modalRef.current.open();
                    setSelectedItem(data.item);
                  }}>
                  <Text style={styles.reminderText()}>
                    {data.item.dose +
                      ' ' +
                      data.item.medicine_name +
                      ' ' +
                      data.item.medicine_strength_unit +
                      ' ' +
                      data.item.medicine_form +
                      ' ' +
                      'remind' +
                      ' ' +
                      data.item.frequency_value +
                      ' ' +
                      data.item.reminder_time}
                  </Text>
                </Pressable>
                <ToggleSwitch
                  onColor={color.mediumGreen}
                  isOn={data.item.status}
                  size={'small'}
                  onToggle={val => {
                    onEditMedicineReminderStatusPress(data.item);
                  }}
                />
              </View>
            );
          }}
          renderHiddenItem={(data, rowData) => {
            return (
              <View style={styles.rowBack()}>
                <Pressable
                  style={styles.backgroundBtn()}
                  onPress={() => {
                    const valueIndex = reminderListData.findIndex(
                      val => val === data.item,
                    );
                    reminderListData.splice(valueIndex, 1);
                    setExtra(extra + 1);
                  }}>
                  <IcDelete
                    height={size.moderateScale(30)}
                    width={size.moderateScale(30)}
                    fill={color.black}
                  />
                </Pressable>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator()} />}
          showsVerticalScrollIndicator={false}
          rightOpenValue={-90}
          useNativeDriver={true}
          disableRightSwipe
        />
        <SwipeListView
          // data={reminderListData}
          data={appointmentReminderData && appointmentReminderData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data, index) => {
            return (
              <View style={[styles.reminderView(data.item.status)]}>
                <Pressable
                  onPress={() => {
                    modalRef.current.open();
                    setSelectedItem(data.item);
                  }}>
                  <Text style={styles.reminderText()}>
                    {data.item.date +
                      ' ' +
                      data.item.address1 +
                      ' ' +
                      data.item.address2 +
                      ' \n' +
                      data.item.city +
                      ' ' +
                      data.item.state +
                      ' ' +
                      data.item.pincode +
                      ' ' +
                      'remind ' +
                      ' ' +
                      data.item.user_selected_time +
                      'at ' +
                      data.item.date}
                  </Text>
                </Pressable>
                <ToggleSwitch
                  onColor={color.mediumGreen}
                  isOn={data.item.status}
                  size={'small'}
                  onToggle={val => {
                    onEditAppointmentReminderStatusPress(data.item);
                  }}
                />
              </View>
            );
          }}
          renderHiddenItem={(data, rowData) => {
            return (
              <View style={styles.rowBack()}>
                <Pressable
                  style={styles.backgroundBtn()}
                  onPress={() => {
                    const valueIndex = reminderListData.findIndex(
                      val => val === data.item,
                    );
                    reminderListData.splice(valueIndex, 1);
                    setExtra(extra + 1);
                  }}>
                  <IcDelete
                    height={size.moderateScale(30)}
                    width={size.moderateScale(30)}
                    fill={color.black}
                  />
                </Pressable>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator()} />}
          showsVerticalScrollIndicator={false}
          rightOpenValue={-90}
          useNativeDriver={true}
          disableRightSwipe
        />
      </Screen>
      {tipForDayData &&
        tipForDayData.map((item, index) => {
          return (
            <View style={styles.tipsContainer()}>
              <Text style={styles.labelFieldText()}>{item.name}</Text>
              <View style={styles.tipsSubView()}>
                <Text style={styles.labelFieldText()}>{item.value}</Text>
              </View>
            </View>
          );
        })}
      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          handlePosition={'inside'}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            contentContainerStyle: styles.modalContentContainerStyle(),
          }}
          modalStyle={styles.modalStyle()}
          handleStyle={styles.dragStyle()}>
          <View>
            <Text style={styles.labelFieldText()}>
              {' '}
              Generic Name : TabThoxin 50 MG Tablet{' '}
            </Text>
            <View style={styles.row()}>
              <IcSafety
                height={size.moderateScale(30)}
                width={size.moderateScale(30)}
                stroke={color.red}
              />
              <View />
              <Text style={[styles.labelFieldText(), styles.modalText()]}>
                {selectedItem.reminderTitle}
              </Text>
            </View>
            <Text style={[styles.labelFieldText(), styles.modalText()]}>
              Symptom: {selectedItem.reminderTitle}
            </Text>
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
