import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Dropdown} from 'react-native-element-dropdown';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import 'react-native-gesture-handler';

import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Header,
} from 'components';
import {size, color, IcSearch, IcCrossArrow} from 'theme';
import {useDispatch, useSelector} from 'react-redux';
import * as styles from './styles';
import {
  medicineForm,
  dose,
  measurementUnit,
  strength,
  reminderFrequency,
  reminderTime,
} from 'json';

export const MedicationReminderScreen = () => {
  const navigation = useNavigation();
  const modalRef = useRef();
  const modalPreviewRef = useRef();
  const [isLoading, seIsLoading] = useState(false);
  const [medicineValue, setMedicineValue] = useState(null);
  const [medicineValueDefault, setMedicineValueDefault] = useState({
    label: 'Select Forms',
    value: 'Select Forms',
  });
  const [doseValue, setDoseValue] = useState(null);
  const [doseValueDefault, setDoseValueDefault] = useState({
    label: 'Select Dose',
    value: 'Select Dose',
  });
  const [unitValue, setUniteValue] = useState(null);
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
  const [remindFrequencyValueDefault, setRemindFrequencyValueDefault] =
    useState({label: 'Select Frequency', value: 'Select Frequency'});
  const [remindFreqDate, setRemindFreqDate] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [remindTimeValue, setRemindTimeValue] = useState(null);
  const [remindTime, setRemindTime] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [imageData, setImageData] = useState(
    'Upload or take picture from phone',
  );
  const [imageUpload, setImageUpload] = useState('');
  const [imageDataErr, setImageDataErr] = useState('');
  const [referedByErr, setReferedByErr] = useState('');
  const [referedBy, setReferedBy] = useState('');
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [medicineFormName, setMedicineFormName] = useState(null);
  const [medicineFormNameErr, setMedicineFormNameErr] = useState(null);
  const [medicineStrength, setMedicineStrength] = useState('');
  const [medicineStrengthDefault, setMedicineStrengthDefault] = useState({
    label: 'Select Strength',
    value: 'Select Strength',
  });
  const [doseValueErr, setDoseValueErr] = useState(null);
  const [unitValueErr, setUnitValueErr] = useState(null);
  const [remindFrequencyValueErr, setRemindFrequencyValueErr] = useState(null);
  const [remindFreqDateErr, setRemindFreqDateErr] = useState('');
  const [remindTimeErr, setRemindTimeErr] = useState('');
  const [timeErr, setTimeErr] = useState('');
  const [medicineStrengthErr, setMedicineStrengthErr] = useState('');

  // const {token, userId} = useSelector(state => ({
  //   token: state.userDataReducer.userDataResponse.userData.token,
  //   userId: state.userDataReducer.userDataResponse.userData.id,
  // }));
  const closeModal = () => {
    modalRef.current.close();
  };
  const onCloseCallback = () => {
    modalRef.current.close();
  };

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
      // setImageData(image.path.split('/').pop());
      setImageData('Preview Image');
      setImageUpload(image);
      setImageDataErr('');
      setExtra(extra + 1);
      // console.log('uploadFromGallery Image ==>', image.path);
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
      modalRef.current.close();
      // setImageData(image.path.split('/').pop());
      setImageData('Preview Image');
      setImageUpload(image);
      setImageDataErr('');
    });
  };

  const getRemindFreqCurrentDate = givenDate => {
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    setRemindFreqDate(newDate);
    setRemindFrequencyValueErr('');
    setShowDate(false);
  };
  const getRemindTime = givenTime => {
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newTime = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    setRemindTime(newTime);
    setRemindTimeErr('');
    setShowTime(false);
  };

  const OnAddMedicineReminder = async () => {
    // setLoading(true);
    // let formData = new FormData();
    // formData.append('user_id', userId);
    // formData.append('doctor_name', searchVal);
    // formData.append('speciality', speciality);
    // formData.append('medicine_image', {
    //   uri: imageData.path,
    //   name: imageData.imageName,
    //   type: imageData.mime,
    // });
    // formData.append('medicine_name', medicineName);
    // formData.append('medicine_form', medicineFormName);
    // formData.append('dose', doseValue);
    // formData.append('medicine_strength', medicineStrength);
    // formData.append('medicine_strength_unit', unitValue);
    // formData.append('reminder_frequency', remindFrequencyValue);
    // formData.append('frequency_value', remindFreqDate);
    // formData.append('reminder_time', remindTimeValue);
    // formData.append('user_selected_time', remindTime);
    // formData.append('pills_remaining', pills);

    // const addMedicineReminderHeader = {
    //   token: token,
    // };
    // // console.log('addMedicineReminder form data ==>', formData);
    // // console.log('addMedicineReminderHeader ==>', addMedicineReminderHeader);

    // const addMedicineReminderResponse = await dispatch(
    //   addMedicineReminder(formData, addMedicineReminderHeader),
    // );
    // const res = addMedicineReminderResponse.payload;
    // setLoading(false);
    // // console.log('addMedicineReminder Res ==>', res);

    // if (res.status) {
    //   // console.log('addMedicineReminder List ==>', res);
    //   toastMessage(res.message);
    //   setTimeout(() => {
    //     navigation.navigate('Today', {
    //       screen: 'todayScreen',
    //       params: {medication: true},
    //     });
    //   }, 150);
    // } else {
    //   setLoading(false);
    //   toastMessage(res.message);
    // }
    console.log('no error..');
    navigation.navigate('checkMedicationReminderScreen', {
      name: 'bansi',
    });
  };

  const validation = () => {
    if (referedBy === '') {
      setReferedByErr('Enter doctor name');
    }
    if (name === '') {
      setNameErr('Enter medicine name');
    }
    if (imageData === null) {
      setImageDataErr('Upload / take image');
    }
    if (medicineValue === '' || medicineValue === null) {
      setMedicineFormNameErr('Select medicine form');
    }
    if (medicineStrength === '') {
      setMedicineStrengthErr('Enter medicine Strength');
    }
    if (doseValue === '' || doseValue === null) {
      setDoseValueErr('Select dose');
    }
    if (remindFrequencyValue === '' || remindFrequencyValue === null) {
      setRemindFrequencyValueErr('Select reminder frequency');
    }
    if (
      remindFreqDate === 'Select a Date' &&
      remindFrequencyValue !== 'EveryDay'
    ) {
      setRemindFrequencyValueErr('Select date');
    }
    if (remindTimeValue === '' || remindTimeValue === null) {
      setRemindTimeErr('Select reminder time');
    }
    if (remindTime === 'Select a Time') {
      setRemindTimeErr('Select time');
    }
  };
  // useEffect(() => {
  //   console.log('imageData', imageData);
  // }, [imageData]);

  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
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
        title={'medication_reminder_screen.title'}
      />
      <Screen
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.screenContainer()}>
        <InputBox
          titleTx={'medication_reminder_screen.referred_by'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Search By Name/Specality'}
          inputStyle={styles.inputStyle()}
          placeholderTextColor={color.grayTxt}
          value={referedBy}
          mainContainerStyle={styles.inputMainContainer()}
          onChange={val => {
            setReferedBy(val);
            setReferedByErr('');
            setExtra(extra + 1);
          }}
        />
        {referedByErr ? (
          <Text style={styles.errorText()}>{referedByErr}</Text>
        ) : null}
        <InputBox
          titleTx={'medication_reminder_screen.name_of_medicine'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Glycomet'}
          placeholderTextColor={color.grayTxt}
          inputStyle={styles.inputStyle()}
          value={name}
          mainContainerStyle={styles.inputMainContainer()}
          onChange={val => {
            setName(val);
            setNameErr('');
          }}
        />
        {nameErr ? <Text style={styles.errorText()}>{nameErr}</Text> : null}

        <Pressable
          style={styles.imageView()}
          onPress={() => {
            if (imageData == 'Upload or take picture from phone') {
              modalRef.current.open();
            } else {
              modalPreviewRef.current.open();
            }
          }}>
          <Text style={styles.textImage()} text={imageData} />
        </Pressable>
        {imageDataErr ? (
          <Text style={styles.errorText()}>{imageDataErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.medicine_form"
        />
        <Dropdown
          defaultValue={medicineValueDefault}
          data={medicineForm}
          labelField="label"
          valueField="value"
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={medicineValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setMedicineValue(item.value);
            setMedicineFormNameErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {medicineFormNameErr ? (
          <Text style={styles.errorText()}>{medicineFormNameErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.dose"
        />
        <Dropdown
          defaultValue={doseValueDefault}
          data={dose}
          labelField="label"
          valueField="value"
          // placeholder={'Select Dose'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          // placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={doseValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setDoseValue(item.value);
            setDoseValueErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {doseValueErr ? (
          <Text style={styles.errorText()}>{doseValueErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.strength"
        />
        <Dropdown
          defaultValue={medicineStrengthDefault}
          data={strength}
          labelField="label"
          valueField="value"
          // placeholder={'Select Strength'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          // placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={unitValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setMedicineStrength(item.value);
            setMedicineStrengthErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
              </View>
            );
          }}
        />
        {medicineStrengthErr ? (
          <Text style={styles.errorText()}>{medicineStrengthErr}</Text>
        ) : null}

        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.reminder_frequency"
        />
        <Dropdown
          defaultValue={remindFrequencyValueDefault}
          data={reminderFrequency}
          labelField="label"
          valueField="value"
          // placeholder={'Select Frequency'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          // placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          // value={remindFrequencyValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setRemindFrequencyValue(item.name);
            setRemindFrequencyValueErr('');
            setRemindFreqDate('Select a Date');
            // if (item.value == 'EveryDay') {
            //   setRemindFrequencyValueErr('');
            // } else {
            //   setRemindFrequencyValueErr('Select a Date');
            // }
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
              </View>
            );
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
            }}
            style={styles.showtimeMain(11)}>
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
            }}
            style={styles.showtimeMain(1)}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValue === 'Once a week' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}
            style={styles.showtimeMain()}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValueErr ? (
          <Text style={styles.errorText()}>{remindFrequencyValueErr}</Text>
        ) : null}
        {showDate && (
          <>
            <DateTimePickerModal
              isVisible={showDate}
              mode="date"
              onConfirm={val => getRemindFreqCurrentDate(val)}
              onCancel={() => {
                setShowDate(false);
                setExtra(extra + 1);
              }}
            />
          </>
        )}
        <Text
          style={styles.labelFieldDropText()}
          tx="medication_reminder_screen.reminder_time"
        />
        <Dropdown
          defaultValue={{label: 'Select Time', value: 'Select Time'}}
          data={reminderTime}
          labelField="label"
          valueField="value"
          placeholder={'Select Time'}
          dropdownPosition={'bottom'}
          style={styles.dropdown(1)}
          placeholderStyle={styles.labelFieldText1()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(82)}
          showsVerticalScrollIndicator={false}
          containerStyle={styles.dropdownContainer()}
          value={remindTimeValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
            ItemSeparatorComponent: () => {
              return <View style={styles.separator()} />;
            },
          }}
          onChange={item => {
            setRemindTimeValue(item.name);
            setRemindTime('Select a Time');
            setRemindTimeErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View style={styles.dropDownMain()}>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
              </View>
            );
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
            }}
            style={styles.showtimeMain()}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'Before Meal' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}
            style={styles.showtimeMain()}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'After Meal' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}
            style={styles.showtimeMain()}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeErr ? (
          <Text style={styles.errorText(1)}>{remindTimeErr}</Text>
        ) : null}
        {showTime && (
          <>
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
          </>
        )}

        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx="medication_reminder_screen.next"
          onPress={() => {
            referedBy &&
            name &&
            medicineValue &&
            medicineStrength &&
            doseValue &&
            remindFrequencyValue &&
            remindFreqDate &&
            remindTimeValue &&
            imageData &&
            remindTime
              ? OnAddMedicineReminder()
              : validation();
          }}
        />
      </Screen>
      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          disableScrollIfPossible={false}
          // onOverlayPress={closeModal}
          // onClosed={onCloseCallback}
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
              style={{
                alignSelf: 'flex-end',
              }}>
              <IcCrossArrow width={20} height={20} fill={color.black} />
            </Pressable>
            <Image
              resizeMode="contain"
              source={{uri: imageUpload && imageUpload?.path}}
              style={styles.imageModelView()}
            />
            <Button
              onPress={() => {
                modalRef.current.open();
                modalPreviewRef.current.close();
              }}
              name="Change Image"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
