import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  getAllSubCategory,
  addUserFavorite,
  getUserFavoriteList,
} from 'redux-actions';
import {
  Screen,
  Button,
  Header,
  MedicalItems,
  Toast,
  Loader,
  Text,
} from 'components';
import * as styles from './styles';

export const ProgressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [first, setFirst] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progressData, setProgressData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [sharingDataErr, setSharingDataErr] = useState('');

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getAllSubCategoryData = async () => {
    setLoading(true);
    const SubCategoryResponse = await dispatch(getAllSubCategory());
    console.log('SubCategoryResponse', SubCategoryResponse);
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    if (res.status) {
      setLoading(false);
      let newData = res.data.map(i => {
        favoriteData.map(j => {
          if (i.subcategory_id == j.id) {
            i.selectedCard = true;
          }
        });
        return i;
      });
      setProgressData(newData);
      setExtra(extra + 1);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const addUserFavoriteData = async dataId => {
    setLoading(true);
    const fevUserBody = {
      subcategory_id: dataId,
    };
    setExtra(extra + 1);
    const SubCategoryResponse = await dispatch(addUserFavorite(fevUserBody));
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }

    if (res.status) {
      setLoading(false);
      toastMessage(res.message);
      getUserFavoriteListData();
      setExtra(extra + 1);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const getUserFavoriteListData = async () => {
    setLoading(true);
    const SubCategoryResponse = await dispatch(getUserFavoriteList());
    let res = {status: false, message: 'Connection Error...!'};
    if (SubCategoryResponse) {
      res = SubCategoryResponse;
    }
    if (res.status) {
      setLoading(false);
      let favData = res.data.subCategoryDataN;
      let filterData = favData.filter((val, i) => {
        return val.is_favorite == true;
      });
      setFavoriteData(filterData);
      setExtra(extra + 1);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    getAllSubCategoryData();
    getUserFavoriteListData();
    // addUserFavoriteData();
  }, [first]);

  return (
    <SafeAreaView style={styles.container()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      <Header
        isColor={true}
        isHeading={true}
        title={'progress_screen.progress'}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Screen withScroll>
            {first && (
              <View>
                {favoriteData.length >= 1 ? (
                  <View>
                    <View style={styles.row()}>
                      {favoriteData.map((item, index) => {
                        console.log('favoriteData', favoriteData);
                        return (
                          <MedicalItems
                            key={index + 'MedicalItems'}
                            onPress={() => {
                              if (item.is_graph) {
                                navigation.navigate('progressDetailScreen', {
                                  selectedItems: item,
                                });
                              }
                            }}
                            containerStyle={styles.listViewStyle()}
                            nameFirst={item.value}
                            nameSecond={item.name}
                            nameThird={item.unit}
                            svgCardItems={item.icon}
                            isSelected={item.selectedCard}
                          />
                        );
                      })}
                    </View>
                  </View>
                ) : (
                  <>
                    <Text style={styles.noData()}>No Records Found...</Text>
                  </>
                )}
              </View>
            )}
            {!first && (
              <View>
                <View style={styles.row()}>
                  {progressData.map((item, index) => {
                    return (
                      <MedicalItems
                        key={index + 'MedicalItems'}
                        onPress={() => {
                          progressData[index].selectedCard = !item.selectedCard;
                          setExtra(extra + 1);
                        }}
                        containerStyle={styles.listViewStyle()}
                        nameFirst={item.value}
                        nameSecond={item.name}
                        nameThird={item.unit}
                        svgCardItems={item.icon}
                        isSelected={item.selectedCard}
                      />
                    );
                  })}
                </View>
                {sharingDataErr ? (
                  <Text style={styles.errorText()} tx={sharingDataErr} />
                ) : null}
              </View>
            )}
          </Screen>
          {first && (
            <View>
              <Button
                buttonStyle={styles.button()}
                buttonText={styles.buttonTxt()}
                nameTx={'progress_screen.selectFav'}
                onPress={() => {
                  // console.log('favoriteData',favoriteData)
                  setFirst(false);
                }}
              />
            </View>
          )}
          {!first && (
            <Button
              buttonStyle={styles.button()}
              buttonText={styles.buttonTxt()}
              nameTx={'progress_screen.addFav'}
              onPress={() => {
                let data = progressData.filter(val => val.selectedCard == true);
                if (data.length == 0) {
                  setSharingDataErr('progress_screen.sharing_error');
                } else {
                  let dataId = data.map(i => i.subcategory_id);
                  setFirst(true);
                  addUserFavoriteData(dataId);
                  setExtra(extra + 1);
                  setSharingDataErr('');
                }
              }}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};
