import React from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Screen, TitleBox} from 'components';
import {useNavigation} from '@react-navigation/native';
import * as styles from './styles';
export const HelpSupportScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.full()}>
      <Screen style={styles.container()} showsVerticalScrollIndicator={false}>
        <TitleBox
          titleContainerStyle={styles.titleStyle()}
          titleTx={'help_screen.title'}
        />
        <View style={styles.mainView()}>
          <Text style={styles.textSupport()} tx={'help_screen.support'} />
          <View style={styles.supportView()}>
            <Pressable style={styles.supportSubcategoriesView()}>
              <Text
                style={styles.textSupport()}
                tx={'help_screen.help_center'}
              />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <Text
                style={styles.textSupport()}
                tx={'help_screen.contact_us'}
              />
            </Pressable>
          </View>
          <View style={styles.dashView()} />
          <Text style={styles.textSupport()} tx={'help_screen.disclosures'} />
          <View style={styles.supportView()}>
            <Pressable style={styles.supportSubcategoriesView()}>
              <Text style={styles.textSupport()} tx={'help_screen.new_terms'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <Text style={styles.textSupport()} tx={'help_screen.Privacy'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <Text style={styles.textSupport()} tx={'help_screen.crm'} />
            </Pressable>
            <Pressable style={styles.supportSubcategoriesView()}>
              <Text style={styles.textSupport()} tx={'help_screen.licenses'} />
            </Pressable>
          </View>
        </View>
      </Screen>
    </SafeAreaView>
  );
};
