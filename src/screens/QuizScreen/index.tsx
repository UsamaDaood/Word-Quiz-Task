import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import Colors from '../../libs/Colors';
import CustomHeader from '../../common/Components/CustomHeader';
import {useIsFocused} from '@react-navigation/native';
import CustomButton from '../../common/Components/CustomButton';
import {toastShow} from '../../libs/toast';

interface SplashProps {
  navigation: any;
  route: any;
}

const QuizScreen: React.FC<SplashProps> = ({navigation, route}) => {
  const typeArr = route?.params?.typeArr;
  const dataArr = typeArr?.data;
  const questionState = typeArr?.question;
  const [stringWordArr, setStringWordArr] = useState<any>([]);
  const [stringWordArr_2, setStringWordArr_2] = useState<any>(dataArr);
  const [showStartButton, setShowStartButton] = useState<boolean>(true);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isAnsCorrect, setIsAnsCorrect] = useState<boolean>();
  const [dataArr_1, setDataArr_1] = useState<any>(typeArr);

  // rendering of Header
  const renderHeader = () => {
    return (
      <View>
        <CustomHeader
          headerTitle="Quiz"
          leftIcon={require('../../../assets/images/ic_back.png')}
          callBackLeftImage={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  };

  // rendering of Ready Button
  const renderShowQuestion = () => {
    return (
      <View>
        <CustomButton
          btnString="Let's start"
          viewStyle={styles.startButtonStyle}
          onClick={() => {
            letStartHandle();
          }}
        />
      </View>
    );
  };

  // lets Start handling
  const letStartHandle = () => {
    setShowStartButton(false);
    stringWordArr_2.map((item: any, index: number) => {
      const rr = {id: index, value: ''};
      stringWordArr.push(rr);
    });
  };

  // rendering of Filled
  const renderToBeFilled = () => {
    return (
      <View style={styles.filledViewStyle}>
        {stringWordArr.map((item: any) => {
          return (
            <View style={styles.stringMapItem}>
              <Text style={{fontSize: 17}}>{item?.value}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  // Rendering Filled
  // rendering of Filled
  const renderFilled = () => {
    return (
      <View style={styles.filledViewStyle}>
        {stringWordArr_2.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleClick(item, index);
              }}>
              <View style={styles.stringMapItem}>
                <Text style={{fontSize: 17}}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* </ScrollView> */}
      </View>
    );
  };

  // handling CLick
  const handleClick = (item: string, index: number) => {
    var pre = [...stringWordArr];
    const emptyIndex = pre.findIndex(obj => obj.value == '');
    if (emptyIndex !== -1) {
      console.log('LOG:: EMPTY INDEX ' + emptyIndex);
      pre[emptyIndex].value = item;
      setStringWordArr(pre);
      // Handling other arr
      var secArr = [...stringWordArr_2];
      console.log('LOG:: OPKAY NNN ' + index);
      secArr[index] = '';
      setStringWordArr_2(secArr);
      console.log('LOG:: OPKAY NNN ' + secArr[index]);
    } else {
      toastShow('success', 'You have complete.');
    }
  };

  // Render Question View
  const renderQuestionView = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        {showResult ? (
          renderResult()
        ) : (
          <View style={{flexDirection: 'column'}}>
            {renderToBeFilled()}
            <Text style={styles.questionStyle}>{questionState}</Text>
            {renderFilled()}
            <CustomButton
              btnString="Next"
              viewStyle={{marginHorizontal: 20, marginVertical: 20}}
              onClick={() => {
                let ans_string = '';
                stringWordArr.map((item: any) => {
                  ans_string += item?.value;
                });
                if (dataArr_1.correctAns == ans_string) {
                  setIsAnsCorrect(true);
                  console.log('LOG:: OKAY CORRECT');
                } else {
                  console.log('LOG:: OKAY WRONG');
                  setIsAnsCorrect(false);
                }
                setShowResult(true);
              }}
            />
          </View>
        )}
      </View>
    );
  };

  // Share
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "I've earned 10 points the poinst on Quiz App.",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      toastShow('error', 'Something went wrong');
    }
  };

  // Render Results
  const renderResult = () => {
    return (
      <View style={[styles.resultViewStyle]}>
        <Text
          style={[
            styles.successTextStyle,
            {color: !isAnsCorrect ? Colors.primaryColor : Colors.greenColor},
          ]}>
          {isAnsCorrect ? 'Correct Congratulations.' : 'Wrong Answer'}
        </Text>
        <Text style={styles.successTextStyle}>
          {isAnsCorrect && 'You earn 10 points'}
        </Text>
        {!isAnsCorrect ? (
          <CustomButton
            viewStyle={styles.tryAgainButton}
            onClick={() => {
              navigation.goBack();
            }}
            btnString={"Let's Try Again"}
          />
        ) : (
          <CustomButton
            viewStyle={styles.shareResultButtonStyle}
            btnStyle={{
              backgroundColor: Colors.greenColor,
              borderRadius: 10,
            }}
            onClick={async () => {
              await onShare();
            }}
            btnString={"Let's Share this Result."}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.viewWrap}>
      {renderHeader()}
      <View style={styles.centered}>
        <Image
          source={require('../../../assets/images/ic_logo.png')}
          style={styles.logoStyle}
          resizeMode={'cover'}
        />
        <Text style={styles.title}>Word Quiz</Text>
        {showStartButton ? renderShowQuestion() : renderQuestionView()}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
  },
  viewWrap: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  centerAlign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  britainTextStyle: {
    color: Colors.primaryColor,
  },
  title: {
    fontSize: 38,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  stringMapItem: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    width: 40,
    alignItems: 'center',
    height: 40,
    margin: 5,
  },
  questionStyle: {
    fontSize: 19,
    textAlign: 'center',
    color: Colors.redColor,
    marginTop: 40,
    marginBottom: 40,
  },
  filledViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  logoStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  successTextStyle: {
    color: Colors.greenColor,
    marginVertical: 6,
    fontSize: 20,
    fontWeight: 'bold',
  },
  startButtonStyle: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  resultViewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  tryAgainButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  shareResultButtonStyle: {
    backgroundColor: Colors.greenColor,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default QuizScreen;
