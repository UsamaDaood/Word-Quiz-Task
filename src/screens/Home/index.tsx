import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Colors from '../../libs/Colors';
import CustomButton from '../../common/Components/CustomButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {toastShow} from '../../libs/toast';

// const learnerType = 'Learner - If You want to lea';
const options = ['Cities', 'Foods', 'Animals'];

interface HomeProps {
  navigation: any;
}

const citiesWord = ['R', 'S', 'O', 'P', 'A', 'G', 'N', 'I', 'E'];
const animalWord = ['O', 'A', 'O', 'R', 'G', 'K', 'N'];
const foodsWord = ['K', 'E', 'N', 'C', 'C', 'H', 'I'];

const cityObj = {
  id: 1,
  question: 'Capital of Singapore',
  data: citiesWord,
  correntAns: 'SINGAPORE',
};

const animalObj = {
  id: 2,
  question: 'National animal of Country',
  data: animalWord,
  correctAns: 'KANGROO',
};

const foodObj = {
  id: 3,
  question: 'National food of Singapore',
  data: foodsWord,
  correctAns: 'CHICKEN',
};

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const refRBSheetOptions = useRef<any>();
  const [typeOptions, setTypeOption] = useState<string>('');
  const [typeOptions_Arr, setTypeOption_Arr] = useState<any>([]);

  // rendering of Button
  const renderButtons = () => {
    return (
      <View style={styles.buttonStyle}>
        <CustomButton
          btnString="Proceed"
          viewStyle={{}}
          onClick={() => {
            if (typeOptions.trim().length == 0) {
              // if user is not select Category
              toastShow('error', 'Please Select category first.');
            } else {
              navigation.navigate('Quiz', {
                typeArr: typeOptions_Arr,
              });
            }
          }}
        />
      </View>
    );
  };

  // render Action Sheet View
  const renderCategoryView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          refRBSheetOptions.current.open();
        }}>
        <View style={styles.selectCategoryView}>
          <Text>
            {typeOptions.trim().length == 0 ? 'Select Category' : typeOptions}
          </Text>
          <Image
            source={require('../../../assets/images/ic_sort_down.png')}
            style={{width: 30, height: 30}}
            resizeMode={'cover'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  // render Bottom sheet for Select Learner , Instructor
  const renderBottomSheetOptions = () => {
    return (
      <RBSheet
        ref={refRBSheetOptions}
        height={220}
        customStyles={{
          container: {
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={styles.optionViewStyle}>
          <Text style={styles.optionsTextStyle}>
            Please select quiz category
          </Text>
          <View style={{marginVertical: 10}}>
            {options.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setTypeOption(item);
                  }}>
                  <View style={styles.circleViewStyle}>
                    {/* Circle Style */}
                    <View style={styles.circleView}>
                      <View
                        style={[
                          styles.circleStyle,
                          {
                            backgroundColor:
                              typeOptions == item
                                ? Colors.primaryColor
                                : Colors.whiteColor,
                          },
                        ]}
                      />
                    </View>
                    {/* Item Name */}
                    <Text
                      style={{
                        marginHorizontal: 5,
                      }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Button for Proceed */}
          <CustomButton
            btnString="Proceed"
            viewStyle={{height: 45}}
            onClick={() => {
              console.log('LOG:: OKAY TYPE OPTIONS ' + typeOptions);
              refRBSheetOptions.current.close();
              if (typeOptions == 'Cities') {
                setTypeOption_Arr(cityObj);
              } else if (typeOptions == 'Foods') {
                setTypeOption_Arr(foodObj);
              } else if (typeOptions == 'Animals') {
                setTypeOption_Arr(animalObj);
              }
            }}
          />
        </View>
      </RBSheet>
    );
  };
  return (
    <View style={styles.centered}>
      <Image
        source={require('../../../assets/images/ic_logo.png')}
        style={styles.logoImageStyle}
        resizeMode={'cover'}
      />
      <Text style={styles.title}>Words Puzzle</Text>
      <View style={styles.categoryViewStyle}>
        {renderCategoryView()}
        {renderButtons()}

        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              // console.log('LOG:: OKAHN ' + typeOptions);
              navigation.navigate('LeaderBoard');
            }}>
            <Text style={styles.leaderBoardStyle}>Go to LeaderBoard</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderBottomSheetOptions()}
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
    marginTop: 20,
  },
  selectCategoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: Colors.darkGray,
    padding: 5,
    borderRadius: 10,
  },
  circleStyle: {
    backgroundColor: Colors.black,
    width: 10,
    margin: 3,
    height: 10,
    borderRadius: 7,
  },
  circleView: {
    borderRadius: 10,
    borderWidth: 1,
  },
  optionViewStyle: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  optionsTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
  },
  buttonStyle: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button1Style: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  logoImageStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  categoryViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  leaderBoardStyle: {
    color: Colors.greenColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  circleViewStyle: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default HomeScreen;
