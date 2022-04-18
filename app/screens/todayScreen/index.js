import React, {useState, useRef} from 'react';
import {View, Pressable} from 'react-native';
// import DraggableFlatList, {
//   ScaleDecorator,
// } from 'react-native-draggable-flatlist';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  ToggleSwitch,
} from 'components';
import {size, color, IcDelete} from 'theme';
import {reminderListData} from 'json';
import * as styles from './styles';

export const TodayScreen = () => {
  const [defaultEnabled, setDefaultEnabled] = useState(false);
  const swipeListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState([]);
  const [extra, setExtra] = useState(0);
  // const [data, setData] = useState(initialData);
  // console.log('ds', reminderListData);
  React.useEffect(() => {
    console.log('active Index ==>', activeIndex);
  }, [activeIndex]);

  return (
    <View style={styles.container()}>
      <TitleBox
        titleTx={'today_screen.title_today'}
        titleContainerStyle={styles.titleTextContainer()}
      />
      <Screen bounces={false} style={styles.screenContainer()}>
        <SwipeListView
          ref={swipeListRef}
          closeOnRowPress
          data={reminderListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={data => {
            const isActive = activeIndex.includes(data.item.id);
            return (
              <View
                style={[
                  styles.reminderView(),
                  {
                    backgroundColor: isActive
                      ? color.lightGreen
                      : color.lavender,
                  },
                ]}>
                <Text style={styles.reminderText()}>
                  {data.item.reminderTitle}
                </Text>
                <ToggleSwitch
                  onColor={color.mediumGreen}
                  isOn={isActive}
                  size={'small'}
                  onToggle={val => {
                    if (isActive) {
                      console.log('Hello activeIndex ==>', activeIndex);

                      const valueIndex = activeIndex.findIndex(
                        val => val === data.item.id,
                      );
                      console.log('Hello activeIndex ==>', valueIndex);
                      // return;
                      console.log('Hello valueIndex ==>', valueIndex);
                      activeIndex.splice(valueIndex, 1);
                      setExtra(extra + 1);
                      console.log('hekko ==>', activeIndex);
                      // setActiveIndex(activeIndex);
                    } else {
                      setActiveIndex([...activeIndex, data.item.id]);
                    }
                  }}
                />
              </View>
            );
          }}
          renderHiddenItem={(data, rowData) => {
            console.log('render ==>', data);
            console.log('render ==>', rowData);
            // console.log('render ==>', data[rowData.item.key]);
            return (
              <View style={styles.rowBack}>
                <Pressable
                  style={styles.backgroundBtn}
                  onPress={() => {
                    const valueIndex = reminderListData.findIndex(
                      val => val === data.item,
                    );
                    reminderListData.splice(valueIndex, 1);
                    console.log('HELLO', swipeListRef.current);
                    swipeListRef.current.SwipeListView.onPress();
                    setExtra(extra + 1);
                    // data[rowData.item.key].closeRow();
                  }}>
                  <IcDelete
                    height={size.moderateScale(50)}
                    width={size.moderateScale(50)}
                    fill={'black'}
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
      <View
        style={{
          margin: size.moderateScale(10),
          width: size.deviceWidth * 0.9,
          // backgroundColor: 'red',
          // marginBottom: size.moderateScale(10),
        }}>
        <Text
          style={styles.labelFieldText()}
          tx="today_screen.tips_for_the_day"
        />
        <View
          style={{
            paddingVertical: size.moderateScale(10),
            borderWidth: size.moderateScale(1),
            borderColor: color.darkGrey,
            marginHorizontal: size.moderateScale(10),
            paddingHorizontal: size.moderateScale(10),
          }}>
          <Text style={styles.labelFieldText()}>
            sssdssfbsdjfhkjdkfsjkdfkhsdfkdskfhsdkjhfksdhfkjhdskfhksdhfksdhfkshdjfhkshfkshdfksdjfkshjdfjhshjdgfjhgsdfjhsdgfhgsdjgfjsdgjfsgfdjgsdjfgjsdgfjjsgfjsg
          </Text>
        </View>
      </View>
    </View>
  );
};
