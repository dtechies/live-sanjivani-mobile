import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getMedicineReminderProfile,
  editMedicineReminderStatus,
} from 'redux-actions';

import {useDispatch} from 'react-redux';

import {Loader, Text, Screen, InputBox, Header, ReminderCard} from 'components';
import {size, color, IcBtnPlus, SearchValNew} from 'theme';
import * as styles from './styles';

export const ViewMedicationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [medicineReminderData, setMedicineReminderData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const reminderList =
    filteredData.length > 0 ? filteredData : medicineReminderData;

  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();

    let FilteredValue = medicineReminderData.filter(item => {
      return (
        item.medicine_name.toLowerCase().includes(text) ||
        item.reminder_name.toLowerCase().includes(text)
      );
    });
    FilteredValue.length == 0 && FilteredValue.push({value: 'null'});
    setFilteredData(FilteredValue);
  };

  const getMedicineReminderData = async () => {
    setLoading(true);

    const getMedicineReminderProfileResponse = await dispatch(
      getMedicineReminderProfile(),
    );
    // console.log(
    //   'getMedicineReminderProfileResponse ==>',
    //   getMedicineReminderProfileResponse,
    // );
    const res = getMedicineReminderProfileResponse.payload;
    if (res.status) {
      let data = res.data.MedicineReminderProfileData;

      const trueFirst = data.sort((x, y) => {
        let demo = x.status === y.status;
        return demo ? 0 : x.status ? -1 : 1;
      });
      // console.log('trueFirst', trueFirst);
      setMedicineReminderData(trueFirst);
      // console.log(
      //   'get medicine reminder api response ==>',
      //   res.data.MedicineReminderProfileData,
      // );
      setFilteredData(res.data.MedicineReminderProfileData);
      setLoading(false);
      // toastMessage(res.message);
      setExtra(extra + 1);
    } else {
      setLoading(false);
      // toastMessage(res.message);
    }
  };
  const updateReminderStatus = async val => {
    setLoading(true);

    const editMedicineReminderStatusBody = {
      id: val?.id,
      status: val.status == true ? false : true,
    };
    const editMedicineReminderStatusResponse = await dispatch(
      editMedicineReminderStatus(editMedicineReminderStatusBody),
    );
    const res = editMedicineReminderStatusResponse.payload;
    if (res.status) {
      setLoading(false);
      getMedicineReminderData();
    } else {
      setLoading(false);
      setExtra(extra + 1);
    }
  };

  useEffect(() => {
    getMedicineReminderData();
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
        title={'ViewMedicationScreen.title'}
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
            placeholder={'Search Medicine'}
            placeHolderVal={'ViewMedicationScreen.searchMedicine'}
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
              navigation.navigate('medicationReminderScreen');
            }}>
            <IcBtnPlus
              height={size.moderateScale(65)}
              width={size.moderateScale(65)}
            />
          </Pressable>
        </View>

        <View style={styles.headingMain()}>
          <Text
            tx={'ViewMedicationScreen.medicationList'}
            style={styles.ViewSubTitle()}
          />
        </View>
      </View>
      <Screen style={styles.screenContainer()} bounces={false}>
        {filteredData.length == 0 && (
          <Text style={styles.noData()}>No Records Found...</Text>
        )}
        <View style={styles.bottomStyle()}>
          {reminderList.map((val, i) => {
            if (val.value == 'null') {
              return <Text style={styles.noData()}>No Records Found...</Text>;
            }
            return (
              <ReminderCard
                data={val}
                onWholeCardPress={() =>
                  navigation.navigate('checkMedicationReminderScreen', {
                    reminderData: val,
                    fromViewMedication: true,
                  })
                }
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
