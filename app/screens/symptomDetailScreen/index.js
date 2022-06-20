import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Header, Screen, Toast, Loader} from 'components';

import {IcLeftShort, size, color} from 'theme';

import * as styles from './styles';

export const SymptomDetailScreen = props => {
  const navigation = useNavigation();

  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    setLoading(true);
    if (props.route.params) {
      setData(props.route.params.data);
      console.log('data', props.route.params.data);
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'symptoms_detail_screen.title'}
      />
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading ? (
        <Loader />
      ) : (
        <Screen bounces={false}>
          <View style={styles.mainView()}>
            {data &&
              data.map((item, index) => {
                return (
                  <View>
                    <Pressable
                      style={styles.pressableButton()}
                      onPress={() => {
                        data[index].expand = !item.expand;
                        setData(data);
                        setExtra(extra + 1);
                      }}>
                      <View>
                        <Text style={styles.symptomName()}>
                          {' '}
                          {index + 1}. {item.name}
                        </Text>
                        <Text style={styles.textAgeAndGender()}>
                          Age : {item.age} {'|'} Gender : {item.gender}{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          transform: [
                            {rotate: item.expand ? '90deg' : '270deg'},
                          ],
                        }}>
                        <IcLeftShort
                          width={size.moderateScale(21)}
                          height={size.moderateScale(15)}
                          fill={color.blue}
                        />
                      </View>
                    </Pressable>
                    {item.expand && (
                      <View>
                        <View style={styles.conditionDetailView()}>
                          <Text
                            style={styles.textConditionDetail()}
                            tx={'symptoms_detail_screen.conditionDetails'}
                          />
                        </View>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.symptom'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.description}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.howCommon'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.how_common}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.overView'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.overview}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.riskFactor'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.risk_factor}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.diagnosedBy'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.diagnosed_by}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.didYouKnow'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.did_you_know}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.facts'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.facts}
                        </Text>
                        <View style={styles.conditionDetailView()}>
                          <Text
                            style={styles.textConditionDetail()}
                            tx={'symptoms_detail_screen.treatmentOption'}
                          />
                        </View>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.treatment'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.treatment}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.takeCare'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.take_care_of_yourself}
                        </Text>

                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.madeWorseBy'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.made_wrose_by}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.whenToSeeDoctor'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.when_to_see_doctor}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.questionsAsk'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.question_to_ask}
                        </Text>
                        <Text
                          style={styles.textTitle()}
                          tx={'symptoms_detail_screen.whatToExpect'}
                        />
                        <Text style={styles.textDescription()}>
                          {item.what_to_expect}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}
          </View>
        </Screen>
      )}
    </SafeAreaView>
  );
};
