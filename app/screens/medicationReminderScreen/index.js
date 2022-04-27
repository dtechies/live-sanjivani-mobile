import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {getMedicineReminderAllDetail, addMedicineReminder} from 'redux-actions';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';

import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Toast,
} from 'components';
import {size, color, IcSearch} from 'theme';
import * as styles from './styles';
import {dose} from 'json';

export const MedicationReminderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const modalRef = useRef();

  const [loading, setLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [searchValErr, setSearchValErr] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [specialityErr, setSpecialityErr] = useState('');
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [medicineNameErr, setMedicineNameErr] = useState('');
  const [medicineFormName, setMedicineFormName] = useState(null);
  const [medicineFormNameErr, setMedicineFormNameErr] = useState(null);
  const [medicineStrength, setMedicineStrength] = useState('');
  const [medicineStrengthErr, setMedicineStrengthErr] = useState('');
  const [doseValue, setDoseValue] = useState(null);
  const [doseValueErr, setDoseValueErr] = useState(null);
  const [unitValue, setUnitValue] = useState(null);
  const [unitValueErr, setUnitValueErr] = useState(null);
  const [remindFrequencyValue, setRemindFrequencyValue] = useState(null);
  const [remindFrequencyValueErr, setRemindFrequencyValueErr] = useState(null);
  const [remindFreqDate, setRemindFreqDate] = useState('Select a Date');
  const [showDate, setShowDate] = useState(false);
  const [remindFreqDateErr, setRemindFreqDateErr] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [remindTimeValue, setRemindTimeValue] = useState(null);
  const [remindTime, setRemindTime] = useState('Select a time');
  const [remindTimeErr, setRemindTimeErr] = useState('');
  const [pills, setPills] = useState('');
  const [pillsErr, setPillsErr] = useState('');
  const [doctorData, setDoctorData] = useState([]);
  const [medicineFormData, setMedicineFormData] = useState([]);
  const [medicineStrengthData, setMedicineStrengthData] = useState([]);
  const [reminderFrequencyData, setReminderFrequencyData] = useState([]);
  const [reminderTimeData, setReminderTimeData] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [imageDataErr, setImageDataErr] = useState('');
  const [doctorFilteredName, setDoctorFilteredName] = useState([]);
  const [specialityFilteredName, setSpecialityFilteredName] = useState([]);
  const {token, userId} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
    userId: state.userDataReducer.userDataResponse.userData.id,
  }));

  const getRemindFreqCurrentDate = givenDate => {
    // console.log('A date has been picked: ', givenDate);
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    // let newDate = day + '-' + month + '-' + year;
    // console.log('newDate: ', newDate);
    setRemindFreqDateErr('');
    setRemindFreqDate(newDate);
    setShowDate(false);
  };
  const getRemindTime = givenTime => {
    // console.log('A Time picked: ', givenTime);
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newTime = givenTime.toTimeString().slice(0, 5);
    // let newTime = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    // console.log('newTime: ', newTime);
    setRemindTimeErr('');
    setRemindTime(newTime);
    setShowTime(false);
  };

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const getMedicineReminderAllDetailList = async () => {
    setLoading(true);
    const getMedicineReminderAllDetailHeader = {
      token: token,
    };
    const getMedicineReminderAllDetailResponse = await dispatch(
      getMedicineReminderAllDetail(getMedicineReminderAllDetailHeader),
    );
    // console.log(
    //   'getMedicineReminderAllDetail ==>',
    //   getMedicineReminderAllDetailHeader,
    // );
    const res = getMedicineReminderAllDetailResponse.payload;
    // console.log('getMedicineReminderAllDetail res ==>', res);
    if (res.status) {
      // console.log('getMedicineReminderAllDetail List  ==>', res.data);
      setDoctorData(res.data.DoctorsData);
      setMedicineFormData(res.data.MedicineData);
      setMedicineStrengthData(res.data.MedicineStrengthData);
      setReminderFrequencyData(res.data.ReminderFrequencyData);
      setReminderTimeData(res.data.ReminderTimeData);
      toastMessage(res.message);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const validation = () => {
    if (searchVal === '') {
      setSearchValErr('Enter doctor name');
    }
    if (name === '') {
      setNameErr('Enter name');
    }
    if (speciality === '') {
      setSpecialityErr('Enter speciality');
    }
    if (imageData === null) {
      setImageDataErr('Upload / take image');
    }
    if (medicineName === '') {
      setMedicineNameErr('Enter medicine name');
    }
    if (medicineFormName === '' || medicineFormName === null) {
      setMedicineFormNameErr('Select medicine form');
    }
    if (medicineStrength === '') {
      setMedicineStrengthErr('Enter medicine Strength');
    }
    if (doseValue === '' || doseValue === null) {
      setDoseValueErr('Select dose');
    }
    if (unitValue === '' || unitValue === null) {
      setUnitValueErr('Select unit');
    }
    if (remindFrequencyValue === '' || remindFrequencyValue === null) {
      setRemindFrequencyValueErr('Select reminder frequency');
    } else if (remindFreqDate === 'Select a Date') {
      setRemindFreqDateErr('Select date');
    }
    if (remindTimeValue === '' || remindTimeValue === null) {
      setRemindTimeErr('Select reminder time');
    } else if (remindTime === 'Select a Time') {
      setRemindTimeErr('Select time');
    }
    if (pills === '') {
      setPillsErr('Enter pill count');
    }
  };

  const OnAddMedicineReminder = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('doctor_name', searchVal);
    formData.append('speciality', speciality);
    formData.append('medicine_image', {
      uri: imageData.path,
      name: imageData.imageName,
      type: imageData.mime,
    });
    formData.append('medicine_name', medicineName);
    formData.append('medicine_form', medicineFormName);
    formData.append('dose', doseValue);
    formData.append('medicine_strength', medicineStrength);
    formData.append('medicine_strength_unit', unitValue);
    formData.append('reminder_frequency', remindFrequencyValue);
    formData.append('frequency_value', remindFreqDate);
    formData.append('reminder_time', remindTimeValue);
    formData.append('user_selected_time', remindTime);
    formData.append('pills_remaining', pills);

    const addMedicineReminderHeader = {
      token: token,
    };
    // console.log('addMedicineReminder form data ==>', formData);
    // console.log('addMedicineReminderHeader ==>', addMedicineReminderHeader);

    const addMedicineReminderResponse = await dispatch(
      addMedicineReminder(formData, addMedicineReminderHeader),
    );
    const res = addMedicineReminderResponse.payload;
    setLoading(false);
    // console.log('addMedicineReminder Res ==>', res);

    if (res.status) {
      // console.log('addMedicineReminder List ==>', res);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('Today', {
          screen: 'todayScreen',
          params: {medication: true},
        });
      }, 150);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    getMedicineReminderAllDetailList();
  }, []);

  const uploadFromGallery = () => {
    ImagePicker.openPicker({
      width: size.moderateScale(300),
      height: size.moderateScale(400),
      cropping: true,
      includeBase64: true,
    }).then(image => {
      var imgPathIndex = image.path.lastIndexOf('/');
      var imgPathSubstr = image.path.substring(imgPathIndex + 1);
      image.imageName = imgPathSubstr;
      modalRef.current.close();
      setImageData(image);
      setImageDataErr('');
      // console.log('uploadFromGallery Image ==>', image);
    });
  };
  const takeFromCamera = () => {
    ImagePicker.openCamera({
      width: size.moderateScale(300),
      height: size.moderateScale(400),
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      var imgPathIndex = image.path.lastIndexOf('/');
      var imgPathSubstr = image.path.substring(imgPathIndex + 1);
      image.imageName = imgPathSubstr;
      // console.log('takeFromCamera Image ==>', image);
      modalRef.current.close();
      setImageData(image);
      setImageDataErr('');
    });
  };

  const onDoctorNameType = val => {
    setSearchVal(val);
    let text = val.toLowerCase() || val.toUpperCase();
    // console.log('onDoctorNameType ==>', val);
    if (val.length >= 2) {
      let filteredName = doctorData.filter(item => {
        return item.doctor_name.toLowerCase().match(text);
      });
      setDoctorFilteredName(filteredName);
    }
  };
  const onSpecialityNameType = val => {
    setSpeciality(val);
    let text = val.toLowerCase() || val.toUpperCase();
    // console.log('Speciality type ==>', val);
    if (val.length >= 2) {
      let filteredName = doctorData.filter(item => {
        return item.speciality.toLowerCase().match(text);
      });
      setSpecialityFilteredName(filteredName);
    }
  };
  return (
    <SafeAreaView style={styles.container()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Screen
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.screenContainer()}>
        <TitleBox
          title={'Medication Reminder'}
          titleContainerStyle={styles.titleTextContainer()}
        />

        <InputBox
          titleTx={'medication_reminder_screen.referred_by'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Search'}
          value={searchVal}
          onChangeText={value => {
            onDoctorNameType(value);
            setSearchValErr('');
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          rightIcon={
            <IcSearch
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.purple}
            />
          }
        />
        {searchValErr ? (
          <Text style={styles.textValidation()} text={searchValErr} />
        ) : null}
        {doctorFilteredName.length > 0 &&
          doctorFilteredName.map((item, index) => {
            return (
              <Pressable
                style={styles.searchedValueList}
                onPress={() => {
                  setSearchVal(item.doctor_name);
                  setSpeciality(item.speciality);
                  setName(item.doctor_name);
                  setSearchValErr('');
                  setSpecialityErr('');
                  setNameErr('');
                  setDoctorFilteredName([]);
                }}>
                <Text>{item.doctor_name}</Text>
              </Pressable>
            );
          })}

        <InputBox
          titleTx={'medication_reminder_screen.name'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Name'}
          value={name}
          onChangeText={value => {
            setName(value);
            setNameErr('');
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {nameErr ? (
          <Text style={styles.textValidation()} text={nameErr} />
        ) : null}
        <InputBox
          titleTx={'medication_reminder_screen.speciality'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Speciality'}
          value={speciality}
          onChangeText={value => {
            onSpecialityNameType(value);
            setSpecialityErr('');
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {specialityErr ? (
          <Text style={styles.textValidation()} text={specialityErr} />
        ) : null}
        {specialityFilteredName.length > 0 &&
          specialityFilteredName.map((item, index) => {
            return (
              <Pressable
                style={styles.searchedValueList}
                onPress={() => {
                  setSpeciality(item.speciality);
                  setSpecialityErr('');
                  setSpecialityFilteredName([]);
                }}>
                <Text>{item.speciality}</Text>
              </Pressable>
            );
          })}
        <InputBox
          titleTx={'medication_reminder_screen.name_of_medicine'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Name of Medicine'}
          value={medicineName}
          onChangeText={value => {
            setMedicineName(value);
            setMedicineNameErr('');
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {medicineNameErr ? (
          <Text style={styles.textValidation()} text={medicineNameErr} />
        ) : null}
        <Button
          onPress={() => modalRef.current.open()}
          nameTx="medication_reminder_screen.upload_or_take_picture"
          buttonStyle={styles.uploadImageButtonStyle()}
          buttonText={styles.textUploadImage()}
        />

        {imageDataErr ? (
          <Text style={styles.textValidation()} text={imageDataErr} />
        ) : null}
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.medicine_form"
        />
        <Dropdown
          data={medicineFormData}
          labelField="name"
          valueField="name"
          placeholder={'Select Form'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={medicineFormName}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setMedicineFormName(item.name);
            setMedicineFormNameErr('');
            setIsFocus(false);
          }}
        />
        {medicineFormNameErr ? (
          <Text style={styles.textValidation()} text={medicineFormNameErr} />
        ) : null}

        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.dose"
        />
        <Dropdown
          data={dose}
          labelField="label"
          valueField="value"
          placeholder={'Dose'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={doseValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setDoseValue(item.value);
            setDoseValueErr('');
            setIsFocus(false);
          }}
        />
        {doseValueErr ? (
          <Text style={styles.textValidation()} text={doseValueErr} />
        ) : null}

        <InputBox
          titleTx={'medication_reminder_screen.medicine_strength'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Medicine Strength'}
          value={medicineStrength}
          onChangeText={value => {
            setMedicineStrength(value);
            setMedicineStrengthErr('');
            setExtra(extra + 1);
          }}
          keyboardType={'number-pad'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {medicineStrengthErr ? (
          <Text style={styles.textValidation()} text={medicineStrengthErr} />
        ) : null}
        <Dropdown
          data={medicineStrengthData}
          labelField="unit"
          valueField="unit"
          placeholder={'Unit of strength'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={unitValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setUnitValue(item.unit);
            setUnitValueErr('');
            setIsFocus(false);
          }}
        />
        {unitValueErr ? (
          <Text style={styles.textValidation()} text={unitValueErr} />
        ) : null}
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.reminder_frequency"
        />
        <Dropdown
          data={reminderFrequencyData}
          labelField="name"
          valueField="name"
          placeholder={'Select Frequency'}
          dropdownPosition={'auto'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={remindFrequencyValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setRemindFrequencyValue(item.name);
            setRemindFrequencyValueErr('');
            setRemindFreqDate('Select a Date');
            setIsFocus(false);
          }}
        />
        {remindFrequencyValueErr ? (
          <Text
            style={styles.textValidation()}
            text={remindFrequencyValueErr}
          />
        ) : null}

        {remindFrequencyValue !== '' && remindFrequencyValue !== null && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFreqDateErr ? (
          <Text style={styles.textValidation()} text={remindFreqDateErr} />
        ) : null}

        {/* {remindFrequencyValue === 'Alternate Day' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValue === 'Once a week' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValue === 'Fixed date' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )} */}
        {showDate && (
          <DateTimePickerModal
            isVisible={showDate}
            mode="date"
            onConfirm={val => getRemindFreqCurrentDate(val)}
            onCancel={() => {
              setShowDate(false);
              setExtra(extra + 1);
            }}
          />
        )}
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.reminder_time"
        />
        <Dropdown
          data={reminderTimeData}
          labelField="name"
          valueField="name"
          placeholder={'Select Time'}
          dropdownPosition={'auto'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={remindTimeValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setRemindTimeValue(item.name);
            setRemindTime('Select a Time');
            setRemindTimeErr('');
            setIsFocus(false);
          }}
        />

        {remindTimeValue !== '' && remindTimeValue !== null && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}

        {remindTimeErr ? (
          <Text style={styles.textValidation()} text={remindTimeErr} />
        ) : null}
        {/* {remindTimeValue === 'Before breakfast' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'After breakfast' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'Before Meal' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'After Meal' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'One Fixed Time' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )} */}
        {showTime && (
          <DateTimePickerModal
            isVisible={showTime}
            mode="time"
            locale="en_GB"
            onConfirm={val => getRemindTime(val)}
            onCancel={() => {
              setShowDate(false);
              setExtra(extra + 1);
            }}
          />
        )}
        <InputBox
          titleTx={'medication_reminder_screen.pill_remaining'}
          titleStyle={styles.labelFieldText()}
          value={pills}
          keyboardType={'number-pad'}
          onChangeText={value => {
            setPills(value);
            setPillsErr('');
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {pillsErr ? (
          <Text style={styles.textValidation()} text={pillsErr} />
        ) : null}
        <Button
          onPress={() => {
            searchVal &&
            name &&
            speciality &&
            medicineName &&
            medicineFormName &&
            medicineStrength &&
            doseValue &&
            unitValue &&
            remindFrequencyValue &&
            remindFreqDate &&
            remindTimeValue &&
            remindTime &&
            pills
              ? OnAddMedicineReminder()
              : validation();
          }}
          // onPress={() =>  OnAddMedicineReminder()}
          nameTx="appointment_reminder_screen.add"
          buttonStyle={styles.addButtonStyle()}
          buttonText={styles.textAddButton()}
        />
      </Screen>
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
            <Button
              onPress={() => takeFromCamera()}
              nameTx="medication_reminder_screen.take_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
            <Button
              onPress={() => uploadFromGallery()}
              nameTx="medication_reminder_screen.upload_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
