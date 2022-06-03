import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  getAllSubCategory,
  addUserFavorite,
  getUserFavoriteList,
} from 'redux-actions';
import {Screen, Button, Header, MedicalItems, Toast, Loader} from 'components';
import {SharingData} from 'json';
import * as styles from './styles';

export const ProgressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [favItem, setFavItem] = useState([]);
  const [first, setFirst] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progressData, setProgressData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const clearData = () => {
    progressData.map((val, i) => {
      SharingData[i].selectedCard = false;
    });
    setExtra(extra + 1);
  };

  useEffect(() => {
    console.log('favItem', favItem);
  }, [favItem]);

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const getAllSubCategoryData = async () => {
    setLoading(true);
    // console.log('loginBody ==>', loginBody);
    const SubCategoryResponse = await dispatch(getAllSubCategory());
    const res = SubCategoryResponse;
    // console.log('getAllSubCategoryData res ==>', res);
    if (res.status) {
      setLoading(false);
      // console.log('SubCategoryResponse data .. ==>', res.data);
      // setSharingDataList(res.data);
      setProgressData(res.data);
      setExtra(extra + 1);
      // toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
      // setOtpErr(res.message);
    }
  };
  const addUserFavoriteData = async () => {
    setLoading(true);
    const fevUserBody = {
      subcategory_id: favItem,
    };
    const SubCategoryResponse = await dispatch(addUserFavorite(fevUserBody));
    const res = SubCategoryResponse;
    console.log('addUserFavoriteData res RESSS==>', res);
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
    // console.log('loginBody ==>', loginBody);
    const SubCategoryResponse = await dispatch(getUserFavoriteList());
    const res = SubCategoryResponse;
    // console.log('getUserFavoriteListData res ==>', res);
    if (res.status) {
      setLoading(false);
      // console.log('SubCategoryResponse data .. ==>', res.data.subCategoryDataN);
      let favData = res.data.subCategoryDataN;
      let filterData = favData.filter((val, i) => {
        return val.is_favorite == true;
      });

      // console.log('filterData ==> ', filterData);

      setFavoriteData(filterData);
      // setFavoriteData(res.data);
      setExtra(extra + 1);
      // toastMessage(res.message);
    } else {
      setLoading(false);
      toastMessage(res.message);
      // setOtpErr(res.message);
    }
  };

  useEffect(() => {
    getAllSubCategoryData();
    getUserFavoriteListData();
    // addUserFavoriteData();
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header
        isColor={true}
        isHeading={true}
        title={'progress_screen.progress'}
      />
      <Screen withScroll>
        {first && (
          <View>
            {favoriteData.length >= 1 && (
              <View>
                <View style={styles.row()}>
                  {favoriteData.map((item, index) => {
                    return (
                      <MedicalItems
                        key={index + 'MedicalItems'}
                        onPress={() => {
                          setTimeout(() => {
                            navigation.navigate('progressDetailScreen', {
                              selectedItems: item,
                            });
                          }, 100);
                          // progressData[index].selectedCard = !item.selectedCard;
                          // setExtra(extra + 1);
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
          </View>
        )}

        {/* {first && (
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
            <Button
              buttonStyle={styles.button()}
              buttonText={styles.buttonTxt()}
              nameTx={'progress_screen.addFav'}
              onPress={() => {
                let data = progressData.filter(val => val.selectedCard == true);
                setFavItem(data);
                setFirst(false);
                clearData();
              }}
            />
          </View>
        )}
        {!first ? (
          <View>
            <View style={styles.row()}>
              {favItem.map((item, index) => {
                // console.log('item', item);
                let Icon = item.svg;
                return (
                  <MedicalItems
                    key={index + 'MI'}
                    onPress={() => {
                      setTimeout(() => {
                        navigation.navigate('progressDetailScreen', {
                          selectedItems: item,
                        });
                      }, 100);
                      // progressData[index].selectedCard = !item.selectedCard;
                      // setExtra(extra + 1);
                    }}
                    containerStyle={styles.listViewStyle()}
                    nameFirst={item.value}
                    nameSecond={item.name}
                    nameThird={item.unit}
                    svgCardItems={item.icon}
                    // isSelected={item.selectedCard}
                  />
                );
              })}
            </View>
            <Button
              buttonStyle={styles.button()}
              buttonText={styles.buttonTxt()}
              nameTx={'progress_screen.selectFav'}
              onPress={() => {
                if (first == false) {
                  let data = progressData.filter(
                    val => val.selectedCard == true,
                  );
                  setFavItem(data);
                  setFirst(true);
                }
              }}
            />
          </View>
        ) : null} */}
      </Screen>
      {first && (
        <View>
          {favoriteData.length >= 1 && (
            <Button
              buttonStyle={styles.button()}
              buttonText={styles.buttonTxt()}
              nameTx={'progress_screen.selectFav'}
              onPress={() => {
                setFirst(false);
              }}
            />
          )}
        </View>
      )}
      {!first && (
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'progress_screen.addFav'}
          onPress={() => {
            let data = progressData.filter(val => val.selectedCard == true);
            let dataId = data.map(i => i.subcategory_id);
            // console.log('dataId', dataId);
            setFavItem(dataId);
            setFirst(true);
            clearData();
            setExtra(extra + 1);
            setTimeout(() => {
              addUserFavoriteData();
            }, 150);
          }}
        />
      )}
    </SafeAreaView>
  );
};
