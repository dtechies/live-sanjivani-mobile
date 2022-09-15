import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GetUserMedicalJournalNoteAction,
  GetDeleteMedicalJournalNoteAction,
} from 'redux-actions';

import {useDispatch} from 'react-redux';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {Loader, Text, Screen, Header, JournalCard} from 'components';
import {size, color, IcBtnPlus, IcCrossArrow} from 'theme';
import * as styles from './styles';

export const MedicalJournalLists = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const modalPreviewRef = useRef();
  const [imageUpload, setImageUpload] = useState('');

  const [extra, setExtra] = useState(0);
  // const [searchText, setSearchText] = useState('');
  // const [careGiverList, setCareGiverList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCaregiverData();
    });
    return unsubscribe;
  }, [navigation]);

  const toastMessage = msg => {
    console.log('SU0', msg);
    toastRef.current.show(msg);
  };

  // const onSearch = val => {
  //   setSearchText(val);
  //   let text = val.toLowerCase() || val.toUpperCase();

  //   let FilteredValue = careGiverList.filter(item => {
  //     return (
  //       item.first_name.toLowerCase().includes(text) ||
  //       item.nick_name.toLowerCase().includes(text)
  //     );
  //   });
  //   FilteredValue.length == 0 && FilteredValue.push({value: 'null'});
  //   setFilteredData(FilteredValue);
  // };

  const getCaregiverData = async () => {
    setLoading(true);

    const getAppointmentReminderProfileResponse = await dispatch(
      GetUserMedicalJournalNoteAction(),
    );
    console.log('data', getAppointmentReminderProfileResponse);
    let res = {status: false, message: 'Connection Error...!'};
    if (getAppointmentReminderProfileResponse) {
      res = getAppointmentReminderProfileResponse;
    }
    if (res.status) {
      let data = res.data.MedicalJournalNoteData;
      console.log('DataJournal', data);
      // setCareGiverList(data);
      setFilteredData(data);
      setLoading(false);
      setExtra(extra + 1);
      toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const PreviewImage = val => {
    setImageUpload(val.image);
    modalPreviewRef.current.open();
  };
  const DeleteData = async val => {
    setLoading(true);
    const editMedicineReminderStatusBody = {
      id: val?.id,
    };
    const editMedicineReminderStatusResponse = await dispatch(
      GetDeleteMedicalJournalNoteAction(editMedicineReminderStatusBody),
    );
    let res = {status: false, message: 'Connection Error...!'};
    if (editMedicineReminderStatusResponse) {
      res = editMedicineReminderStatusResponse;
    }
    if (res.status) {
      setFilteredData(filteredData.filter(i => i.id != val.id));
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

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
        title={'medicalJournalLists_screen.title'}
      />
      <View style={styles.screenContainer()}>
        <View style={styles.searchBarRowView()}>
          {/* <InputBox
            value={searchText}
            onChangeText={val => {
              onSearch(val);
            }}
            inputStyle={styles.buttonNew()}
            leftIcon={true}
            containerStyle={styles.mainInputStyle()}
            placeholder={'Search Journal'}
            leftIconName={
              <SearchValNew
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.blue}
              />
            }
          /> */}

          <View style={styles.headingMain()}>
            <Text
              tx={'medicalJournalLists_screen.listAllJournal'}
              style={styles.ViewSubTitle()}
            />
          </View>
          <Pressable
            style={styles.shadow()}
            onPress={() => {
              navigation.navigate('medicalJournalScreen');
            }}>
            <IcBtnPlus
              height={size.moderateScale(65)}
              width={size.moderateScale(65)}
            />
          </Pressable>
        </View>
      </View>
      <Screen style={styles.screenContainer()}>
        {filteredData.length == 0 && (
          <Text style={styles.noData()} tx={'ViewMedicationScreen.noData'} />
        )}
        <View style={styles.bottomStyle()}>
          {filteredData.map((val, i) => {
            console.log('val', val);
            if (val.value == 'null') {
              return (
                <Text
                  style={styles.noData()}
                  tx={'ViewMedicationScreen.noData'}
                />
              );
            }
            return (
              <View key={i + 'careGiver'}>
                <JournalCard
                  data={val}
                  ImageClick={() => {
                    PreviewImage(val);
                  }}
                  onPress={() => {
                    DeleteData(val);
                  }}
                />
              </View>
            );
          })}
        </View>
      </Screen>
      <Portal>
        <Modalize
          ref={modalPreviewRef}
          adjustToContentHeight={true}
          disableScrollIfPossible={false}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            contentContainerStyle: styles.modalContentContainerStyle(),
          }}
          modalStyle={styles.modalStyle()}
          handleStyle={styles.dragStyle()}>
          <View>
            <Pressable
              onPress={() => {
                modalPreviewRef.current.close();
              }}
              style={styles.crossIconView()}>
              <IcCrossArrow
                width={size.moderateScale(18)}
                height={size.moderateScale(18)}
                fill={color.black}
              />
            </Pressable>
            <Image
              resizeMode="contain"
              source={{uri: imageUpload}}
              style={styles.imageModelView()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
