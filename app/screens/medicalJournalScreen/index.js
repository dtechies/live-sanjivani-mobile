import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, Pressable, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
  Header,
} from 'components';
import {size, color, images} from 'theme';
import * as styles from './styles';
import {MedicalJournalListJson} from 'json';

export const MedicalJournalScreen = props => {
  const navigation = useNavigation();
  const modalRef = useRef();
  const [isLoading, seIsLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const [imageData, setImageData] = useState(null);
  const [imageDataErr, setImageDataErr] = useState('');
  const [timeErr, setTimeErr] = useState('');
  const [dateErr, setDateErr] = useState('');
  const [title, setTitle] = useState('Medical Journal');
  const [subCategory, setSubCategory] = useState([]);
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDate, setShowDate] = useState(false);

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
      setImageData(image.path);
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
      // console.log('takeFromCamera Image ==>', image);
      modalRef.current.close();
      setImageData(image);
      setImageDataErr('');
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
    let newDate = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    setSelectedTime(newDate);
    setTimeErr('');
    setShowTime(false);
  };
  useEffect(() => {
    if (props.route.params) {
      setTitle(props.route.params.title);
      setSubCategory(props.route.params.sub);
      setExtra(extra + 1);
    }
  }, []);

  const validation = () => {
    if (selectedDate === null) {
      setDateErr('Please select Date...');
    }
    if (selectedTime === null) {
      setTimeErr('Please select Time...');
    }
    if (imageData === null) {
      setImageDataErr('Please Upload / take image...');
    }
  };

  const addMedicalJournal = () => {
    navigation.goBack();
  };
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
        text={title}
      />

      <View style={styles.headingMain()}>
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
      <View style={styles.headingMain()}>
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
      <View style={styles.headingMain()}>
        {dateErr ? <Text style={styles.errorText()}>{dateErr}</Text> : null}
        {timeErr ? (
          <Text style={dateErr ? styles.errorText(1) : styles.errorText1(1)}>
            {timeErr}
          </Text>
        ) : null}
      </View>
      <View>
        <View style={styles.headingMain(1)}>
          <Text style={styles.cardTxt(2)} tx="addDetails_Screen.order" />
        </View>
        <InputBox
          placeholderTextColor={color.blue}
          mainContainerStyle={styles.inputMain()}
          placeholder={'Type here'}
          isRightSide={true}
          inputStyle={styles.inputValue()}
          onRightIconPress={() => {
            modalRef.current.open();
          }}
          containerStyle={styles.mainContainerStyle()}
        />
      </View>
      {imageDataErr ? (
        <Text style={styles.errorText(2)}>{imageDataErr}</Text>
      ) : null}
      <View>
        <Button
          buttonStyle={styles.btnContinue()}
          buttonText={styles.btnContinueTxt()}
          nameTx={'addDetails_Screen.save'}
          onPress={() => {
            selectedDate && selectedTime && imageData
              ? addMedicalJournal()
              : validation();
          }}
        />
      </View>
      <View style={styles.row()}>
        <View style={styles.circleView()} />
        <Text
          style={styles.listJournalHeader()}
          tx="medicalJournal_screen.listAllJournal"
        />
      </View>
      <Screen style={styles.screenContainer()}>
        {MedicalJournalListJson.map((item, index) => {
          return (
            <View style={styles.MedicalJournalListView()}>
              <View style={styles.rowImage()}>
                <Text style={styles.textTodayProgress()} text={item.date} />
                <Text style={styles.textTodayProgress()} text={item.time} />
              </View>
              <Text style={styles.desTextStyle()} text={item.description} />
            </View>
          );
        })}
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
