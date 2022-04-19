import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {Text, TitleBox, Screen, ToggleSwitch} from 'components';
import {size, color, IcDelete} from 'theme';
import {reminderListData} from 'json';
import * as styles from './styles';

export const TodayScreen = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [extra, setExtra] = useState(0);

  return (
    <SafeAreaView style={styles.container()}>
      <TitleBox
        titleTx={'today_screen.title_today'}
        titleContainerStyle={styles.titleTextContainer()}
      />
      <Screen bounces={false} style={styles.screenContainer()}>
        <SwipeListView
          data={reminderListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={data => {
            const isActive = activeIndex.includes(data.item.id);
            return (
              <View style={[styles.reminderView(isActive)]}>
                <Text style={styles.reminderText()}>
                  {data.item.reminderTitle}
                </Text>
                <ToggleSwitch
                  onColor={color.mediumGreen}
                  isOn={isActive}
                  size={'small'}
                  onToggle={val => {
                    if (isActive) {
                      const valueIndex = activeIndex.findIndex(
                        val => val === data.item.id,
                      );
                      activeIndex.splice(valueIndex, 1);
                      setExtra(extra + 1);
                    } else {
                      setActiveIndex([...activeIndex, data.item.id]);
                    }
                  }}
                />
              </View>
            );
          }}
          renderHiddenItem={(data, rowData) => {
            return (
              <View style={styles.rowBack()}>
                <Pressable
                  style={styles.backgroundBtn()}
                  onPress={() => {
                    const valueIndex = reminderListData.findIndex(
                      val => val === data.item,
                    );
                    reminderListData.splice(valueIndex, 1);
                    setExtra(extra + 1);
                  }}>
                  <IcDelete
                    height={size.moderateScale(30)}
                    width={size.moderateScale(30)}
                    fill={color.black}
                  />
                </Pressable>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          showsVerticalScrollIndicator={false}
          rightOpenValue={-90}
          useNativeDriver={true}
          disableRightSwipe
        />
      </Screen>
      <View style={styles.tipsContainer()}>
        <Text
          style={styles.labelFieldText()}
          tx="today_screen.tips_for_the_day"
        />
        <View style={styles.tipsSubView()}>
          <Text style={styles.labelFieldText()}>
            1 1 Glycomet 0.5 MG Tablet,remind everyday before meal.1 1 Glycomet
            0.5 MG Tablet,remind everyday before meal.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
