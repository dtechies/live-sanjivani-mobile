import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, Pressable, View, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {addEditMedicalJournalNote} from 'redux-actions';
import {useDispatch} from 'react-redux';

import {Loader, Toast, Text, Button, Screen, Header} from 'components';
import {size, color, IcCrossArrow} from 'theme';
import * as styles from './styles';

export const MedicalJournalScreen = props => {
  const navigation = useNavigation();
  const modalRef = useRef();
  const dispatch = useDispatch();
  const toastRef = useRef();

  const modalPreviewRef = useRef();
  const [isLoading, seIsLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const [imageData, setImageData] = useState(
    'Upload or take picture of your medicine',
  );
  const [imageUpload, setImageUpload] = useState({});

  const [timeErr, setTimeErr] = useState('');
  const [dateErr, setDateErr] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    console.log('imageUpload', imageUpload);
  }, [imageUpload]);

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
      setImageData('Preview Image');
      setImageUpload(image);
      setExtra(extra + 1);
      console.log('uploadFromGallery Image ==>', image);
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
      setImageData('Preview Image');
      setImageUpload(image);
      setExtra(extra + 1);
    });
  };

  const getCurrentDate = givenDate => {
    let day = givenDate.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = givenDate.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let year = givenDate.getFullYear();
    let newDate = day + '/' + month + '/' + year;
    setSelectedDate(newDate);
    setDateErr('');
    setShowDate(false);
  };
  const getAppointmentTime = givenTime => {
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newDate = givenTime.toTimeString().slice(0, 5);
    setSelectedTime(newDate);
    setTimeErr('');
    setShowTime(false);
  };

  const validation = () => {
    if (selectedDate === null) {
      setDateErr('Please select Date...');
    }
    if (selectedTime === null) {
      setTimeErr('Please select Time...');
    }
    if (description === '') {
      setDescriptionErr('Please Enter Description...');
    }
  };
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const addMedicalJournalData = async () => {
    seIsLoading(true);
    let formData = new FormData();
    formData.append('time', selectedTime);
    formData.append('date', selectedDate);
    formData.append('description', description);
    Object.keys(imageUpload).length > 0 &&
      formData.append('image', {
        uri: imageUpload.path,
        name: imageUpload.imageName,
        type: imageUpload.mime,
      });
    const SubCategoryResponse = await dispatch(
      addEditMedicalJournalNote(formData),
    );
    console.log('DATAAA', SubCategoryResponse);
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    setExtra(extra + 1);

    if (res.status) {
      seIsLoading(false);
      toastMessage(res.message);
      setExtra(extra + 1);
      navigation.goBack();
    } else {
      seIsLoading(false);
      toastMessage(res.message);
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
      {isLoading && <Loader />}
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'medicalJournal_screen.title'}
      />
      <Screen>
        <View style={styles.dateTimeCardStyle()}>
          <View style={styles.cardDesign()}>
            <View style={styles.circleView()} />
            <Text style={styles.cardTxt()} text="Date" />
            {showDate && (
              <DateTimePickerModal
                isVisible={showDate}
                mode="date"
                onConfirm={val => getCurrentDate(val)}
                onCancel={() => {
                  setShowDate(false);
                  setExtra(extra + 1);
                }}
              />
            )}
          </View>
          <View style={styles.cardDesign(1)}>
            <View style={styles.circleView()} />
            <Text style={styles.cardTxt()} text="Time" />
            {showTime && (
              <DateTimePickerModal
                isVisible={showTime}
                mode="time"
                locale="en_GB"
                onConfirm={val => getAppointmentTime(val)}
                onCancel={() => {
                  setShowTime(false);
                  setExtra(extra + 1);
                }}
              />
            )}
          </View>
        </View>
        <View style={styles.dateTimeCardStyle()}>
          <Pressable
            style={styles.cardView()}
            onPress={() => {
              setShowDate(true);
            }}>
            <Text style={styles.cardTxt(1)} text={selectedDate} />
          </Pressable>
          <Pressable
            style={styles.cardView(1)}
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.cardTxt(1)} text={selectedTime} />
          </Pressable>
        </View>

        <View style={styles.dateTimeCardStyle()}>
          {dateErr ? <Text style={styles.errorText()}>{dateErr}</Text> : null}
          {timeErr ? <Text style={styles.errorText1()}>{timeErr}</Text> : null}
        </View>
        <Text style={styles.cardTxt(2)} tx="medicalJournal_screen.order" />
        <Pressable
          style={styles.imageView()}
          onPress={() => {
            if (imageData == 'Upload or take picture of your medicine') {
              modalRef.current.open();
            } else {
              modalPreviewRef.current.open();
            }
          }}>
          <Text style={styles.textImage()} text={imageData} />
        </Pressable>

        <TextInput
          value={description}
          placeholder={'Enter description'}
          placeholderTextColor={color.dimGrey}
          multiline
          numberOfLines={4}
          onChangeText={text => {
            setDescription(text);
            setDescriptionErr('');
          }}
          style={styles.containerVal()}
        />
        {descriptionErr ? (
          <Text style={styles.errorText(2)}>{descriptionErr}</Text>
        ) : null}
      </Screen>
      <Button
        buttonStyle={styles.btnContinue()}
        buttonText={styles.btnContinueTxt()}
        nameTx={'medicalJournal_screen.save'}
        onPress={() => {
          selectedDate && selectedTime && description
            ? addMedicalJournalData()
            : validation();
        }}
      />

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
              nameTx="medicalJournal_screen.take_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
            <Button
              onPress={() => uploadFromGallery()}
              nameTx="medicalJournal_screen.upload_picture"
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
              style={styles.crossIconView()}>
              <IcCrossArrow
                width={size.moderateScale(18)}
                height={size.moderateScale(18)}
                fill={color.black}
              />
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
              nameTx="medicalJournal_screen.changeImage"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
