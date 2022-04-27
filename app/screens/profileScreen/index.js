import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Screen, TitleBox, Button} from 'components';
import * as styles from './styles';
import {useSelector} from 'react-redux';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {token, data, firstName, lastName, dob, gender, email, language} =
    useSelector(state => ({
      token: state.userDataReducer.userDataResponse.userData.token,
      data: state.userDataReducer.userDataResponse.userData,
      firstName: state.userDataReducer.userDataResponse.userData.first_name,
      lastName: state.userDataReducer.userDataResponse.userData.last_name,
      dob: state.userDataReducer.userDataResponse.userData.dob,
      gender: state.userDataReducer.userDataResponse.userData.gender,
      email: state.userDataReducer.userDataResponse.userData.email,
      language: state.userDataReducer.userDataResponse.userData.language,
    }));
  return (
    <SafeAreaView style={styles.full()}>
      <Screen style={styles.container()}>
        <TitleBox
          titleTx={'profile_screen.title'}
          titleContainerStyle={styles.titleTextContainer()}
        />

        <View>
          <View style={styles.nameRow()}>
            <Text style={styles.textNameTitle()} tx={'profile_screen.name'} />
            <Text style={styles.textName()}>: {firstName + lastName}</Text>
          </View>
          <View style={styles.nameRow()}>
            <Text style={styles.textNameTitle()} tx={'profile_screen.dob'} />
            <Text style={styles.textName()}>: {dob}</Text>
          </View>
          <View style={styles.nameRow()}>
            <Text style={styles.textNameTitle()} tx={'profile_screen.gender'} />
            <Text style={styles.textName()}>: {gender}</Text>
          </View>
          <View style={styles.nameRow()}>
            <Text style={styles.textNameTitle()} tx={'profile_screen.email'} />
            <Text style={styles.textName()}>: {email}</Text>
          </View>
          <View style={styles.nameRow()}>
            <Text
              style={styles.textNameTitle()}
              tx={'profile_screen.language'}
            />
            <Text style={styles.textName()}>: {language}</Text>
          </View>
          <Button
            onPress={() => navigation.navigate('addScreen')}
            nameTx="profile_screen.service"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
          <Button
            onPress={() => navigation.navigate('helpSupportScreen')}
            nameTx="profile_screen.help"
            buttonStyle={styles.addButtonStyle()}
            buttonText={styles.textAddButton()}
          />
        </View>
      </Screen>
    </SafeAreaView>
  );
};
