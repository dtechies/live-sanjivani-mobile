import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getMedicineReminderProfile} from 'redux-actions';

import {useDispatch} from 'react-redux';

import {Loader, Text, Screen, InputBox, Header, ReminderCard} from 'components';
import {size, color, IcBtnPlus, SearchValNew} from 'theme';
import * as styles from './styles';
import {getMedicine} from 'json';

export const ViewMedicationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [medicineReminderData, setMedicineReminderData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [medicine, setMedicine] = useState(getMedicine);
  const [loading, setLoading] = useState(false);
  const route = useRoute();

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const reminderList =
    filteredData.length > 0 ? filteredData : medicineReminderData;

  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();

    let FilteredValue = medicineReminderData.filter(item => {
      return item.medicine_name.toLowerCase().match(text);
    });
    FilteredValue.length == 0 && FilteredValue.push({value: 'null'});
    setFilteredData(FilteredValue);
  };

  const getMedicineReminderData = async () => {
    // setLoading(true);

    const getMedicineReminderProfileResponse = await dispatch(
      getMedicineReminderProfile(),
    );
    // console.log(getMedicineReminderProfileResponse);
    const res = getMedicineReminderProfileResponse.payload;
    if (res.status) {
      setMedicineReminderData(res.data.MedicineReminderProfileData);
      setFilteredData(res.data.MedicineReminderProfileData);
      // setLoading(false);
      setExtra(extra + 1);
      toastMessage(res.message);
    } else {
      setLoading(true);
      toastMessage(res.message);
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
            placeholderTextColor={color.blue}
            containerStyle={styles.mainInputStyle()}
            placeholder={'Search Medicine'}
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
              <ReminderCard
                data={val}
                onWholeCardPress={() =>
                  navigation.navigate('checkMedicationReminderScreen', {
                    reminderData: val,
                    fromViewMedication: true,
                  })
                }
                onTogglePress={() => {
                  medicineReminderData[i].isActive = !val.isActive;

                  setTimeout(() => {
                    medicineReminderData.sort(function (x, y) {
                      return x.isActive === y.isActive
                        ? 0
                        : x.isActive
                        ? -1
                        : 1;
                    });
                    setMedicineReminderData(medicineReminderData);
                    setExtra(extra + 1);
                  }, 500);
                }}
              />
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
