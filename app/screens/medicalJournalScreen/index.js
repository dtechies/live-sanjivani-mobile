import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {getMedicalJournalNote, addEditMedicalJournalNote} from 'redux-actions';

import {
  Text,
  Screen,
  InputBox,
  Button,
  TitleBox,
  Toast,
  Loader,
} from 'components';
import {size, color, IcPencil, images} from 'theme';
import * as styles from './styles';

export const MedicalJournalScreen = () => {
  // const navigation = useNavigation();
  const modalRef = useRef();
  const toastRef = useRef();
  const dispatch = useDispatch();
  const [extra, setExtra] = useState(0);
  const [journalName, setJournalName] = useState('');
  const [journalNameErr, setJournalNameErr] = useState('');
  const [journalDescription, setJournalDescription] = useState('');
  const [journalDescriptionErr, setJournalDescriptionErr] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [imageData, setImageData] = useState(null);
  const [imageDataErr, setImageDataErr] = useState('');
  const [medicalJournalList, setMedicalJournalList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurrentTime = givenTime => {
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newDateTime = givenTime.toTimeString().slice(0, 5);
    // let newDateTime = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    return newDateTime;
  };

  const {token} = useSelector(state => ({
    token: state.userDataReducer.userDataResponse.userData.token,
  }));
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const validation = () => {
    if (journalName === '') {
      setJournalNameErr('Enter medical journal name');
    }
    if (journalDescription === '') {
      setJournalDescriptionErr('Enter medical journal description');
    }
    if (imageData === null) {
      setImageDataErr('Upload / take image');
    }
  };

  const getMedicalJournalList = async () => {
    setLoading(true);
    const getMedicalJournalHeader = {
      token: token,
    };
    const getMedicalJournalResponse = await dispatch(
      getMedicalJournalNote(getMedicalJournalHeader),
    );
    // console.log('getMedicalJournalList ==>', getMedicalJournalHeader);
    const res = getMedicalJournalResponse.payload;
    // console.log('getMedicalJournalList res ==>', res);
    setLoading(false);
    if (res.status) {
      // console.log(
      //   'getMedicalJournalList list ==>',
      //   res.data.MedicalJournalNoteData,
      // );
      setMedicalJournalList(res.data.MedicalJournalNoteData);
      toastMessage(res.message);
    } else {
      setLoading(false);
    }
  };
  const addMedicalJournal = async () => {
    // call medical journal api
    setLoading(true);
    modalRef.current.close();
    const addEditMedicalJournalHeader = {
      token: token,
    };
    let formData = new FormData();
    formData.append('name', journalName);
    formData.append('time', selectedTime);
    formData.append('description', journalDescription);
    formData.append('image', {
      uri: imageData.path,
      name: imageData.imageName,
      type: imageData.mime,
    });

    // console.log('addEditMedicalJournalBody ==>', formData);
    // console.log('addEditMedicalJournalHeader ==>', addEditMedicalJournalHeader);

    const addEditMedicalJournalResponse = await dispatch(
      addEditMedicalJournalNote(formData, addEditMedicalJournalHeader),
    );
    const res = addEditMedicalJournalResponse.payload;
    setLoading(false);
    // console.log('addEditMedicalJournal Res ==>', res);

    if (res.status) {
      // console.log('addEditMedicalJournal List ==>', res);
      getMedicalJournalList();
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  useEffect(() => {
    setSelectedTime(getCurrentTime(new Date()));
    getMedicalJournalList();
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
      // console.log('uploadFromGallery Image ==>', image);
      setImageDataErr('');
      setImageData(image);
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
      setImageDataErr('');
      setImageData(image);
    });
  };
  return (
    <SafeAreaView style={styles.full()}>
      {loading && <Loader />}
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      <TitleBox
        titleContainerStyle={styles.titleStyle()}
        titleTx={'medical_journal_screen.title'}
      />

      <Screen
        style={styles.container()}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        bounces={false}>
        <Button
          onPress={() => modalRef.current.open()}
          nameTx="medical_journal_screen.add_journal"
          buttonStyle={styles.addButtonStyle()}
          buttonText={styles.textAddButton()}
        />

        {medicalJournalList &&
          medicalJournalList.map((item, index) => {
            return (
              <View>
                <Text style={styles.textJournalTitle()}>
                  Selected Time : {item.time}
                </Text>

                <Text style={styles.textJournalTitle()}>
                  Journal Title:{'\n'}
                  {item.name}{' '}
                </Text>
                <Text style={styles.textJournalTitle()}>
                  Journal Description:{'\n'}
                  {item.description}{' '}
                </Text>

                {item.image === '' || item.image === null ? null : (
                  <View>
                    <Text style={styles.textJournalTitle()}>
                      Journal Image{'\n'}{' '}
                    </Text>
                    <Image
                      style={styles.imageStyle()}
                      source={images.icLogo}
                      // source={{
                      //   uri: item.image,
                      // }}
                    />
                  </View>
                )}
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
            keyboardShouldPersistTaps: 'handled',
          }}
          modalStyle={styles.modalStyle()}
          handleStyle={styles.dragStyle()}>
          <View>
            <View style={styles.timeAndEditIconRow()}>
              <Text style={styles.textTime()}>Time: {selectedTime}</Text>
              <Pressable onPress={() => setShowTime(!showTime)}>
                <IcPencil
                  height={size.moderateScale(20)}
                  width={size.moderateScale(20)}
                  fill={color.purple}
                />
              </Pressable>
            </View>
            <InputBox
              placeholder={'Add medical journal name'}
              textAlignVertical={'top'}
              value={journalName}
              onChangeText={val => {
                setJournalName(val);
                setJournalNameErr('');
                setExtra(extra + 1);
              }}
              inputStyle={[styles.labelFieldText()]}
              mainContainerStyle={styles.inputMainContainer()}
            />
            {journalNameErr ? (
              <Text style={styles.textValidation()} text={journalNameErr} />
            ) : null}
            <InputBox
              placeholder={'Add medical journal description'}
              multiline
              textAlignVertical={'top'}
              value={journalDescription}
              onChangeText={val => {
                setJournalDescription(val);
                setJournalDescriptionErr('');
                setExtra(extra + 1);
              }}
              inputStyle={[styles.journalDescriptionInputStyle()]}
              mainContainerStyle={styles.inputMainContainer()}
            />
            {journalDescriptionErr ? (
              <Text
                style={styles.textValidation()}
                text={journalDescriptionErr}
              />
            ) : null}
            <Button
              onPress={() => takeFromCamera()}
              nameTx="medical_journal_screen.take_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
            <Button
              onPress={() => uploadFromGallery()}
              nameTx="medical_journal_screen.upload_picture"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
            {imageDataErr ? (
              <Text style={styles.textValidation()} text={imageDataErr} />
            ) : null}
            {imageData === '' || imageData === null ? null : (
              <Image
                style={styles.imageStyle()}
                source={{
                  uri: imageData.path,
                }}
              />
            )}
            <Button
              onPress={() => {
                journalName && journalDescription && imageData
                  ? addMedicalJournal()
                  : validation();
              }}
              nameTx="medical_journal_screen.submit"
              buttonStyle={styles.submitButtonStyle()}
              buttonText={styles.textSubmitButton()}
            />
          </View>
          {showTime && (
            <DateTimePickerModal
              isVisible={showTime}
              mode="time"
              locale="en_GB"
              onConfirm={val => {
                setSelectedTime(getCurrentTime(val));
                setShowTime(false);
              }}
              onCancel={() => {
                setShowTime(false);
                setExtra(extra + 1);
              }}
            />
          )}
        </Modalize>
      </Portal>
    </SafeAreaView>
  );
};
