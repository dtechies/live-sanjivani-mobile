import React, {useState} from 'react';
import {SafeAreaView, Pressable, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Loader, Text, Screen, Header} from 'components';
import {images} from 'theme';
import * as styles from './styles';
import {MainProfileDetail} from 'json';
export const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [detailProfile, setDetailProfile] = useState(MainProfileDetail);

  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Header
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={false}
        isLogoCenter={true}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        source={images.icPerson}
      />
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        <View style={styles.mainProfileStyle()}>
          {detailProfile.map((item, i) => {
            // console.log('item', item.value);
            return (
              <Pressable
                key={i.toString()}
                onPress={() => {
                  if (item.value == 'Appointments') {
                    navigation.navigate('appointmentReminderScreen');
                  }
                  if (item.value == 'Medication Reminder') {
                    navigation.navigate('medicationReminderScreen');
                  }
                  if (item.value == 'Symptom Checker') {
                    navigation.navigate('symptomsScreen');
                  }
                  if (item.value == 'Medical Journal') {
                    navigation.navigate('medicalJournalScreen');
                  }
                  if (item.value == 'Help') {
                    navigation.navigate('HelpSupportScreen');
                  }
                  if (item.value == 'Account Settings') {
                    navigation.navigate('profileDetailScreen');
                  }
                  if (item.value == 'Logout') {
                    navigation.navigate('authStackNavigation', {
                      screen: 'loginScreen',
                    });
                  }
                }}
                style={
                  item.value == 'Logout'
                    ? styles.subProfileStyle(1)
                    : styles.subProfileStyle()
                }>
                {item.svg}
                <Text text={item.value} style={styles.profileText()} />
              </Pressable>
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
