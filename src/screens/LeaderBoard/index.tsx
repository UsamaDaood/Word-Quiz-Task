import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Colors from '../../libs/Colors';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../common/Components/CustomHeader';

interface LeaderBoardProps {
  navigation: any;
}

const dataOne = [
  {id: 1, name: 'name', position: 1},
  {id: 2, name: 'name', position: 2},
  {id: 3, name: 'name', position: 3},
  {id: 4, name: 'name', position: 4},
  {id: 5, name: 'name', position: 5},
  {id: 6, name: 'name', position: 6},
  {id: 7, name: 'name', position: 7},
  {id: 8, name: 'name', position: 8},
  {id: 9, name: 'name', position: 9},
];

const LeaderBoard: React.FC<LeaderBoardProps> = ({navigation}) => {
  // remdering of Header
  const renderHeader = () => {
    return (
      <View>
        <CustomHeader
          headerTitle="LeaderBoard"
          leftIcon={require('../../../assets/images/ic_back.png')}
          callBackLeftImage={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  };

  const checkingPosition = (item: any) => {
    if (item?.position == 1) {
      return (
        <Image
          source={require('../../../assets/images/ic.png')}
          style={{width: 35, height: 35}}
          resizeMode={'cover'}
        />
      );
    } else if (item?.position == 2) {
      return (
        <Image
          source={require('../../../assets/images/ic_second_position.png')}
          style={{width: 30, height: 30}}
          resizeMode={'cover'}
        />
      );
    } else if (item?.position == 3) {
      return (
        <Image
          source={require('../../../assets/images/ic_third_position.png')}
          style={{width: 25, height: 25}}
          resizeMode={'cover'}
        />
      );
    } else {
      return (
        <View style={styles.positionView}>
          <Text style={styles.positionText}>{item?.position}</Text>
        </View>
      );
    }
  };

  const renderFlatList = () => {
    return (
      <View>
        <FlatList
          data={dataOne}
          ListEmptyComponent={() => {
            return <Text>No Record Found</Text>;
          }}
          renderItem={({item, index, separators}) => {
            return (
              <View style={styles.listItemStyle}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* Render of Position View */}
                  <View>{checkingPosition(item)}</View>

                  {/* User Image */}
                  <View>
                    <Image
                      source={require('../../../assets/images/ic_user.jpeg')}
                      style={styles.userImageStyle}
                      resizeMode={'cover'}
                    />
                  </View>
                  {/* Name and Star */}
                  <View style={{flexDirection: 'column', marginTop: 5}}>
                    <Text style={{color: Colors.black, fontSize: 17}}>
                      User Name
                    </Text>
                    <Text style={{color: Colors.darkGray, fontSize: 14}}>
                      Torronto, Canada
                    </Text>

                    {/* Points View */}
                    <View style={styles.namesViewStyle}>
                      <Image
                        source={require('../../../assets/images/ic_earn_points.png')}
                        style={styles.earnPointsStyle}
                        resizeMode={'cover'}
                      />
                      <Text style={{color: Colors.whiteColor}}>102,000</Text>
                    </View>
                  </View>
                </View>

                <View>
                  {/* right SIde Image */}
                  <View>
                    <Image
                      source={require('../../../assets/images/ic_star_black.png')}
                      style={styles.starImage}
                      resizeMode={'cover'}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      {renderHeader()}
      {/* render Flat List */}
      {renderFlatList()}
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  title: {
    fontSize: 38,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  listItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.colorGray,
    justifyContent: 'space-between',
  },

  userImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginHorizontal: 15,
  },
  namesViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#00AFB0',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  starImage: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  positionView: {
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.colorGray,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  positionText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 17,
  },
  earnPointsStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default LeaderBoard;
